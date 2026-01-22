"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Heart, Flower, Eye, ArrowRight, CheckCircle, Clock, Users, Award } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"
import type { Metadata } from "next"

const tratamientosDetallados = [
  {
    id: "faciales",
    icon: Sparkles,
    title: "Tratamientos Faciales",
    description: "Transforma tu rostro con nuestros tratamientos faciales de última generación. Diseñados para rejuvenecer, hidratar y restaurar la vitalidad de tu piel.",
    color: "from-accent/10 to-accent/20",
    iconColor: "text-accent",
    tratamientos: [
      {
        nombre: "Ácido Hialurónico",
        descripcion: "Hidratación profunda y relleno de arrugas con resultados naturales y duraderos.",
        duracion: "30-45 min",
        sesiones: "1-2 sesiones",
        resultados: "Inmediatos, duran 6-12 meses",
      },
      {
        nombre: "Toxina Botulínica",
        descripcion: "Reducción de líneas de expresión y arrugas dinámicas con efecto natural.",
        duracion: "15-20 min",
        sesiones: "1 sesión",
        resultados: "Efectos en 3-5 días, duran 4-6 meses",
      },
      {
        nombre: "Perfilado de Labios",
        descripcion: "Aumento y definición de labios con técnicas avanzadas para un resultado natural.",
        duracion: "30 min",
        sesiones: "1-2 sesiones",
        resultados: "Inmediatos, duran 6-9 meses",
      },
      {
        nombre: "Hilos Tensores y Colágeno",
        descripcion: "Lifting no quirúrgico que estimula la producción natural de colágeno.",
        duracion: "45-60 min",
        sesiones: "1 sesión",
        resultados: "Progresivos, duran 12-18 meses",
      },
      {
        nombre: "Plasma Rico en Plaquetas (PRP)",
        descripcion: "Regeneración celular utilizando tu propio plasma para rejuvenecimiento facial.",
        duracion: "60 min",
        sesiones: "3-4 sesiones",
        resultados: "Progresivos, mejoran con el tiempo",
      },
      {
        nombre: "Rinomodelación",
        descripcion: "Perfeccionamiento del perfil nasal sin cirugía, con resultados inmediatos.",
        duracion: "30 min",
        sesiones: "1 sesión",
        resultados: "Inmediatos, duran 12-18 meses",
      },
    ],
  },
  {
    id: "corporales",
    icon: Heart,
    title: "Tratamientos Corporales",
    description: "Moldea y tonifica tu cuerpo con nuestros tratamientos corporales avanzados. Tecnología de vanguardia para resultados visibles y duraderos.",
    color: "from-primary/10 to-primary/20",
    iconColor: "text-primary",
    tratamientos: [
      {
        nombre: "Criolipólisis",
        descripcion: "Eliminación de grasa localizada mediante congelación controlada de células adiposas.",
        duracion: "60-90 min",
        sesiones: "1-2 sesiones",
        resultados: "Progresivos, visibles en 2-3 meses",
      },
      {
        nombre: "Tonificación Corporal",
        descripcion: "Fortalecimiento muscular y definición con tecnología de radiofrecuencia y electroestimulación.",
        duracion: "45 min",
        sesiones: "8-12 sesiones",
        resultados: "Progresivos, mejoran con cada sesión",
      },
      {
        nombre: "Radiofrecuencia",
        descripcion: "Reafirmación y reducción de celulitis mediante calor controlado que estimula el colágeno.",
        duracion: "60 min",
        sesiones: "6-10 sesiones",
        resultados: "Progresivos, visibles desde la primera sesión",
      },
      {
        nombre: "Depilación Láser Diodo",
        descripcion: "Eliminación permanente del vello con tecnología láser de última generación.",
        duracion: "30-60 min",
        sesiones: "6-8 sesiones",
        resultados: "Permanentes después del tratamiento completo",
      },
      {
        nombre: "Rejuvenecimiento de Manos y Cuello",
        descripcion: "Tratamientos especializados para áreas que delatan la edad, con resultados naturales.",
        duracion: "45 min",
        sesiones: "2-3 sesiones",
        resultados: "Inmediatos, duran 9-12 meses",
      },
    ],
  },
  {
    id: "intima",
    icon: Flower,
    title: "Zona Íntima",
    description: "Recupera la salud, bienestar y apariencia de tu zona íntima con tratamientos seguros, mínimamente invasivos y realizados por profesionales especializados.",
    color: "from-accent/10 to-primary/10",
    iconColor: "text-accent",
    tratamientos: [
      {
        nombre: "Rejuvenecimiento Vaginal",
        descripcion: "Mejora la elasticidad, hidratación y tono muscular vaginal con tecnología láser y PRP.",
        duracion: "45-60 min",
        sesiones: "3-4 sesiones",
        resultados: "Progresivos, mejoran la calidad de vida",
      },
      {
        nombre: "Despigmentación Vaginal",
        descripcion: "Unificación del tono de la piel en la zona íntima con tratamientos suaves y efectivos.",
        duracion: "30-45 min",
        sesiones: "4-6 sesiones",
        resultados: "Progresivos, visibles desde la segunda sesión",
      },
      {
        nombre: "Tratamientos Especializados",
        descripcion: "Soluciones personalizadas para cada necesidad específica de la zona íntima.",
        duracion: "Varía según tratamiento",
        sesiones: "Según necesidad",
        resultados: "Personalizados según el caso",
      },
    ],
  },
  {
    id: "tecnologia",
    icon: Eye,
    title: "Tecnología Avanzada",
    description: "Tecnología de vanguardia para tratamientos de medicina estética con resultados excepcionales y mínima invasividad.",
    color: "from-primary/10 to-accent/10",
    iconColor: "text-primary",
    tratamientos: [
      {
        nombre: "Endolift Láser",
        descripcion: "Lifting facial y corporal mediante láser interno que estimula el colágeno desde dentro.",
        duracion: "60-90 min",
        sesiones: "1 sesión",
        resultados: "Progresivos, duran 12-24 meses",
      },
      {
        nombre: "Laser CO2 Fraccionado",
        descripcion: "Rejuvenecimiento profundo de la piel, eliminación de manchas y cicatrices.",
        duracion: "45-60 min",
        sesiones: "1-3 sesiones",
        resultados: "Progresivos, mejoran con el tiempo",
      },
      {
        nombre: "Morpheus8",
        descripcion: "Reafirmación y rejuvenecimiento mediante radiofrecuencia fraccionada y microagujas.",
        duracion: "60-90 min",
        sesiones: "3-4 sesiones",
        resultados: "Progresivos, visibles en 2-3 meses",
      },
      {
        nombre: "Microson",
        descripcion: "Ultrasonido focalizado de alta intensidad para lifting no quirúrgico.",
        duracion: "60-90 min",
        sesiones: "1-2 sesiones",
        resultados: "Progresivos, duran 12-18 meses",
      },
    ],
  },
]

