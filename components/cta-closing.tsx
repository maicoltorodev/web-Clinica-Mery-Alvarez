"use client"

import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Sparkles, Award, Shield, Heart } from "lucide-react"
import { scrollToSection } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"

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
          <SectionHeader
            badge={{ icon: Sparkles, text: "Tu transformación comienza aquí" }}
            title={
              <>Invierte en <span className="text-gradient-brand">tu bienestar</span> hoy</>
            }
            description="Más de 27 años de experiencia y más de 150 mil pacientes satisfechos confían en nosotros. Agenda tu valoración y descubre cómo podemos ayudarte a alcanzar tus objetivos de belleza y bienestar."
            className="mb-8 sm:mb-10"
          />

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
              onClick={() => scrollToSection("contacto")}
            >
              <Calendar className="h-5 w-5" />
              <span>Agendar Valoración</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 h-12 sm:h-11 text-base w-full sm:w-auto"
              onClick={() => scrollToSection("tratamientos")}
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
