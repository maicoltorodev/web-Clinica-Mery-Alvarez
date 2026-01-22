"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, Package } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

export default function CarritoPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart()
  const router = useRouter()

  const subtotal = getTotalPrice()
  const iva = subtotal * 0.19
  const total = subtotal + iva

  const handleQuantityChange = (id: string, change: number) => {
    const item = cartItems.find(i => i.id === id)
    if (item) {
      updateQuantity(id, item.quantity + change)
    }
  }

  const handleCheckout = () => {
    router.push("/checkout")
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 sm:pt-20">
        <section className="py-16 sm:py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge={{ icon: ShoppingCart, text: "Tu Carrito" }}
              title={
                <>Tu <span className="text-gradient-brand">carrito de compras</span></>
              }
              description="Revisa tus productos y completa tu compra"
              className="mb-12"
            />

            {cartItems.length === 0 ? (
              <Card className="border-2 border-border/50 max-w-2xl mx-auto">
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <Package className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Tu carrito está vacío</h3>
                  <p className="text-muted-foreground mb-6 text-center">
                    Agrega productos desde nuestra tienda para comenzar
                  </p>
                  <Link href="/productos">
                    <Button size="lg" className="gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      <span>Ver Productos</span>
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Lista de productos */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="border-2 border-border/50">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex gap-4">
                          <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-contain p-2"
                              sizes="128px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                            <p className="text-lg font-semibold text-primary mb-4">
                              {formatPrice(item.price)}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => handleQuantityChange(item.id, -1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center font-medium">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => handleQuantityChange(item.id, 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:text-destructive"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Resumen */}
                <div className="lg:col-span-1">
                  <Card className="border-2 border-border/50 sticky top-24">
                    <CardHeader>
                      <CardTitle>Resumen del Pedido</CardTitle>
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

                      <Button size="lg" className="w-full gap-2" onClick={handleCheckout} disabled={cartItems.length === 0}>
                        <span>Proceder al Pago</span>
                        <ArrowRight className="h-5 w-5" />
                      </Button>

                      <Link href="/productos">
                        <Button variant="outline" size="lg" className="w-full">
                          Continuar Comprando
                        </Button>
                      </Link>

                      <div className="pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground text-center">
                          ¿Necesitas ayuda? Contáctanos por WhatsApp
                        </p>
                        <Link href="https://wa.me/573163433000" target="_blank" className="block mt-2">
                          <Button variant="outline" size="sm" className="w-full">
                            Contactar por WhatsApp
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
