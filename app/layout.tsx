import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"

export const metadata: Metadata = {
  title: "My Partner - Relationship Details Manager",
  description: "Keep your loved one's details safe and organized in one secure place",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-system">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
