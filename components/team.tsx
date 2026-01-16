"use client"

import Image from "next/image"
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
    <section id="equipo" className="py-16 sm:py-20 lg:py-32 bg-background" style={{ contain: 'layout style paint' }}>
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 xl:gap-10 max-w-6xl xl:max-w-7xl mx-auto" style={{ contain: 'layout' }}>
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
              
              <Card className="border-2 border-border/50 hover:border-primary/30 transition-colors duration-300 overflow-hidden relative z-10 hover:shadow-2xl hover:shadow-primary/10 bg-card">
                {/* Image container with border design */}
                <div className="relative aspect-[3/4] overflow-visible bg-transparent p-2">
                  {/* Main image container - same style as hero */}
                  <div className="relative bg-gradient-to-br from-background to-muted/50 p-2.5 sm:p-3 rounded-xl shadow-xl lg:shadow-2xl border-2 border-border/50 lg:group-hover:border-primary/40 transition-colors duration-300 h-full lg:group-hover:shadow-primary/20">
                    {/* Efecto de brillo sutil en hover - solo desktop */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 lg:group-hover:from-primary/5 lg:group-hover:via-primary/0 lg:group-hover:to-accent/5 rounded-xl transition-opacity duration-300 pointer-events-none z-0 hidden lg:block" />
                    
                    <div className="relative overflow-hidden rounded-lg h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover relative z-10 transition-[filter] duration-300 lg:group-hover:brightness-105"
                        loading="lazy"
                        quality={85}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Subtle overlay gradient - siempre visible pero más intenso cuando está activo */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 transition-opacity duration-300 pointer-events-none z-10 ${
                        isInCenter 
                          ? 'opacity-100' 
                          : 'opacity-50 lg:group-hover:opacity-100'
                      }`} />
                      
                      {/* Logo badge sin fondo - solo el logo */}
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20 transition-transform duration-300 lg:group-hover:scale-110">
                        <Image
                          src="/logo.png"
                          alt="Clínica Mery Álvarez"
                          width={32}
                          height={32}
                          className="h-6 sm:h-8 w-auto object-contain drop-shadow-lg"
                          loading="lazy"
                          quality={90}
                        />
                      </div>
                    </div>
                    
                    <CornerDecorations isActive={isInCenter} size="medium" position="outside" />
                  </div>
                </div>
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="mb-3 sm:mb-4">
                  <h3 className={`text-lg sm:text-xl font-bold mb-1 transition-colors duration-300 ${
                    isInCenter 
                      ? 'text-primary' 
                      : 'lg:group-hover:text-primary'
                  }`}>
                    {member.name}
                  </h3>
                  <p className={`text-xs sm:text-sm font-medium mb-1 sm:mb-2 transition-colors duration-300 ${
                    isInCenter 
                      ? 'text-primary' 
                      : 'text-primary lg:group-hover:text-accent'
                  }`}>
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1 lg:group-hover:text-foreground/80 transition-colors duration-300">
                    {member.specialization}
                  </p>
                  <p className="text-xs text-muted-foreground lg:group-hover:text-foreground/70 transition-colors duration-300">
                    {member.credentials}
                  </p>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-border lg:group-hover:border-primary/20 transition-colors duration-300">
                  <span className="text-xs sm:text-sm text-muted-foreground lg:group-hover:text-primary/80 transition-colors duration-300 font-medium">
                    {member.experience}
                  </span>
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
