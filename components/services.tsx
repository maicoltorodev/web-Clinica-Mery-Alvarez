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
                
                <Card className="border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden relative z-10 h-full flex flex-col">
                  {/* Header con gradiente y número */}
                  <div className={`bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                    {/* Patrón decorativo de fondo */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent rounded-full blur-2xl" />
                    </div>
                    
                    {/* Número de tratamiento */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                      <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/90 backdrop-blur-sm border-2 border-primary/20 shadow-lg ${service.iconColor} text-2xl sm:text-3xl font-bold`}>
                        {index + 1}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3 sm:pb-4 p-5 sm:p-6 lg:p-8 relative z-10">
                      <div className="flex items-start justify-between mb-4 sm:mb-5">
                        {/* Icono mejorado con efectos */}
                        <div className="relative">
                          <div className={`p-3 sm:p-4 rounded-2xl bg-background/95 backdrop-blur-sm shadow-lg border border-primary/10 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                          </div>
                          {/* Efecto de brillo en hover */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                        </div>
                        
                        {/* Botón de acción */}
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-all duration-300 h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground shadow-lg">
                          <ArrowRight className="h-5 w-5" />
                        </Button>
                      </div>
                      
                      <CardTitle className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base leading-relaxed text-foreground/80">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </div>
                  
                  {/* Content con lista de tratamientos mejorada */}
                  <CardContent className="p-5 sm:p-6 lg:p-8 flex-1 flex flex-col">
                    <div className="mb-4 sm:mb-5">
                      <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
                        Tratamientos Incluidos
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {service.treatments.map((treatment, i) => (
                          <li key={i} className="flex items-center gap-3 group/item">
                            <div className="relative flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover/item:scale-150 transition-transform duration-200" />
                              <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary/30 animate-ping opacity-0 group-hover/item:opacity-100" />
                            </div>
                            <span className="text-sm sm:text-base text-foreground/80 group-hover/item:text-foreground group-hover/item:translate-x-1 transition-all duration-200">
                              {treatment}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Botón mejorado */}
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <Button 
                        variant="outline" 
                        className="w-full group/btn bg-gradient-to-r from-background to-muted/50 hover:from-primary hover:to-accent hover:text-primary-foreground border-primary/20 hover:border-primary transition-all duration-300 h-11 sm:h-12 text-sm sm:text-base font-semibold shadow-sm hover:shadow-lg"
                      >
                        <span className="group-hover/btn:translate-x-1 transition-transform duration-300 inline-block">
                          Ver Detalles
                        </span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                  
                  {/* Overlay decorativo */}
                  <OverlayGradient isActive={isInCenter} />
                  <CornerDecorations isActive={isInCenter} size="medium" position="outside" />
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
