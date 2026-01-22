"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { SocialMedia } from "@/components/social-media"
import { CTAClosing } from "@/components/cta-closing"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { scrollToSection } from "@/lib/utils"

export default function Home() {
  useEffect(() => {
    // Si hay un hash en la URL, hacer scroll a esa sección después de que la página cargue
    const hash = window.location.hash
    if (hash) {
      const sectionId = hash.replace("#", "")
      // Esperar a que el DOM esté completamente cargado
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 300)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Team />
      <Testimonials />
      <SocialMedia />
      <CTAClosing />
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
