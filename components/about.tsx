"use client"

import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Shield, Target } from "lucide-react"
import { useInViewportCenter } from "@/lib/hooks"
import { SectionHeader } from "@/components/section-header"
import { DecorativeBorders } from "@/components/decorative/decorative-borders"
import { CornerDecorations } from "@/components/decorative/corner-decorations"
import { OverlayGradient } from "@/components/decorative/overlay-gradient"

const values = [
  {
    icon: Award,
    title: "Experiencia",
    description: "Más de 27 años de experiencia en medicina estética. Más de 150 mil pacientes atendidos y completamente satisfechos desde 1999 que nos brindaron su total confianza.",
  },
  {
    icon: Users,
    title: "Profesionales",
    description: "Médicos altamente capacitados y especializados en Medicina Estética, en constante formación para brindar la mejor atención.",
  },
  {
    icon: Shield,
    title: "Tecnología",
    description: "Tratamientos con tecnología de vanguardia y productos certificados que garantizan seguridad y confianza.",
  },
  {
    icon: Target,
    title: "IPS Certificada",
    description: "Institución Prestadora de Salud certificada en alta calidad (BPC), garantizando estándares superiores.",
  },
]

// Componente memoizado para cada card de valor
const ValueCard = memo(function ValueCard({ value, index }: { value: typeof values[0], index: number }) {
  const Icon = value.icon
  const { elementRef, isInCenter } = useInViewportCenter(0.35)
  
  return (
    <div ref={elementRef} className="group relative">
      <DecorativeBorders isActive={isInCenter} />
      
      <Card className="border-border/50 hover:border-transparent transition-colors relative z-10">
        <CardContent className="p-4 sm:p-6 relative">
          <OverlayGradient isActive={isInCenter} />
          <CornerDecorations isActive={isInCenter} size="medium" />
          <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 w-fit mb-3 sm:mb-4">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
        </CardContent>
      </Card>
    </div>
  )
})

export function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-32 bg-muted/30" style={{ contain: 'layout style paint' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <SectionHeader
              badge={{ icon: Award, text: "Sobre Nosotros" }}
              title={
                <>Más de <span className="text-gradient-gold">27 años</span> de excelencia</>
              }
              description="Más de 27 años de experiencia respaldados por más de 150 mil pacientes satisfechos. Médicos especializados en constante formación, tratamientos con tecnología de vanguardia y productos certificados que garantizan seguridad y resultados excepcionales."
              className="text-center lg:text-left mb-6 sm:mb-8"
            />
            <div className="grid grid-cols-2 gap-4 sm:gap-6 justify-center lg:justify-start" style={{ contain: 'layout' }}>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-1 sm:mb-2">27+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-1 sm:mb-2">IPS</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Certificada BPC</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6" style={{ contain: 'layout' }}>
            {values.map((value, index) => (
              <ValueCard key={index} value={value} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
