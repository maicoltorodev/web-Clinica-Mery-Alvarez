import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { Services } from "@/components/services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tratamientos",
  description: "Descubre todos nuestros tratamientos de medicina estética: faciales, corporales, zona íntima y tecnología de vanguardia. Tratamientos personalizados con resultados excepcionales.",
}

export default function TratamientosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 sm:pt-20">
        <Services />
      </div>
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
