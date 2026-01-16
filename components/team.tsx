"use client"

import { Card, CardContent } from "@/components/ui/card"
import { UserCheck } from "lucide-react"
import { useInViewportCenter } from "@/lib/hooks"
import { SectionHeader } from "@/components/section-header"
import { DecorativeBorders } from "@/components/decorative/decorative-borders"
import { CornerDecorations } from "@/components/decorative/corner-decorations"
import { OverlayGradient } from "@/components/decorative/overlay-gradient"

const teamMembers = [
  {
    name: "Dr. Carlos Mendoza",
    role: "Especialista en Tratamientos Faciales",
    specialization: "Dermatología Estética",
    credentials: "Médico Especialista",
    experience: "12+ años de experiencia",
    image: "/personal/personal-carlos.png",
  },
  {
    name: "Dra. Mery Álvarez",
    role: "Directora Médica",
    specialization: "Medicina Estética",
    credentials: "Médica Especialista",
    experience: "27+ años de experiencia",
    image: "/personal/personal-mery.png",
  },
  {
    name: "Dra. Ana Rodríguez",
    role: "Especialista en Medicina Corporal",
    specialization: "Medicina Estética Corporal",
    credentials: "Médica Especialista",
    experience: "10+ años de experiencia",
    image: "/personal/personal-ana.png",
  },
]

export function Team() {
  return (
    <section id="equipo" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge={{ icon: UserCheck, text: "Nuestro Equipo" }}
          title={
            <>Nuestro <span className="text-gradient-gold">Equipo Médico</span></>
          }
          description="Profesionales altamente capacitados comprometidos con tu bienestar y belleza"
        />

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 max-w-6xl xl:max-w-7xl mx-auto">
          {teamMembers.map((member, index) => {
            const { elementRef, isInCenter } = useInViewportCenter(0.35)
            // Mery (índice 1) debe aparecer primero en mobile, pero mantener su posición en desktop
            const isMery = member.name === "Dra. Mery Álvarez"
            return (
            <div 
              key={index} 
              ref={elementRef} 
              className={`group relative ${isMery ? 'order-first md:order-none' : ''}`}
            >
              <DecorativeBorders isActive={isInCenter} />
              
              <Card className="border-border/50 hover:border-transparent transition-all duration-300 overflow-hidden relative z-10">
                {/* Image container with border design */}
                <div className="relative aspect-[3/4] overflow-visible bg-transparent p-2 group-hover:p-4 transition-all duration-300">
                  {/* Main image container - same style as hero */}
                  <div className="relative bg-gradient-to-br from-background to-muted/50 p-2.5 sm:p-3 group-hover:p-4 rounded-xl shadow-2xl border border-border/50 group-hover:border-accent/50 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden rounded-lg h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover relative z-10"
                      />
                      {/* Subtle overlay gradient - siempre visible pero más intenso cuando está activo */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 transition-opacity duration-300 pointer-events-none z-10 ${isInCenter ? 'opacity-100' : 'opacity-50'} lg:opacity-50 lg:group-hover:opacity-100`} />
                      
                      {/* Logo badge */}
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 bg-background/95 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg shadow-lg border border-border/50">
                        <img
                          src="/logo.png"
                          alt="Clínica Mery Álvarez"
                          className="h-6 sm:h-8 w-auto object-contain"
                        />
                      </div>
                    </div>
                    
                    <CornerDecorations isActive={isInCenter} size="medium" position="outside" />
                  </div>
                </div>
              <CardContent className="p-4 sm:p-6 text-center sm:text-left">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-xs sm:text-sm font-medium text-primary mb-1 sm:mb-2">{member.role}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">{member.specialization}</p>
                  <p className="text-xs text-muted-foreground">{member.credentials}</p>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-border">
                  <span className="text-xs sm:text-sm text-muted-foreground">{member.experience}</span>
                </div>
              </CardContent>
              </Card>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
