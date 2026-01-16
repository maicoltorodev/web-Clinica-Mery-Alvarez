import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ViewportCenterProvider } from "@/lib/hooks"
import { MobileMenuProvider } from "@/lib/mobile-menu-context"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://web-clinica-mery-alvarez.vercel.app"),
  title: {
    default: "Clínica Mery Álvarez",
    template: "%s | Clínica Mery Álvarez",
  },
  description:
    "Excelencia en Medicina Estética. Clínica de medicina estética de alto prestigio. Tratamientos faciales, corporales y de zona íntima con tecnología de vanguardia y profesionalismo médico.",
  keywords: [
    "clínica estética",
    "medicina estética",
    "tratamientos faciales",
    "tratamientos corporales",
    "Medellín",
    "estética facial",
    "estética corporal",
    "dermatología estética",
  ],
  authors: [{ name: "Clínica Mery Álvarez" }],
  creator: "Clínica Mery Álvarez",
  publisher: "Clínica Mery Álvarez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "Clínica Mery Álvarez",
    title: "Clínica Mery Álvarez - Excelencia en Medicina Estética",
    description: "Excelencia en Medicina Estética. Donde la excelencia estética y médica se encuentran",
    images: [
      {
        url: "/metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Mery Álvarez - Excelencia en Medicina Estética",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Mery Álvarez - Excelencia en Medicina Estética",
    description: "Excelencia en Medicina Estética. Donde la excelencia estética y médica se encuentran",
    images: [
      {
        url: "/metadata.jpg",
        alt: "Clínica Mery Álvarez - Excelencia en Medicina Estética",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  category: "Medicina Estética",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
        return (
          <html lang="es" className="scroll-smooth">
            <body className={`${geist.className} antialiased`}>
              <ViewportCenterProvider>
                <MobileMenuProvider>
                  {children}
                </MobileMenuProvider>
              </ViewportCenterProvider>
            </body>
          </html>
        )
}
