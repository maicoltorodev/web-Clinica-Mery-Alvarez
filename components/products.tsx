"use client"

import Image from "next/image"
import Link from "next/link"
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
      
      <Card className={`border-2 transition-all duration-300 relative z-10 overflow-hidden ${
        isActive 
          ? 'border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 shadow-lg shadow-primary/10' 
          : 'border-border/50 bg-card hover:border-primary/30 hover:bg-primary/2'
      }`}>
        {/* Fondo decorativo cuando está activo */}
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        )}
        
        <CardContent className={`${isMobile ? 'p-5 py-6' : 'p-4 py-5 sm:p-5 sm:py-6'} text-center relative`}>
          <CornerDecorations isActive={isActive} size="small" />
          
          {/* Badge de número cuando está activo */}
          {isActive && (
            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
              <span className="text-[10px] font-bold text-white">✓</span>
            </div>
          )}
          
          <div className="flex flex-col items-center gap-2">
            <h3 className={`font-bold ${isMobile ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'} transition-colors leading-tight ${
              isActive 
                ? 'text-primary' 
                : 'text-foreground group-hover:text-primary'
            }`}>
              {category.name}
            </h3>
            
            {/* Badge de cantidad mejorado */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
              isActive
                ? 'bg-primary/15 text-primary border-primary/30 shadow-sm'
                : 'bg-muted/50 text-muted-foreground border-border/50 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20'
            }`}>
              <span className="font-bold">{category.count}</span>
              <span className="text-[10px] opacity-80">{category.count === 1 ? 'item' : 'items'}</span>
            </div>
          </div>
          
          {/* Indicador activo mejorado */}
          {isActive && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
          )}
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
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className={`w-3/4 h-3/4 object-contain transition-transform duration-300 ${isInCenter ? 'scale-110' : ''} lg:scale-100 lg:group-hover:scale-110`}
            loading="lazy"
            quality={80}
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
          <Link href="/carrito">
            <Button className={`w-full gap-2 transition-colors h-10 sm:h-11 text-sm sm:text-base ${isInCenter ? '!bg-accent !text-background' : ''} lg:!bg-gradient-to-r lg:!from-primary lg:!to-accent lg:!text-background lg:group-hover:!bg-accent lg:group-hover:!text-background`}>
              <ShoppingCart className="h-4 w-4" />
              Añadir al carrito
            </Button>
          </Link>
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
    <section id="productos" className="py-16 sm:py-20 lg:py-32 bg-background" style={{ contain: 'layout style paint' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge={{ icon: Sparkles, text: "Nuestra Tienda" }}
          title={
            <>Productos para el <span className="text-gradient-brand">cuidado de la piel</span></>
          }
          description="Una amplia gama de productos dermocosméticos recomendados por nuestros profesionales, diseñados para el cuidado y rejuvenecimiento de la piel."
        />

        {/* Categories Filter */}
        {/* Mobile: Carrusel */}
        <div className="lg:hidden mb-10 sm:mb-12">
          {/* Header del filtro mejorado */}
          <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-border flex-1 max-w-20" />
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 border-2 border-primary/30 shadow-md backdrop-blur-sm">
              <div className="p-1.5 rounded-full bg-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Filtrar por Categoría</span>
            </div>
            <div className="h-px bg-gradient-to-r from-border via-border to-transparent flex-1 max-w-20" />
          </div>
          
          {/* Contenedor principal del carrusel mejorado */}
          <div className="relative bg-gradient-to-br from-muted/40 via-muted/20 to-muted/40 rounded-3xl p-5 sm:p-6 border-2 border-border/60 shadow-xl backdrop-blur-sm">
            {/* Patrón decorativo de fondo - optimizado: menos blur en desktop */}
            <div className="absolute inset-0 opacity-5 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-2xl lg:blur-xl" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent rounded-full blur-xl lg:blur-lg" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
            </div>
            
            <div className="relative flex items-center justify-center gap-3 sm:gap-4">
              {/* Botón anterior mejorado */}
              <button
                onClick={goToPrevious}
                className="p-3 sm:p-3.5 rounded-full bg-background border-2 border-primary/30 hover:border-primary hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 transition-[border-color,background,box-shadow] duration-300 flex-shrink-0 z-10 shadow-lg hover:shadow-xl group"
                aria-label="Categoría anterior"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              </button>

              {/* Contenedor del carrusel con overflow hidden */}
              <div className="flex-1 max-w-xs overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out will-change-transform"
                  style={{ transform: `translate3d(-${currentCategoryIndex * 100}%, 0, 0)` }}
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

              {/* Botón siguiente mejorado */}
              <button
                onClick={goToNext}
                className="p-3 sm:p-3.5 rounded-full bg-background border-2 border-primary/30 hover:border-primary hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 transition-[border-color,background,box-shadow] duration-300 flex-shrink-0 z-10 shadow-lg hover:shadow-xl group"
                aria-label="Categoría siguiente"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              </button>
            </div>
            
            {/* Indicadores de posición mejorados */}
            <div className="flex justify-center gap-2 mt-5 sm:mt-6">
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(categories[index].name, index)}
                  className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ease-out ${
                    index === currentCategoryIndex
                      ? 'w-10 bg-gradient-to-r from-primary via-accent to-primary shadow-md'
                      : 'w-2.5 bg-border/60 hover:bg-primary/60 hover:w-3'
                  }`}
                  aria-label={`Ir a categoría ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Grid de categorías */}
        <div className="hidden lg:block mb-10 sm:mb-12">
          {/* Header del filtro mejorado */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-border flex-1 max-w-32" />
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 border-2 border-primary/30 shadow-lg backdrop-blur-sm">
              <div className="p-1.5 rounded-full bg-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Filtrar Categorías</span>
            </div>
            <div className="h-px bg-gradient-to-r from-border via-border to-transparent flex-1 max-w-32" />
          </div>
          
          {/* Grid de categorías con contenedor mejorado */}
          <div className="relative bg-gradient-to-br from-muted/30 via-muted/10 to-muted/30 rounded-2xl p-4 border border-border/50 shadow-lg backdrop-blur-sm">
            {/* Patrón decorativo sutil - optimizado: menos blur en desktop */}
            <div className="absolute inset-0 opacity-3 overflow-hidden rounded-2xl pointer-events-none">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary rounded-full blur-2xl lg:blur-xl" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent rounded-full blur-xl lg:blur-lg" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
            </div>
            
            <div className="relative grid lg:grid-cols-7 gap-3">
              {categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  category={category}
                  isActive={selectedCategory === category.name}
                  onClick={() => handleCategoryClick(category.name, index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/productos">
            <Button size="lg" variant="outline" className="gap-2 h-12 sm:h-11 w-full sm:w-auto text-base">
              Ver más productos
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
