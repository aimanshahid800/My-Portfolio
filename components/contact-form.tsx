"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type Status = "idle" | "loading" | "success" | "error"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const validate = () => {
    const errs: string[] = []
    if (!name.trim()) errs.push("Please enter your name.")
    if (!email.trim()) {
      errs.push("Please enter your email.")
    } else {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      if (!emailOk) errs.push("Please enter a valid email address.")
    }
    if (!message.trim()) errs.push("Please enter a message.")
    return errs
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    const errs = validate()
    if (errs.length) {
      setError(errs.join(" "))
      return
    }

    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send your message.")
      }

      setStatus("success")
      setSuccess("Your message has been sent successfully!")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err: any) {
      setStatus("error")
      setError(err?.message || "Something went wrong. Please try again.")
    } finally {
      setTimeout(() => setStatus("idle"), 500) // small reset
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto w-full space-y-4 sm:space-y-5">
      {/* We keep the existing visual language: subtle transparency, soft borders, and matching text colors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-white/80 text-sm" htmlFor="name">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!error && !name.trim()}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-white/80 text-sm" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!error && (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-white/80 text-sm" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          aria-invalid={!!error && !message.trim()}
          required
        />
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </div>

      {/* Alerts: match your palette (pink/cyan/violet). Using pink for error, cyan for success to blend with existing gradients */}
      {error && (
        <p role="alert" className="text-sm text-[#EC4899]">
          {error}
        </p>
      )}
      {success && (
        <p role="status" className="text-sm text-[#06B6D4]">
          {success}
        </p>
      )}
    </form>
  )
}
