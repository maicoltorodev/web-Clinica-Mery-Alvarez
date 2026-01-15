"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Shield, Target } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Experiencia",
    description: "Más de 27 años de experiencia en medicina estética. Más de 150 mil pacientes atendidos y completamente satisfechos desde 1999.",
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
    <section id="nosotros" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sobre Nosotros</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Más de <span className="text-gradient-gold">27 años</span> de excelencia
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-balance">
              Más de 27 años de experiencia en medicina estética. Más de 150 mil pacientes atendidos y completamente satisfechos desde 1999.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Trabajamos con médicos altamente capacitados y especializados en Medicina Estética, que se mantienen 
              en constante formación para brindar la mejor atención. Ofrecemos tratamientos con tecnología de vanguardia 
              y productos certificados que garantizan seguridad y confianza.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-gradient-gold mb-2">27+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-gold mb-2">IPS</div>
                <div className="text-sm text-muted-foreground">Certificada BPC</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="group relative">
                  {/* Decorative border elements - same as hero */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-0" />
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                  
                  <Card className="border-border/50 hover:border-transparent transition-all relative z-10">
                    <CardContent className="p-6 relative">
                      {/* Corner accent decorations */}
                      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
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
