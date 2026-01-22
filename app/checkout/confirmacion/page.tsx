"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, Package, Calendar, Phone, Mail } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import Image from "next/image"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"

interface OrderData {
  nombre: string
  email: string
  telefono: string
  direccion: string
  ciudad: string
  codigoPostal?: string
  metodoPago: string
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
    image: string
    category: string
  }>
  total: number
  fecha: string
  numeroOrden: string
}

export default function ConfirmacionPage() {
  const [orderData, setOrderData] = useState<OrderData | null>(null)

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder")
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder))
    }
  }, [])

  if (!orderData) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-24 sm:pt-20">
          <section className="py-16 sm:py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="border-2 border-border/50 max-w-2xl mx-auto">
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <Package className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No se encontró la orden</h3>
                  <Link href="/productos">
                    <Button size="lg" className="gap-2 mt-4">
                      <Home className="h-5 w-5" />
                      <span>Volver al Inicio</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
        <Footer />
        <WhatsAppFAB />
      </main>
    )
  }

  const fecha = new Date(orderData.fecha).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 sm:pt-20">
        <section className="py-16 sm:py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Header de confirmación */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <SectionHeader
                  badge={{ icon: CheckCircle, text: "¡Pedido Confirmado!" }}
                  title={
                    <>Tu pedido ha sido <span className="text-gradient-brand">confirmado</span></>
                  }
                  description={`Número de orden: ${orderData.numeroOrden}`}
                  className="mb-6"
                />
                <p className="text-muted-foreground">
                  Te hemos enviado un correo de confirmación a <strong>{orderData.email}</strong>
                </p>
              </div>

              {/* Resumen del pedido */}
              <Card className="border-2 border-border/50 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Resumen del Pedido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Información de la orden */}
                  <div className="grid sm:grid-cols-2 gap-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Número de Orden</p>
                      <p className="font-semibold">{orderData.numeroOrden}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Fecha</p>
                      <p className="font-semibold">{fecha}</p>
                    </div>
                  </div>

                  {/* Productos */}
                  <div>
                    <p className="font-semibold mb-3">Productos</p>
                    <div className="space-y-3">
                      {orderData.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 bg-muted/50 p-4 rounded-lg">
                          <div className="relative w-16 h-16 bg-white rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-contain p-2"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.quantity} x {formatPrice(item.price)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(orderData.total)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Información de envío y pago */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <Card className="border-2 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Información de Envío
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>{orderData.nombre}</strong></p>
                    <p>{orderData.direccion}</p>
                    <p>{orderData.ciudad}</p>
                    {orderData.codigoPostal && <p>Código Postal: {orderData.codigoPostal}</p>}
                    <p className="pt-2 border-t border-border mt-2">
                      <Phone className="h-4 w-4 inline mr-1" />
                      {orderData.telefono}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Método de Pago
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>
                      {orderData.metodoPago === "efectivo" && "Pago en Efectivo"}
                      {orderData.metodoPago === "transferencia" && "Transferencia Bancaria"}
                      {orderData.metodoPago === "whatsapp" && "Contactar por WhatsApp"}
                    </p>
                    {orderData.metodoPago === "transferencia" && (
                      <p className="text-muted-foreground text-xs mt-2">
                        Te enviaremos los datos bancarios por correo electrónico.
                      </p>
                    )}
                    {orderData.metodoPago === "whatsapp" && (
                      <p className="text-muted-foreground text-xs mt-2">
                        Te contactaremos por WhatsApp para coordinar el pago.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Próximos pasos */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">Próximos Pasos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Revisa tu correo</p>
                      <p className="text-muted-foreground">
                        Hemos enviado los detalles de tu pedido a {orderData.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Procesamiento</p>
                      <p className="text-muted-foreground">
                        Tu pedido será procesado y preparado para envío
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Notificación</p>
                      <p className="text-muted-foreground">
                        Te notificaremos cuando tu pedido esté en camino
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full gap-2">
                    <Home className="h-5 w-5" />
                    <span>Volver al Inicio</span>
                  </Button>
                </Link>
                <Link href="/productos" className="flex-1">
                  <Button size="lg" className="w-full gap-2">
                    <Package className="h-5 w-5" />
                    <span>Seguir Comprando</span>
                  </Button>
                </Link>
              </div>

              {/* Ayuda */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  ¿Tienes alguna pregunta sobre tu pedido?
                </p>
                <Link href="https://wa.me/573163433000" target="_blank">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Phone className="h-4 w-4" />
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
