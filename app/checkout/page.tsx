"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, ArrowRight, User, MapPin, Phone, Mail, CreditCard, Package, Calendar } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart()
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    metodoPago: "",
    notas: "",
  })

  const subtotal = getTotalPrice()
  const iva = subtotal * 0.19
  const total = subtotal + iva

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    if (step === 1) {
      if (formData.nombre && formData.email && formData.telefono && formData.direccion && formData.ciudad) {
        setStep(2)
      }
    } else if (step === 2) {
      if (formData.metodoPago) {
        setStep(3)
      }
    }
  }

  const handleSubmit = () => {
    // Simular procesamiento
    const orderData = {
      ...formData,
      items: cartItems,
      total,
      fecha: new Date().toISOString(),
      numeroOrden: `ORD-${Date.now()}`,
    }
    
    // Guardar orden (en producción se enviaría al servidor)
    localStorage.setItem("lastOrder", JSON.stringify(orderData))
    
    // Limpiar carrito
    clearCart()
    
    // Redirigir a confirmación
    router.push("/checkout/confirmacion")
  }

  if (cartItems.length === 0 && step < 3) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-24 sm:pt-20">
          <section className="py-16 sm:py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="border-2 border-border/50 max-w-2xl mx-auto">
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <Package className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Tu carrito está vacío</h3>
                  <p className="text-muted-foreground mb-6 text-center">
                    No hay productos para procesar
                  </p>
                  <Link href="/productos">
                    <Button size="lg" className="gap-2">
                      <ArrowLeft className="h-5 w-5" />
                      <span>Ver Productos</span>
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

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 sm:pt-20">
        <section className="py-16 sm:py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge={{ icon: CreditCard, text: "Finalizar Compra" }}
              title={
                <>Completa tu <span className="text-gradient-brand">pedido</span></>
              }
              description="Revisa tu información y confirma tu compra"
              className="mb-12"
            />

            {/* Progress Steps */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center flex-1">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      step >= s ? "bg-primary border-primary text-white" : "border-border text-muted-foreground"
                    }`}>
                      {step > s ? <CheckCircle className="h-5 w-5" /> : s}
                    </div>
                    {s < 3 && (
                      <div className={`flex-1 h-1 mx-2 ${
                        step > s ? "bg-primary" : "bg-border"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className={step >= 1 ? "text-primary font-semibold" : "text-muted-foreground"}>Datos de Envío</span>
                <span className={step >= 2 ? "text-primary font-semibold" : "text-muted-foreground"}>Método de Pago</span>
                <span className={step >= 3 ? "text-primary font-semibold" : "text-muted-foreground"}>Confirmación</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Formulario */}
              <div className="lg:col-span-2 space-y-6">
                {step === 1 && (
                  <Card className="border-2 border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Información de Envío
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          required
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                            Teléfono *
                          </label>
                          <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            required
                            value={formData.telefono}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="direccion" className="block text-sm font-medium mb-2">
                          Dirección *
                        </label>
                        <input
                          type="text"
                          id="direccion"
                          name="direccion"
                          required
                          value={formData.direccion}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="ciudad" className="block text-sm font-medium mb-2">
                            Ciudad *
                          </label>
                          <input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            required
                            value={formData.ciudad}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="codigoPostal" className="block text-sm font-medium mb-2">
                            Código Postal
                          </label>
                          <input
                            type="text"
                            id="codigoPostal"
                            name="codigoPostal"
                            value={formData.codigoPostal}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="notas" className="block text-sm font-medium mb-2">
                          Notas adicionales (opcional)
                        </label>
                        <textarea
                          id="notas"
                          name="notas"
                          rows={3}
                          value={formData.notas}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {step === 2 && (
                  <Card className="border-2 border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Método de Pago
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                          <input
                            type="radio"
                            name="metodoPago"
                            value="efectivo"
                            checked={formData.metodoPago === "efectivo"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary"
                          />
                          <div className="flex-1">
                            <p className="font-semibold">Pago en Efectivo</p>
                            <p className="text-sm text-muted-foreground">Paga al recibir tu pedido</p>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                          <input
                            type="radio"
                            name="metodoPago"
                            value="transferencia"
                            checked={formData.metodoPago === "transferencia"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary"
                          />
                          <div className="flex-1">
                            <p className="font-semibold">Transferencia Bancaria</p>
                            <p className="text-sm text-muted-foreground">Te enviaremos los datos bancarios</p>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                          <input
                            type="radio"
                            name="metodoPago"
                            value="whatsapp"
                            checked={formData.metodoPago === "whatsapp"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary"
                          />
                          <div className="flex-1">
                            <p className="font-semibold">Contactar por WhatsApp</p>
                            <p className="text-sm text-muted-foreground">Te contactaremos para coordinar el pago</p>
                          </div>
                        </label>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {step === 3 && (
                  <Card className="border-2 border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        Resumen del Pedido
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold mb-2">Datos de Envío</p>
                          <div className="bg-muted/50 p-3 rounded-lg space-y-1 text-sm">
                            <p><strong>Nombre:</strong> {formData.nombre}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Teléfono:</strong> {formData.telefono}</p>
                            <p><strong>Dirección:</strong> {formData.direccion}</p>
                            <p><strong>Ciudad:</strong> {formData.ciudad}</p>
                            {formData.codigoPostal && <p><strong>Código Postal:</strong> {formData.codigoPostal}</p>}
                          </div>
                        </div>

                        <div>
                          <p className="font-semibold mb-2">Método de Pago</p>
                          <div className="bg-muted/50 p-3 rounded-lg text-sm">
                            <p>
                              {formData.metodoPago === "efectivo" && "Pago en Efectivo"}
                              {formData.metodoPago === "transferencia" && "Transferencia Bancaria"}
                              {formData.metodoPago === "whatsapp" && "Contactar por WhatsApp"}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="font-semibold mb-2">Productos</p>
                          <div className="space-y-2">
                            {cartItems.map((item) => (
                              <div key={item.id} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                                <div className="relative w-12 h-12 bg-white rounded overflow-hidden">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain p-1"
                                    sizes="48px"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium">{item.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {item.quantity} x {formatPrice(item.price)}
                                  </p>
                                </div>
                                <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="flex gap-4">
                  {step > 1 && (
                    <Button variant="outline" onClick={() => setStep(step - 1)} className="gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      <span>Anterior</span>
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button onClick={handleNext} className="flex-1 gap-2">
                      <span>Continuar</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} className="flex-1 gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Confirmar Pedido</span>
                    </Button>
                  )}
                </div>
              </div>

              {/* Resumen */}
              <div className="lg:col-span-1">
                <Card className="border-2 border-border/50 sticky top-24">
                  <CardHeader>
                    <CardTitle>Resumen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">IVA (19%)</span>
                        <span className="font-medium">{formatPrice(iva)}</span>
                      </div>
                      <div className="border-t border-border pt-2 flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-primary">{formatPrice(total)}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground text-center">
                        {cartItems.length} {cartItems.length === 1 ? "producto" : "productos"} en tu pedido
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
