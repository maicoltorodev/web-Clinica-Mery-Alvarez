"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useInViewportCenter } from "@/lib/hooks"

const products = [
  {
    id: "advance-repair-complex",
    name: "Advance Repair Complex",
    price: 153399,
    category: "Línea Antiedad",
    image: "/productos/advanced-repair-complex.jpeg",
    featured: true,
  },
  {
    id: "batido-verde-nutricional",
    name: "Batido Verde Nutricional",
    price: 89900,
    category: "Línea Nutricional",
    image: "/productos/batido-nutricional.jpeg",
    featured: true,
  },
  {
    id: "contorno-ojos-anti-edad",
    name: "Contorno de Ojos Anti-edad",
    price: 155000,
    category: "Línea Antiedad",
    image: "/productos/contorno-ojos.jpeg",
    featured: true,
  },
  {
    id: "jabon-suave-vitaminas",
    name: "Jabón Suave con vitaminas",
    price: 83000,
    category: "Línea Preventiva",
    image: "/productos/jabon-suave.jpeg",
    featured: true,
  },
  {
    id: "emulsion-caliente",
    name: "Emulsión Caliente",
    price: 94600,
    category: "Línea Corporal",
    image: "/productos/emulsion-caliente.jpeg",
    featured: true,
  },
  {
    id: "emulsion-triactiva-facial",
    name: "Emulsión Triactiva Facial",
    price: 83000,
    category: "Línea Revitalizante",
    image: "/productos/emulsion-triactiva.jpeg",
    featured: true,
  },
  {
    id: "champu-capilar",
    name: "Champú Capilar",
    price: 89000,
    category: "Línea Capilar",
    image: "/productos/champu-capilar.jpeg",
    featured: true,
  },
  {
    id: "factor-renovador-4",
    name: "Factor Renovador 4",
    price: 155700,
    category: "Línea Antiedad",
    image: "/productos/factor-4-renovador-antiedad.jpeg",
    featured: true,
  },
]

