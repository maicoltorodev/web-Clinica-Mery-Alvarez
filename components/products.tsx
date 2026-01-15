"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowRight, Sparkles } from "lucide-react"

const products = [
  {
    name: "Advance Repair Complex",
    price: 153399,
    category: "Línea Antiedad",
    image: "/productos/advanced-repair-complex.jpeg",
    featured: true,
  },
  {
    name: "Batido Verde Nutricional",
    price: 89900,
    category: "Línea Nutricional",
    image: "/productos/batido-nutricional.jpeg",
    featured: true,
  },
  {
    name: "Contorno de Ojos Anti-edad",
    price: 155000,
    category: "Línea Antiedad",
    image: "/productos/contorno-ojos.jpeg",
    featured: true,
  },
  {
    name: "Jabón Suave con vitaminas",
    price: 83000,
    category: "Línea Preventiva",
    image: "/productos/jabon-suave.jpeg",
    featured: true,
  },
  {
    name: "Emulsión Caliente",
    price: 94600,
    category: "Línea Corporal",
    image: "/productos/emulsion-caliente.jpeg",
    featured: true,
  },
  {
    name: "Emulsión Triactiva Facial",
    price: 83000,
    category: "Línea Antiedad",
    image: "/productos/emulsion-triactiva.jpeg",
    featured: true,
  },
  {
    name: "Champú Capilar",
    price: 89000,
    category: "Línea Capilar",
    image: "/productos/champu-capilar.jpeg",
    featured: true,
  },
  {
    name: "Factor Renovador 4",
    price: 155700,
    category: "Línea Antiedad",
    image: "/productos/factor-4-renovador-antiedad.jpeg",
    featured: true,
  },
]

const categories = [
  { name: "Línea Antiedad", count: 6 },
  { name: "Línea Capilar", count: 3 },
  { name: "Línea Corporal", count: 2 },
  { name: "Línea Nutricional", count: 1 },
  { name: "Línea Preventiva", count: 4 },
  { name: "Línea Revitalizante", count: 4 },
]

export function Products() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section id="productos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nuestra Tienda</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Productos para el <span className="text-gradient-brand">cuidado de la piel</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Una amplia gama de productos dermocosméticos recomendados por nuestros profesionales, diseñados 
            para el cuidado y rejuvenecimiento de la piel.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="group relative">
              {/* Decorative border elements - same as hero */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-0" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
              
              <Card className="border-border/50 hover:border-transparent transition-all duration-300 cursor-pointer relative z-10">
                <CardContent className="p-4 text-center relative">
                  {/* Corner accent decorations */}
                  <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-accent rounded-tl-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                  <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-accent rounded-br-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">{category.count} productos</p>
              </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              {/* Decorative border elements - same as hero */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-0" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
              
              <Card className="border-border/50 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative z-10">
                <div className="relative aspect-square bg-gradient-to-br from-muted/50 to-muted/30 p-4 flex items-center justify-center overflow-hidden">
                  {/* Corner accent decorations */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-3/4 h-3/4 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
                      {product.category.split(" ")[1]}
                    </span>
                  </div>
                </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg mb-2 line-clamp-2">{product.name}</CardTitle>
                <CardDescription className="text-primary font-semibold text-lg">
                  {formatPrice(product.price)}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ShoppingCart className="h-4 w-4" />
                  Añadir al carrito
                </Button>
              </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2">
            Ver más productos
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
