import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Basic validation (keep behavior)
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO || "aimanshahid800@gmail.com"
    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured. Missing RESEND_API_KEY." }, { status: 500 })
    }

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.6; color:#0a0a0a;">
        <h2 style="margin:0 0 12px;">New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap; margin-top:8px;">${escapeHtml(message)}</p>
      </div>
    `

    const payload = {
      from: "Portfolio <onboarding@resend.dev>", // safe default sender for Resend
      to: [to],
      reply_to: email, // so you can reply directly to the sender
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html,
    }

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!resp.ok) {
      const details = await resp.text().catch(() => "")
      return NextResponse.json({ error: "Failed to send message.", details }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }
}

// Simple escaping to prevent HTML injection
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
