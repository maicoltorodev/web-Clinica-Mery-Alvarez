"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, Flower, Eye } from "lucide-react"
import { useInViewportCenter } from "@/lib/hooks"
import { SectionHeader } from "@/components/section-header"
import { DecorativeBorders } from "@/components/decorative/decorative-borders"
import { CornerDecorations } from "@/components/decorative/corner-decorations"
import { OverlayGradient } from "@/components/decorative/overlay-gradient"

const services = [
  {
    icon: Sparkles,
    title: "Tratamientos Faciales",
    description:
      "Descubre todo lo que nuestros tratamientos de rejuvenecimiento facial pueden hacer por ti y disfruta de resultados sorprendentes que te permitirán vivir una experiencia renovadora.",
    treatments: ["Ácido hialurónico", "Toxina botulínica", "Perfilado de labios", "Hilos tensores y colágeno", "Plasma rico en plaquetas", "Rinomodelación"],
    color: "from-accent/10 to-accent/20",
    iconColor: "text-accent",
  },
  {
    icon: Heart,
    title: "Tratamientos Corporales",
    description:
      "Te ayudamos a restaurar tu cuerpo con tratamientos de medicina estética y equipos innovadores que moldearán tu figura de forma natural sin perder tu comodidad en el proceso.",
    treatments: ["Criolipólisis", "Tonificación corporal", "Radiofrecuencia", "Depilación Láser Diodo", "Rejuvenecimiento de manos y cuello"],
    color: "from-primary/10 to-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Flower,
    title: "Zona Íntima",
    description:
      "Recupera la salud, bienestar y apariencia de tu zona íntima en cualquier etapa de tu vida, con tratamientos mínimamente invasivos, seguros y confiables en manos de profesionales.",
    treatments: ["Rejuvenecimiento vaginal", "Despigmentación vaginal", "Tratamientos especializados"],
    color: "from-accent/10 to-primary/10",
    iconColor: "text-accent",
  },
  {
    icon: Eye,
    title: "Tecnología",
    description:
      "Ofrecemos tecnología de vanguardia para tratamientos avanzados de medicina estética con resultados excepcionales.",
    treatments: ["Endolift láser", "Laser CO2 fraccionado", "Morpheus8", "Microson"],
    color: "from-primary/10 to-accent/10",
    iconColor: "text-primary",
  },
]

export function Services() {
  return (
    <section id="tratamientos" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge={{ icon: Sparkles, text: "Nuestros Servicios" }}
          title={
            <>Tratamientos de <span className="text-gradient-gold">Excelencia</span></>
          }
          description="Realizamos una variedad de tratamientos de medicina estética y antienvejecimiento para el cuidado del rostro y el cuerpo, 100% personalizados, de rápida recuperación y mínimamente invasivos."
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const { elementRef, isInCenter } = useInViewportCenter(0.35)
            return (
              <div 
                key={index} 
                ref={elementRef}
                className="group relative"
              >
                <DecorativeBorders isActive={isInCenter} />
                
                <Card className="border-border/50 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative z-10">
                  <div className={`bg-gradient-to-br ${service.color} p-5 sm:p-6 lg:p-8 relative`}>
                    <OverlayGradient isActive={isInCenter} />
                    <CornerDecorations isActive={isInCenter} size="medium" position="outside" />
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className={`p-2.5 sm:p-3 rounded-lg bg-background ${service.iconColor}`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 sm:h-10 sm:w-10">
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {service.treatments.map((treatment, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{treatment}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors h-10 sm:h-11 text-sm sm:text-base">
                      Ver Detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Button size="lg" className="gap-2 h-12 sm:h-11 w-full sm:w-auto text-base">
            Ver Todos los Tratamientos
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
