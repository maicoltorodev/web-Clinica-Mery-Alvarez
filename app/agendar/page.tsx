"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"

export default function AgendarPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    sede: "",
    fecha: "",
    hora: "",
    tratamiento: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se podría integrar con un servicio de agendamiento
    const whatsappMessage = `Hola, me gustaría agendar una cita:%0A%0A` +
      `Nombre: ${formData.nombre}%0A` +
      `Teléfono: ${formData.telefono}%0A` +
      `Email: ${formData.email}%0A` +
      `Sede: ${formData.sede}%0A` +
      `Fecha: ${formData.fecha}%0A` +
      `Hora: ${formData.hora}%0A` +
      `Tratamiento: ${formData.tratamiento}%0A` +
      `Mensaje: ${formData.mensaje}`
    
    window.open(`https://wa.me/573163433000?text=${whatsappMessage}`, '_blank')
  }

  const sedes = [
    {
      nombre: "Poblado",
      direccion: "Calle 50 # 50-50, Medellín",
      horario: "Lun - Vie: 7:30 AM - 6:00 PM | Sáb: 7:30 AM - 3:00 PM",
    },
    {
      nombre: "Centro",
      direccion: "Calle 50 # 50-50, Medellín",
      horario: "Lun - Vie: 8:00 AM - 5:30 PM | Sáb: 8:00 AM - 1:30 PM",
    },
    {
      nombre: "Laureles",
      direccion: "Calle 50 # 50-50, Medellín",
      horario: "Lun - Vie: 8:00 AM - 5:30 PM | Sáb: 8:00 AM - 1:30 PM",
    },
    {
      nombre: "Rionegro",
      direccion: "Calle 50 # 50-50, Rionegro",
      horario: "Lun - Vie: 8:00 AM - 5:30 PM | Sáb: 8:00 AM - 1:30 PM",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 sm:pt-20">
        <section className="py-16 sm:py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge={{ icon: Calendar, text: "Agenda tu Cita" }}
              title={
                <>Agenda tu <span className="text-gradient-brand">valoración</span></>
              }
              description="Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita. También puedes contactarnos directamente por WhatsApp."
              className="mb-12"
            />

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Formulario */}
              <Card className="border-2 border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Solicitar Cita</CardTitle>
                  <CardDescription>
                    Llena el formulario y te contactaremos para confirmar tu cita
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          required
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="sede" className="block text-sm font-medium mb-2">
                        Sede preferida *
                      </label>
                      <select
                        id="sede"
                        required
                        value={formData.sede}
                        onChange={(e) => setFormData({ ...formData, sede: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Selecciona una sede</option>
                        {sedes.map((sede) => (
                          <option key={sede.nombre} value={sede.nombre}>
                            {sede.nombre}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fecha" className="block text-sm font-medium mb-2">
                          Fecha preferida *
                        </label>
                        <input
                          type="date"
                          id="fecha"
                          required
                          value={formData.fecha}
                          onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="hora" className="block text-sm font-medium mb-2">
                          Hora preferida *
                        </label>
                        <input
                          type="time"
                          id="hora"
                          required
                          value={formData.hora}
                          onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="tratamiento" className="block text-sm font-medium mb-2">
                        Tratamiento de interés
                      </label>
                      <select
                        id="tratamiento"
                        value={formData.tratamiento}
                        onChange={(e) => setFormData({ ...formData, tratamiento: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Selecciona un tratamiento</option>
                        <option value="Faciales">Tratamientos Faciales</option>
                        <option value="Corporales">Tratamientos Corporales</option>
                        <option value="Zona Íntima">Zona Íntima</option>
                        <option value="Tecnología">Tecnología</option>
                        <option value="Valoración">Valoración General</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                        Mensaje adicional
                      </label>
                      <textarea
                        id="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>Enviar Solicitud</span>
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Información de contacto */}
              <div className="space-y-6">
                <Card className="border-2 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Información de Contacto</CardTitle>
                    <CardDescription>
                      También puedes contactarnos directamente
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <a href="tel:+573163433000" className="text-primary hover:underline">
                          +57 316 343 3000
                        </a>
                        <p className="text-sm text-muted-foreground">PBX: 604 322 9596</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:contacto@clinicameryalvarez.com" className="text-primary hover:underline">
                          contacto@clinicameryalvarez.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-sm text-muted-foreground">
                          Calle 50 # 50-50<br />
                          Medellín, Colombia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Horarios de Atención</p>
                        <p className="text-sm text-muted-foreground">
                          <strong>Poblado:</strong><br />
                          Lun - Vie: 7:30 AM - 6:00 PM<br />
                          Sáb: 7:30 AM - 3:00 PM<br /><br />
                          <strong>Centro - Laureles - Rionegro:</strong><br />
                          Lun - Vie: 8:00 AM - 5:30 PM<br />
                          Sáb: 8:00 AM - 1:30 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sedes */}
                <Card className="border-2 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Nuestras Sedes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {sedes.map((sede) => (
                      <div key={sede.nombre} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">{sede.nombre}</p>
                          <p className="text-sm text-muted-foreground">{sede.direccion}</p>
                          <p className="text-xs text-muted-foreground mt-1">{sede.horario}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* CTA WhatsApp */}
                <Link href="https://wa.me/573163433000" target="_blank">
                  <Button size="lg" variant="outline" className="w-full gap-2">
                    <Phone className="h-5 w-5" />
                    <span>Contactar por WhatsApp</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
