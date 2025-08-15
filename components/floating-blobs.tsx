"use client"

export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#4CC9F0]/20 to-[#A66CFF]/20 rounded-full blur-3xl animate-float-slow"></div>

      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-gradient-to-br from-[#A66CFF]/15 to-[#4CC9F0]/15 rounded-full blur-2xl animate-float-medium"></div>

      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-[#4CC9F0]/10 to-[#A66CFF]/10 rounded-full blur-xl animate-float-fast"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#A66CFF]/8 to-[#4CC9F0]/8 rounded-full blur-lg animate-float-reverse"></div>

      <div className="absolute bottom-40 -left-20 w-56 h-40 bg-gradient-to-r from-[#4CC9F0]/12 to-[#A66CFF]/12 rounded-full blur-2xl animate-float-slow transform rotate-45"></div>
    </div>
  )
}
