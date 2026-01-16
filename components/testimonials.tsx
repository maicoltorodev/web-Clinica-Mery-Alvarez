"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ArrowRight, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"

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
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonios" className="py-16 sm:py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border-2 border-primary/40 shadow-lg shadow-primary/10 backdrop-blur-sm mb-4 sm:mb-6">
            <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Testimonios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
            Lo que dicen <span className="text-gradient-gold">nuestros pacientes</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-balance px-2">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-background border-2 border-border hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-foreground group-hover:text-primary transition-colors" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-background border-2 border-border hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-foreground group-hover:text-primary transition-colors" />
            </button>

            {/* Testimonial Card */}
            <div className="relative group">
              {/* Decorative border elements - same as hero */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-60 transition-opacity duration-300 pointer-events-none z-0" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
              
              <Card className="border-border/50 transition-all duration-300 relative z-10 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                <CardContent className="p-8 sm:p-12 lg:p-16 relative h-full flex flex-col">
                  {/* Corner accent decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-lg opacity-60 pointer-events-none z-20" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-lg opacity-60 pointer-events-none z-20" />
                  
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
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
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
