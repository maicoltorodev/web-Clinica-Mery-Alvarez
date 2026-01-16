"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight } from "lucide-react"
import { useInViewportCenter } from "@/lib/hooks"

const testimonials = [
  {
    name: "María González",
    treatment: "Tratamiento Facial",
    rating: 5,
    text: "Excelente atención y resultados increíbles. El equipo es muy profesional y la clínica tiene un ambiente acogedor. Me siento renovada.",
  },
  {
    name: "Laura Martínez",
    treatment: "Tratamiento Corporal",
    rating: 5,
    text: "Los resultados superaron mis expectativas. El proceso fue cómodo y el personal muy atento. Definitivamente recomiendo la clínica.",
  },
  {
    name: "Sofía Ramírez",
    treatment: "Medicina Estética",
    rating: 5,
    text: "Profesionalismo de primer nivel. Me sentí en confianza desde el primer momento. Los resultados son naturales y hermosos.",
  },
  {
    name: "Ana Torres",
    treatment: "Tratamiento Facial",
    rating: 5,
    text: "La mejor decisión que pude tomar. El equipo médico es excepcional y los tratamientos de alta calidad. Muy satisfecha.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 sm:py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
            Lo que dicen <span className="text-gradient-gold">nuestros pacientes</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-balance px-2">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => {
            const { elementRef, isInCenter } = useInViewportCenter(0.35)
            return (
            <div key={index} ref={elementRef} className="group relative">
              {/* Decorative border elements - same as hero */}
              <div className={`absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl transition-opacity duration-300 pointer-events-none z-0 ${isInCenter ? 'opacity-60 lg:opacity-0 lg:group-hover:opacity-60' : 'opacity-0 lg:group-hover:opacity-60'}`} />
              <div className={`absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl transition-opacity duration-300 pointer-events-none z-0 ${isInCenter ? 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`} />
              
              <Card className="border-border/50 hover:border-transparent transition-all duration-300 relative z-10">
                <CardContent className="p-5 sm:p-6 lg:p-8 relative">
                  {/* Corner accent decorations */}
                  <div className={`absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg transition-opacity duration-300 pointer-events-none z-20 ${isInCenter ? 'opacity-60 lg:opacity-0 lg:group-hover:opacity-60' : 'opacity-0 lg:group-hover:opacity-60'}`} />
                  <div className={`absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg transition-opacity duration-300 pointer-events-none z-20 ${isInCenter ? 'opacity-60 lg:opacity-0 lg:group-hover:opacity-60' : 'opacity-0 lg:group-hover:opacity-60'}`} />
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">{testimonial.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">{testimonial.treatment}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/20 flex-shrink-0 hidden sm:block" />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
              </CardContent>
              </Card>
            </div>
          )})}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Button size="lg" variant="outline" className="gap-2 h-12 sm:h-11 w-full sm:w-auto text-base">
            Ver todos los testimonios
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