const categories = [
  { name: "Todos", count: products.length },
  { name: "Línea Antiedad", count: 6 },
  { name: "Línea Capilar", count: 3 },
  { name: "Línea Corporal", count: 2 },
  { name: "Línea Nutricional", count: 1 },
  { name: "Línea Preventiva", count: 4 },
  { name: "Línea Revitalizante", count: 4 },
]

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  // Navegación del carrusel
  const handlePrevious = () => {
    setCurrentCategoryIndex((prev) => {
      const newIndex = prev === 0 ? categories.length - 1 : prev - 1
      setSelectedCategory(categories[newIndex].name)
      return newIndex
    })
  }

  const handleNext = () => {
    setCurrentCategoryIndex((prev) => {
      const newIndex = prev === categories.length - 1 ? 0 : prev + 1
      setSelectedCategory(categories[newIndex].name)
      return newIndex
    })
  }

  // Manejar clic en categoría (desktop)
  const handleCategoryClick = (categoryName: string, index: number) => {
    setSelectedCategory(categoryName)
    setCurrentCategoryIndex(index)
  }

  return (
    <section id="productos" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Nuestra Tienda</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
            Productos para el <span className="text-gradient-brand">cuidado de la piel</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-balance px-2">
            Una amplia gama de productos dermocosméticos recomendados por nuestros profesionales, diseñados 
            para el cuidado y rejuvenecimiento de la piel.
          </p>
        </div>

        {/* Categories */}
        {/* Mobile: Carrusel */}
        <div className="lg:hidden mb-10 sm:mb-12">
          <div className="relative flex items-center justify-center gap-4">
            {/* Botón anterior */}
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors flex-shrink-0 z-10"
              aria-label="Categoría anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Categoría actual */}
            <div className="flex-1 max-w-xs">
              <div className="group relative">
                {/* Decorative border elements - same as hero */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-lg opacity-60 transition-opacity duration-300 pointer-events-none z-0" />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                
                <Card className="border-primary/50 hover:border-transparent transition-all duration-300 relative z-10">
                  <CardContent className="p-4 text-center relative">
                    {/* Corner accent decorations */}
                    <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-accent rounded-tl-md opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                    <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-accent rounded-br-md opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                    <h3 className="font-semibold text-sm mb-1 text-primary transition-colors leading-tight">
                      {categories[currentCategoryIndex].name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{categories[currentCategoryIndex].count} productos</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Botón siguiente */}
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors flex-shrink-0 z-10"
              aria-label="Categoría siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop: Grid de categorías */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {categories.map((category, index) => {
            const isActive = selectedCategory === category.name
            return (
              <div 
                key={index} 
                className="group relative cursor-pointer"
                onClick={() => handleCategoryClick(category.name, index)}
              >
                {/* Decorative border elements - same as hero */}
                <div className={`absolute -inset-2 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-lg transition-opacity duration-300 pointer-events-none z-0 ${isActive ? 'opacity-60' : 'opacity-0 group-hover:opacity-60'}`} />
                <div className={`absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg transition-opacity duration-300 pointer-events-none z-0 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                
                <Card className={`border-border/50 hover:border-transparent transition-all duration-300 relative z-10 ${isActive ? 'border-primary/50' : ''}`}>
                  <CardContent className="p-3 sm:p-4 text-center relative">
                    {/* Corner accent decorations */}
                    <div className={`absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-accent rounded-tl-md transition-opacity duration-300 pointer-events-none z-20 ${isActive ? 'opacity-60' : 'opacity-0 group-hover:opacity-60'}`} />
                    <div className={`absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-accent rounded-br-md transition-opacity duration-300 pointer-events-none z-20 ${isActive ? 'opacity-60' : 'opacity-0 group-hover:opacity-60'}`} />
                    <h3 className={`font-semibold text-xs sm:text-sm mb-1 transition-colors leading-tight ${isActive ? 'text-primary' : 'group-hover:text-primary'}`}>
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{category.count} productos</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Featured Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {filteredProducts.map((product) => {
            const { elementRef, isInCenter } = useInViewportCenter(0.35, `product-${product.id}`)
            return (
              <div key={product.id} ref={elementRef} className="group relative">
              {/* Decorative border elements - same as hero */}
              <div className={`absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl transition-opacity duration-300 pointer-events-none z-0 ${isInCenter ? 'opacity-60 lg:opacity-0 lg:group-hover:opacity-60' : 'opacity-0 lg:group-hover:opacity-60'}`} />
              <div className={`absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl transition-opacity duration-300 pointer-events-none z-0 ${isInCenter ? 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`} />
              
              <Card className="border-border/50 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative z-10">
                <div className="relative aspect-square bg-white p-3 sm:p-4 flex items-center justify-center overflow-hidden">
                  {/* Corner accent decorations */}
                  <div className={`absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg transition-opacity duration-300 pointer-events-none z-20 ${isInCenter ? 'opacity-60 lg:opacity-0 lg:group-hover:opacity-60' : 'opacity-0 lg:group-hover:opacity-60'}`} />
                  <div className={`absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg transition-opacity duration-300 pointer-events-none z-20 ${isInCenter ? 'opacity-60 lg:opacity-0 lg:group-hover:opacity-60' : 'opacity-0 lg:group-hover:opacity-60'}`} />
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-3/4 h-3/4 object-contain transition-transform duration-300 ${isInCenter ? 'scale-110 lg:scale-100 lg:group-hover:scale-110' : 'lg:group-hover:scale-110'}`}
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm">
                      {product.category.split(" ")[1]}
                    </span>
                  </div>
                </div>
              <CardHeader className="pb-2 sm:pb-3 px-4 pt-4">
                <CardTitle className="text-base sm:text-lg mb-2 line-clamp-2 leading-tight">{product.name}</CardTitle>
                <CardDescription className="text-primary font-semibold text-base sm:text-lg">
                  {formatPrice(product.price)}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 px-4 pb-4">
                <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors h-10 sm:h-11 text-sm sm:text-base">
                  <ShoppingCart className="h-4 w-4" />
                  Añadir al carrito
                </Button>
              </CardContent>
              </Card>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2 h-12 sm:h-11 w-full sm:w-auto text-base">
            Ver más productos
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
