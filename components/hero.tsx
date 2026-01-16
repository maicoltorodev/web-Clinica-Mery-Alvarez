"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Sparkles } from "lucide-react"
import { scrollToSection } from "@/lib/utils"
import { HeroImage } from "@/components/hero-image"
import { CTA_BUTTON_CLASSES } from "@/lib/constants"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-24 sm:pt-20"
    >
      {/* Decorative Elements - optimizado: menos blur en desktop para mejor rendimiento */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-xl lg:blur-2xl" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-xl lg:blur-2xl" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr] gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Center - Content */}
          <div className="w-full text-center order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border-2 border-primary/40 shadow-lg shadow-primary/10 lg:backdrop-blur-sm mb-6 sm:mb-8">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Excelencia Médica desde 1999</span>
            </div>

            {/* Main Heading - Título */}
            <div className="mb-4 sm:mb-6 lg:mb-8 flex justify-center">
              <Image
                src="/titulo.png"
                alt="Clínica Mery Álvarez"
                width={640}
                height={200}
                className="h-24 xs:h-28 sm:h-36 md:h-44 lg:h-56 xl:h-64 w-auto object-contain max-w-full px-2"
                priority
                quality={90}
              />
            </div>

            {/* Image - Mobile only, below title */}
            <HeroImage variant="mobile" className="mb-6 sm:mb-8" />

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-balance px-2">
              Transformamos tu vida desde el interior con tratamientos personalizados de medicina estética, 
              tecnología de vanguardia y productos especializados para resaltar tu belleza natural.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-4 sm:px-0">
              <Button size="lg" className={`${CTA_BUTTON_CLASSES.base} ${CTA_BUTTON_CLASSES.primary}`}>
                <Calendar className="h-5 w-5" />
                <span>Agendar Valoración</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className={`${CTA_BUTTON_CLASSES.base} ${CTA_BUTTON_CLASSES.fullWidth}`} onClick={() => scrollToSection("tratamientos")}>
                <span>Conocer Tratamientos</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border max-w-3xl mx-auto px-4 sm:px-0" style={{ contain: 'layout' }}>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-brand mb-1 sm:mb-2">27+</div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-brand mb-1 sm:mb-2">150K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">Mil Pacientes</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-brand mb-1 sm:mb-2">5</div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">Sedes</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-brand mb-1 sm:mb-2">IPS</div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">Certificada BPC</div>
              </div>
            </div>
          </div>

          {/* Left Side - Image - Desktop only */}
          <HeroImage variant="desktop" />
        </div>
      </div>
    </section>
  )
}
