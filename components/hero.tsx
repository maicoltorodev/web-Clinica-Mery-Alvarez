"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex lg:grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Image */}
          <div className="hidden lg:flex justify-start flex-shrink-0">
            <div className="relative w-full max-w-md group">
              {/* Decorative border elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl" />
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-background to-muted/50 p-4 rounded-xl shadow-2xl border border-border/50">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/mery.png"
                    alt="Clínica Mery Álvarez"
                    className="w-full h-auto object-contain relative z-10"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                </div>
                
                {/* Corner accent decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg opacity-60" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg opacity-60" />
              </div>
            </div>
          </div>

          {/* Center - Content */}
          <div className="w-full text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Excelencia Médica desde 1999</span>
            </div>

            {/* Main Heading - Título */}
            <div className="mb-8 flex justify-center">
              <img
                src="/titulo.png"
                alt="Clínica Mery Álvarez"
                className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto object-contain max-w-full"
              />
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Somos una IPS que busca transformar tu vida desde el interior, brindando experiencias de salud y bienestar 
              a través de tratamientos personalizados realizados por profesionales con productos especializados y tecnología 
              de vanguardia, con el objetivo de resaltar tu belleza y promover estilos de vida saludable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="gap-2 group">
                <Calendar className="h-5 w-5" />
                <span>Agendar Valoración</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={() => {
                document.getElementById("tratamientos")?.scrollIntoView({ behavior: "smooth" })
              }}>
                <span>Conocer Tratamientos</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border max-w-3xl mx-auto">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient-brand mb-2">27+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient-brand mb-2">150K+</div>
                <div className="text-sm text-muted-foreground">Mil Pacientes</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient-brand mb-2">5</div>
                <div className="text-sm text-muted-foreground">Sedes</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient-brand mb-2">IPS</div>
                <div className="text-sm text-muted-foreground">Certificada BPC</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
