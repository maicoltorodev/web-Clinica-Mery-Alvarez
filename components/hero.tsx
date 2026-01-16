"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-24 sm:pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr] gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Center - Content */}
          <div className="w-full text-center order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border-2 border-primary/40 shadow-lg shadow-primary/10 backdrop-blur-sm mb-6 sm:mb-8">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Excelencia Médica desde 1999</span>
            </div>

            {/* Main Heading - Título */}
            <div className="mb-4 sm:mb-6 lg:mb-8 flex justify-center">
              <img
                src="/titulo.png"
                alt="Clínica Mery Álvarez"
                className="h-24 xs:h-28 sm:h-36 md:h-44 lg:h-56 xl:h-64 w-auto object-contain max-w-full px-2"
              />
            </div>

            {/* Image - Mobile only, below title */}
            <div className="flex justify-center lg:hidden mb-6 sm:mb-8">
              <div className="relative group inline-block">
                {/* Enhanced decorative border elements - more prominent for importance */}
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none z-0" />
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 via-accent/25 to-primary/25 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-accent/40 rounded-xl transition-all duration-300 pointer-events-none z-0 opacity-100 group-hover:from-primary/50 group-hover:to-accent/50" />
                
                {/* Professional image container with enhanced border and shadow */}
                <div className="relative z-10 rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted/30 shadow-2xl shadow-primary/15 group-hover:shadow-primary/25 border-2 border-primary/30 group-hover:border-primary/40 transition-all duration-500">
                  <img
                    src="/mery.png"
                    alt="Clínica Mery Álvarez"
                    className="w-[260px] sm:w-[320px] h-auto object-cover relative transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{
                      filter: 'contrast(1.05) saturate(1.08) brightness(1.03)',
                      imageRendering: 'crisp-edges',
                    }}
                  />
                  {/* Professional overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-balance px-2">
              Transformamos tu vida desde el interior con tratamientos personalizados de medicina estética, 
              tecnología de vanguardia y productos especializados para resaltar tu belleza natural.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-4 sm:px-0">
              <Button size="lg" className="gap-2 group w-full sm:w-auto h-12 sm:h-11 text-base">
                <Calendar className="h-5 w-5" />
                <span>Agendar Valoración</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto h-12 sm:h-11 text-base" onClick={() => {
                document.getElementById("tratamientos")?.scrollIntoView({ behavior: "smooth" })
              }}>
                <span>Conocer Tratamientos</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border max-w-3xl mx-auto px-4 sm:px-0">
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
          <div className="hidden lg:flex justify-start flex-shrink-0 w-full lg:w-auto order-1">
            <div className="relative group inline-block">
              {/* Enhanced decorative border elements - more prominent for importance */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none z-0" />
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 via-accent/25 to-primary/25 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-accent/40 rounded-xl transition-all duration-300 pointer-events-none z-0 opacity-100 group-hover:from-primary/50 group-hover:to-accent/50" />
              
              {/* Professional image container with enhanced border and shadow */}
              <div className="relative z-10 rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted/30 shadow-2xl shadow-primary/15 group-hover:shadow-primary/25 border-2 border-primary/30 group-hover:border-primary/40 transition-all duration-500">
                <img
                  src="/mery.png"
                  alt="Clínica Mery Álvarez"
                  className="w-[380px] h-auto object-cover relative transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{
                    filter: 'contrast(1.05) saturate(1.08) brightness(1.03)',
                    imageRendering: 'crisp-edges',
                  }}
                />
                {/* Professional overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
