"use client"

import { memo } from "react"
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

// Componente memoizado para cada card de servicio
const ServiceCard = memo(function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const Icon = service.icon
  const { elementRef, isInCenter } = useInViewportCenter(0.35)
  
  return (
    <div 
      ref={elementRef}
      className="group relative"
    >
      <DecorativeBorders isActive={isInCenter} />
      
      <Card className="border-border/50 lg:hover:border-primary/30 transition-colors duration-300 lg:hover:shadow-2xl lg:hover:shadow-primary/10 overflow-hidden relative z-10 h-full flex flex-col">
        {/* Header con gradiente y número */}
        <div className={`bg-gradient-to-br ${service.color} relative overflow-hidden`}>
          {/* Patrón decorativo de fondo - optimizado: menos blur en desktop */}
          <div className="absolute inset-0 opacity-5 lg:opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-xl lg:blur-2xl" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent rounded-full blur-lg lg:blur-xl" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
          </div>
          
          {/* Número de tratamiento - simplificado en móvil */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
            <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/90 lg:backdrop-blur-sm border-2 border-primary/20 shadow-md lg:shadow-lg ${service.iconColor} text-2xl sm:text-3xl font-bold`}>
              {index + 1}
            </div>
          </div>
          
          <CardHeader className="pb-3 sm:pb-4 p-5 sm:p-6 lg:p-8 relative z-10">
            <div className="flex items-start justify-between mb-4 sm:mb-5">
              {/* Icono mejorado con efectos - simplificado en móvil */}
              <div className="relative">
                <div className={`p-3 sm:p-4 rounded-2xl bg-background/95 lg:backdrop-blur-sm shadow-md lg:shadow-lg border border-primary/10 ${service.iconColor} lg:group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                {/* Efecto de brillo en hover - solo desktop */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10 hidden lg:block" />
              </div>
              
              {/* Botón de acción - solo desktop */}
              <Button variant="ghost" size="icon" className="opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 h-10 w-10 rounded-full bg-background/90 lg:backdrop-blur-sm hover:bg-primary hover:text-primary-foreground shadow-lg hidden lg:flex">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            <CardTitle className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 lg:group-hover:text-primary transition-colors duration-300">
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
                <li key={i} className="flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/80">
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
              className="w-full group/btn bg-gradient-to-r from-background to-muted/50 lg:hover:from-primary lg:hover:to-accent lg:hover:text-primary-foreground border-primary/20 lg:hover:border-primary transition-colors duration-300 h-11 sm:h-12 text-sm sm:text-base font-semibold shadow-sm lg:hover:shadow-lg"
            >
              <span className="lg:group-hover/btn:translate-x-1 transition-transform duration-300 inline-block">
                Ver Detalles
              </span>
              <ArrowRight className="ml-2 h-4 w-4 lg:group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </CardContent>
        
        {/* Overlay decorativo */}
        <OverlayGradient isActive={isInCenter} />
        <CornerDecorations isActive={isInCenter} size="medium" position="outside" />
      </Card>
    </div>
  )
})

export function Services() {
  return (
    <section id="tratamientos" className="py-16 sm:py-20 lg:py-32 bg-background" style={{ contain: 'layout style paint' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge={{ icon: Sparkles, text: "Nuestros Servicios" }}
          title={
            <>Tratamientos de la <span className="text-gradient-gold">más alta calidad</span></>
          }
          description="Realizamos una variedad de tratamientos de medicina estética y antienvejecimiento para el cuidado del rostro y el cuerpo, 100% personalizados, de rápida recuperación y mínimamente invasivos."
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-6" style={{ contain: 'layout' }}>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
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
