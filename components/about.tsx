"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Shield, Target } from "lucide-react"
import { useInViewportCenter } from "@/lib/hooks"

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

export function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border-2 border-primary/40 shadow-lg shadow-primary/10 backdrop-blur-sm mb-4 sm:mb-6">
              <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-primary">Sobre Nosotros</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
              Más de <span className="text-gradient-gold">27 años</span> de excelencia
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto text-balance px-2">
              Más de 27 años de experiencia respaldados por más de 150 mil pacientes satisfechos. 
              Médicos especializados en constante formación, tratamientos con tecnología de vanguardia 
              y productos certificados que garantizan seguridad y resultados excepcionales.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 justify-center lg:justify-start">
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
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              const { elementRef, isInCenter } = useInViewportCenter(0.35)
              return (
                <div key={index} ref={elementRef} className="group relative">
                  {/* Decorative border elements - same as hero */}
                  <div className={`absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl transition-opacity duration-300 pointer-events-none z-0 ${isInCenter ? 'opacity-60 lg:opacity-0 lg:group-hover:opacity-60' : 'opacity-0 lg:group-hover:opacity-60'}`} />
                  <div className={`absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl transition-opacity duration-300 pointer-events-none z-0 ${isInCenter ? 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`} />
                  
                  <Card className="border-border/50 hover:border-transparent transition-all relative z-10">
                    <CardContent className="p-4 sm:p-6 relative">
                      {/* Corner accent decorations */}
                      <div className={`absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg transition-opacity duration-300 pointer-events-none z-20 ${isInCenter ? 'opacity-60 lg:opacity-0 lg:group-hover:opacity-60' : 'opacity-0 lg:group-hover:opacity-60'}`} />
                      <div className={`absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg transition-opacity duration-300 pointer-events-none z-20 ${isInCenter ? 'opacity-60 lg:opacity-0 lg:group-hover:opacity-60' : 'opacity-0 lg:group-hover:opacity-60'}`} />
                    <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 w-fit mb-3 sm:mb-4">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
