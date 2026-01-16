"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"
import { useCarousel } from "@/lib/hooks"
import { SectionHeader } from "@/components/section-header"
import { DecorativeBorders } from "@/components/decorative/decorative-borders"
import { CornerDecorations } from "@/components/decorative/corner-decorations"

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
  const { currentIndex, goToPrevious, goToNext, goToIndex } = useCarousel(testimonials.length, 0)
  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonios" className="py-16 sm:py-20 lg:py-32 bg-muted/30 relative overflow-hidden" style={{ contain: 'layout style paint' }}>
      {/* Decorative Elements - optimizado: menos blur en desktop para mejor rendimiento */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-xl lg:blur-2xl" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-xl lg:blur-2xl" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader
          badge={{ icon: MessageSquare, text: "Testimonios" }}
          title={
            <>Lo que dicen <span className="text-gradient-gold">nuestros pacientes</span></>
          }
          description="La satisfacción de nuestros pacientes es nuestra mayor recompensa"
        />

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-background border-2 border-border hover:border-primary shadow-lg hover:shadow-xl transition-[border-color,box-shadow,transform] duration-300 ease-out hover:scale-110 group will-change-transform"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-foreground group-hover:text-primary transition-colors duration-300" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-background border-2 border-border hover:border-primary shadow-lg hover:shadow-xl transition-[border-color,box-shadow,transform] duration-300 ease-out hover:scale-110 group will-change-transform"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-foreground group-hover:text-primary transition-colors duration-300" />
            </button>

            {/* Testimonial Card */}
            <div className="relative group" style={{ contain: 'layout' }}>
              <DecorativeBorders isActive={true} blurIntensity="xl" roundedSize="3xl" />
              
              <Card className="border-border/50 transition-[border-color,box-shadow] duration-300 relative z-10 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                <CardContent className="p-8 sm:p-12 lg:p-16 relative h-full flex flex-col">
                  {/* Subtle overlay gradient - siempre visible pero más intenso en mobile */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none z-10 opacity-50 lg:opacity-30" />
                  
                  <CornerDecorations isActive={true} size="large" />
                  
                  {/* Quote Icon - Large */}
                  <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-10">
                    <Quote className="h-24 w-24 sm:h-32 sm:w-32 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center relative z-10">
                    {/* Avatar and Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8 sm:mb-10">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center text-white font-bold text-3xl sm:text-4xl shadow-lg">
                        {currentTestimonial.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{currentTestimonial.name}</h3>
                        <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">{currentTestimonial.treatment}</p>
                        <div className="flex gap-1 justify-center sm:justify-start">
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="relative">
                      <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed italic text-center sm:text-left max-w-3xl mx-auto sm:mx-0">
                        "{currentTestimonial.text}"
                      </p>
                    </div>
                  </div>

                  {/* Indicator */}
                  <div className="flex justify-center gap-2 mt-8 sm:mt-10 relative z-10">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToIndex(index)}
                        className={`h-2 sm:h-2.5 rounded-full transition-[width,background-color] duration-300 ease-out ${
                          index === currentIndex
                            ? "w-8 sm:w-10 bg-primary"
                            : "w-2 sm:w-2.5 bg-border hover:bg-primary/50"
                        }`}
                        aria-label={`Ir al testimonio ${index + 1}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Button size="lg" variant="outline" className="gap-2 h-12 sm:h-11 w-full sm:w-auto text-base">
            Ver todos los testimonios
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
