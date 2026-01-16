"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false)
  const [desktopImageLoaded, setDesktopImageLoaded] = useState(false)
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-16 sm:pt-20"
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
          <div className="w-full text-center px-2 sm:px-0 order-1 lg:order-2">
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
              <div className="relative w-full max-w-[200px] sm:max-w-[240px] group">
                {/* Decorative border elements */}
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute -inset-1.5 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg" />
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-background to-muted/50 p-2 sm:p-3 rounded-lg shadow-xl border border-border/50">
                  <div className="relative overflow-hidden rounded-md aspect-[3/4]">
                    {/* Skeleton */}
                    {!mobileImageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <div className="w-3/4 h-3/4 bg-gradient-to-br from-muted to-muted/50 animate-pulse rounded-md" />
                      </div>
                    )}
                    
                    <img
                      src="/mery.png"
                      alt="Clínica Mery Álvarez"
                      className={`w-full h-full object-contain relative z-10 transition-opacity duration-300 ${
                        mobileImageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setMobileImageLoaded(true)}
                    />
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 pointer-events-none z-10" />
                  </div>
                  
                  {/* Corner accent decorations */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-md opacity-60" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent rounded-br-md opacity-60" />
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
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md group">
              {/* Decorative border elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl" />
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-background to-muted/50 p-3 sm:p-4 rounded-xl shadow-2xl border border-border/50">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                  {/* Skeleton */}
                  {!desktopImageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <div className="w-3/4 h-3/4 bg-gradient-to-br from-muted to-muted/50 animate-pulse rounded-lg" />
                    </div>
                  )}
                  
                  <img
                    src="/mery.png"
                    alt="Clínica Mery Álvarez"
                    className={`w-full h-full object-contain relative z-10 transition-opacity duration-300 ${
                      desktopImageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setDesktopImageLoaded(true)}
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 pointer-events-none z-10" />
                </div>
                
                {/* Corner accent decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg opacity-60" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
