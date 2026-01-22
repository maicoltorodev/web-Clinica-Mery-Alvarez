import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { Products } from "@/components/products"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productos",
  description: "Explora nuestra amplia gama de productos dermocosméticos recomendados por nuestros profesionales. Productos especializados para el cuidado y rejuvenecimiento de la piel.",
}

export default function ProductosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 sm:pt-20">
        <Products />
      </div>
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
