import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clínica Mery Álvarez",
  description:
    "Excelencia en Medicina Estética. Clínica de medicina estética de alto prestigio. Tratamientos faciales, corporales y de zona íntima con tecnología de vanguardia y profesionalismo médico.",
  keywords: [
    "clínica estética",
    "medicina estética",
    "tratamientos faciales",
    "tratamientos corporales",
    "Medellín",
  ],
  authors: [{ name: "Clínica Mery Álvarez" }],
  openGraph: {
    title: "Clínica Mery Álvarez",
    description: "Excelencia en Medicina Estética. Donde la excelencia estética y médica se encuentran",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
