"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, Scissors, Eye } from "lucide-react"

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
      "Te ayudamos a restaurar tu cuerpo con tratamientos de medicina estética y equipos innovadores que moldearán tu figura de forma natural.",
    treatments: ["Criolipólisis", "Tonificación corporal", "Radiofrecuencia", "Depilación Láser Diodo", "Rejuvenecimiento de manos y cuello"],
    color: "from-primary/10 to-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Scissors,
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
    <section id="tratamientos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Tratamientos de <span className="text-gradient-gold">Excelencia</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Realizamos una variedad de tratamientos de medicina estética y antienvejecimiento para el cuidado del rostro y el cuerpo, 
            100% personalizados, de rápida recuperación y mínimamente invasivos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group relative">
                {/* Decorative border elements - same as hero */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-0" />
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                
                <Card className="border-border/50 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative z-10">
                  <div className={`bg-gradient-to-br ${service.color} p-8 relative`}>
                    {/* Corner accent decorations */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-background ${service.iconColor}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.treatments.map((treatment, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {treatment}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
        <div className="text-center mt-16">
          <Button size="lg" className="gap-2">
            Ver Todos los Tratamientos
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