export default function TratamientosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 sm:pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge={{ icon: Sparkles, text: "Nuestros Tratamientos" }}
              title={
                <>Tratamientos de <span className="text-gradient-brand">medicina estética</span></>
              }
              description="Descubre nuestra amplia gama de tratamientos faciales, corporales y de zona íntima. Tecnología de vanguardia, profesionales especializados y resultados excepcionales."
              className="mb-8"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
              <Link href="/agendar">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <span>Agendar Valoración</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/#tratamientos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Ver Resumen
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Tratamientos Detallados */}
        <section className="py-16 sm:py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {tratamientosDetallados.map((categoria) => {
                const Icon = categoria.icon
                return (
                  <div key={categoria.id} className="space-y-8">
                    {/* Header de Categoría */}
                    <div className={`bg-gradient-to-br ${categoria.color} rounded-2xl p-8 sm:p-12`}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-4 rounded-2xl bg-background/95 backdrop-blur-sm shadow-lg ${categoria.iconColor}`}>
                          <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{categoria.title}</h2>
                          <p className="text-lg text-foreground/80">{categoria.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Grid de Tratamientos */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoria.tratamientos.map((tratamiento, index) => (
                        <Card key={index} className="border-2 border-border/50 hover:border-primary/30 transition-colors">
                          <CardHeader>
                            <CardTitle className="text-xl mb-2">{tratamiento.nombre}</CardTitle>
                            <CardDescription className="text-base leading-relaxed">
                              {tratamiento.descripcion}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">
                                <strong>Duración:</strong> {tratamiento.duracion}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">
                                <strong>Sesiones:</strong> {tratamiento.sesiones}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Award className="h-4 w-4 text-primary" />
                              <span className="text-muted-foreground">
                                <strong>Resultados:</strong> {tratamiento.resultados}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Final */}
            <div className="mt-16 text-center">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-8 sm:p-12">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      ¿Lista para comenzar tu transformación?
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Agenda una valoración gratuita con nuestros especialistas y descubre el tratamiento perfecto para ti.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link href="/agendar">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                          <span>Agendar Valoración Gratuita</span>
                          <ArrowRight className="h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/#contacto">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                          Contactar Ahora
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
