"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Sparkles, Award, Shield, Heart } from "lucide-react"

export function CTAClosing() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border-2 border-primary/40 shadow-lg shadow-primary/10 backdrop-blur-sm mb-6 sm:mb-8">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Tu transformación comienza aquí</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
            Invierte en <span className="text-gradient-brand">tu bienestar</span> hoy
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto text-balance px-2">
            Más de 27 años de experiencia y más de 150 mil pacientes satisfechos confían en nosotros. 
            Agenda tu valoración y descubre cómo podemos ayudarte a alcanzar tus objetivos de belleza y bienestar.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full bg-primary/10 border-2 border-primary/20 mb-4">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Experiencia Comprobada</h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center">
                27+ años de excelencia médica
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full bg-primary/10 border-2 border-primary/20 mb-4">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Máxima Seguridad</h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center">
                IPS Certificada BPC
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 rounded-full bg-primary/10 border-2 border-primary/20 mb-4">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Atención Personalizada</h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center">
                Tratamientos 100% personalizados
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              size="lg" 
              className="gap-2 group h-12 sm:h-11 text-base w-full sm:w-auto"
              onClick={() => {
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Calendar className="h-5 w-5" />
              <span>Agendar Valoración</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 h-12 sm:h-11 text-base w-full sm:w-auto"
              onClick={() => {
                document.getElementById("tratamientos")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span>Ver Tratamientos</span>
            </Button>
          </div>

          {/* Trust Message */}
          <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-border">
            <p className="text-sm sm:text-base text-muted-foreground italic max-w-xl mx-auto">
              "TÚ eres tu mejor inversión. Permítenos acompañarte en este camino hacia una versión mejorada de ti mismo."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
