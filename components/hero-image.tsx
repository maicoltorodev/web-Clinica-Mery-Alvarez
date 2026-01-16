"use client"

import { PROFESSIONAL_IMAGE_FILTER, MERY_IMAGE_SIZES } from "@/lib/constants"

interface HeroImageProps {
  variant?: 'mobile' | 'desktop'
  className?: string
}

/**
 * Componente reutilizable para la imagen de Mery en el hero
 */
export function HeroImage({ variant = 'mobile', className = '' }: HeroImageProps) {
  const sizeClass = variant === 'mobile' ? MERY_IMAGE_SIZES.mobile : MERY_IMAGE_SIZES.desktop
  const displayClass = variant === 'mobile' ? 'lg:hidden' : 'hidden lg:flex'
  
  return (
    <div className={`${displayClass} ${variant === 'desktop' ? 'justify-start flex-shrink-0 w-full lg:w-auto order-1' : 'justify-center'} ${className}`}>
      <div className="relative group inline-block">
        {/* Professional frame with multiple border layers */}
        <div className={`relative z-10 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/40 to-primary/40 shadow-2xl shadow-primary/20 group-hover:shadow-primary/30 transition-all duration-500 group-hover:scale-[1.01] ${
          variant === 'desktop' ? 'p-[8px]' : 'p-[3px]'
        }`}>
          {/* Inner border with gradient - más prominente en desktop */}
          <div className={`absolute rounded-xl border pointer-events-none z-20 ${
            variant === 'desktop' 
              ? 'inset-[8px] border-[4px] border-primary/40' 
              : 'inset-[3px] border-2 border-primary/20'
          }`} />
          
          {/* Borde adicional decorativo en desktop */}
          {variant === 'desktop' && (
            <div className="absolute inset-[12px] rounded-lg border-2 border-accent/30 pointer-events-none z-20" />
          )}
          
          {/* Main image container */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted/30">
            <img
              src="/mery.png"
              alt="Clínica Mery Álvarez"
              className={`${sizeClass} h-auto object-cover relative transition-transform duration-500 group-hover:scale-[1.02]`}
              style={PROFESSIONAL_IMAGE_FILTER}
            />
            {/* Professional overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Decorative corner accents */}
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary/60 rounded-tl-2xl pointer-events-none z-30 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-accent/60 rounded-br-2xl pointer-events-none z-30 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  )
}
