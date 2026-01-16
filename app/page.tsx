import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { SocialMedia } from "@/components/social-media"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export default function Home() {
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
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
