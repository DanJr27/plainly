"use client" // <--- Mandatory for interactivity in Next.js 15

import { signIn } from "next-auth/react"

export function SignIn() {
  return (
    <button 
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="flex items-center gap-3 bg-white border border-gray-300 rounded-lg px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
    >
      <img 
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
        className="w-5 h-5" 
        alt="Google" 
      />
      Sign in with Google
    </button>
  )
}