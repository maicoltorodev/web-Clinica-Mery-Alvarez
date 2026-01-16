"use client"

import { useState, useMemo, useEffect, memo, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useInViewportCenter, useCarousel } from "@/lib/hooks"
import { formatPrice } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { DecorativeBorders } from "@/components/decorative/decorative-borders"
import { CornerDecorations } from "@/components/decorative/corner-decorations"
import { OverlayGradient } from "@/components/decorative/overlay-gradient"

// Componente para card de categoría
interface CategoryCardProps {
  category: { name: string; count: number }
  isActive: boolean
  onClick: () => void
  isMobile?: boolean
}

function CategoryCard({ category, isActive, onClick, isMobile = false }: CategoryCardProps) {
  return (
    <div 
      className={`group relative cursor-pointer ${isMobile ? 'px-2 py-2' : 'p-1'}`}
      onClick={onClick}
    >
      <DecorativeBorders isActive={isActive} blurIntensity="lg" roundedSize="2xl" />
      
      <Card className={`border-border/50 hover:border-transparent transition-all duration-300 relative z-10 ${isActive ? 'border-primary/50' : ''} ${isMobile ? 'border-transparent' : ''}`}>
        <CardContent className={`${isMobile ? 'p-5 py-6' : 'p-4 py-5 sm:p-5 sm:py-6'} text-center relative`}>
          <CornerDecorations isActive={isActive} size="small" />
          <h3 className={`font-semibold ${isMobile ? 'text-sm' : 'text-xs sm:text-sm'} mb-1 transition-colors leading-tight ${isActive ? 'text-primary' : isMobile ? 'text-foreground' : 'group-hover:text-primary'}`}>
            {category.name}
          </h3>
          <p className="text-xs text-muted-foreground">{category.count} productos</p>
        </CardContent>
      </Card>
    </div>
  )
}

// Componente separado para cada producto para mantener hooks estables
const ProductCard = memo(function ProductCard({ product }: { product: typeof products[0] }) {
  const { elementRef, isInCenter } = useInViewportCenter(0.35, `product-${product.id}`)
  
  return (
    <div key={product.id} ref={elementRef} className="group relative">
      <DecorativeBorders isActive={isInCenter} />
      
      <Card className="border-border/50 hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden relative z-10">
        <div className="relative aspect-square bg-white p-3 sm:p-4 flex items-center justify-center overflow-hidden">
          <OverlayGradient isActive={isInCenter} />
          <CornerDecorations isActive={isInCenter} size="medium" position="inside" />
          <img
            src={product.image}
            alt={product.name}
            className={`w-3/4 h-3/4 object-contain transition-transform duration-300 ${isInCenter ? 'scale-110' : ''} lg:scale-100 lg:group-hover:scale-110`}
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
          <Button className={`w-full gap-2 transition-colors h-10 sm:h-11 text-sm sm:text-base ${isInCenter ? '!bg-accent !text-background' : ''} lg:!bg-gradient-to-r lg:!from-primary lg:!to-accent lg:!text-background lg:group-hover:!bg-accent lg:group-hover:!text-background`}>
            <ShoppingCart className="h-4 w-4" />
            Añadir al carrito
          </Button>
        </CardContent>
      </Card>
    </div>
  )
})

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

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const syncSourceRef = useRef<'index' | 'category' | 'click' | null>(null)
  
  // Calcular categorías dinámicamente desde los productos
  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>()
    products.forEach(product => {
      const count = categoryMap.get(product.category) || 0
      categoryMap.set(product.category, count + 1)
    })
    
    const categoryArray = Array.from(categoryMap.entries()).map(([name, count]) => ({ name, count }))
    return [
      { name: "Todos", count: products.length },
      ...categoryArray
    ]
  }, [])

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = useMemo(() => {
    return selectedCategory === "Todos" 
      ? products 
      : products.filter(product => product.category === selectedCategory)
  }, [selectedCategory])

  // Usar hook de carrusel para navegación móvil (índice 0 = "Todos")
  const { currentIndex: currentCategoryIndex, goToPrevious, goToNext, goToIndex, setCurrentIndex } = useCarousel(categories.length, 0)

  // Sincronizar categoría seleccionada cuando cambia el índice del carrusel (navegación con botones o swipe)
  useEffect(() => {
    // Si el cambio viene de un click o de la categoría, no hacer nada aquí
    if (syncSourceRef.current === 'click' || syncSourceRef.current === 'category') {
      syncSourceRef.current = null
      return
    }
    
    const categoryName = categories[currentCategoryIndex]?.name
    if (categoryName && categoryName !== selectedCategory) {
      syncSourceRef.current = 'index'
      setSelectedCategory(categoryName)
    }
  }, [currentCategoryIndex, categories, selectedCategory])

  // Sincronizar índice del carrusel cuando cambia la categoría (solo para desktop clicks directos)
  useEffect(() => {
    // Si el cambio viene de un click o del índice, no hacer nada aquí
    if (syncSourceRef.current === 'click' || syncSourceRef.current === 'index') {
      syncSourceRef.current = null
      return
    }
    
    const categoryIndex = categories.findIndex(cat => cat.name === selectedCategory)
    if (categoryIndex !== -1 && categoryIndex !== currentCategoryIndex) {
      syncSourceRef.current = 'category'
      setCurrentIndex(categoryIndex)
    }
  }, [selectedCategory, categories, currentCategoryIndex, setCurrentIndex])

  // Manejar clic en categoría - marca la fuente como 'click' para evitar sincronización duplicada
  const handleCategoryClick = (categoryName: string, index: number) => {
    syncSourceRef.current = 'click'
    setSelectedCategory(categoryName)
    goToIndex(index)
  }

  return (
    <section id="productos" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge={{ icon: Sparkles, text: "Nuestra Tienda" }}
          title={
            <>Productos para el <span className="text-gradient-brand">cuidado de la piel</span></>
          }
          description="Una amplia gama de productos dermocosméticos recomendados por nuestros profesionales, diseñados para el cuidado y rejuvenecimiento de la piel."
        />

        {/* Categories */}
        {/* Mobile: Carrusel */}
        <div className="lg:hidden mb-10 sm:mb-12">
          <div className="relative flex items-center justify-center gap-4">
            {/* Botón anterior */}
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors flex-shrink-0 z-10"
              aria-label="Categoría anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Contenedor del carrusel con overflow hidden */}
            <div className="flex-1 max-w-xs overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentCategoryIndex * 100}%)` }}
              >
                {categories.map((category, index) => (
                  <div key={index} className="min-w-full flex-shrink-0">
                    <CategoryCard
                      category={category}
                      isActive={index === currentCategoryIndex}
                      onClick={() => handleCategoryClick(category.name, index)}
                      isMobile={true}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Botón siguiente */}
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors flex-shrink-0 z-10"
              aria-label="Categoría siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop: Grid de categorías */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              isActive={selectedCategory === category.name}
              onClick={() => handleCategoryClick(category.name, index)}
            />
          ))}
        </div>

        {/* Featured Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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
