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
        {/* Professional image container with enhanced border and shadow */}
        <div className="relative z-10 rounded-xl overflow-hidden bg-gradient-to-br from-background to-muted/30 shadow-2xl shadow-primary/15 group-hover:shadow-primary/25 border-2 border-primary/30 group-hover:border-primary/40 transition-all duration-500">
          <img
            src="/mery.png"
            alt="Clínica Mery Álvarez"
            className={`${sizeClass} h-auto object-cover relative transition-transform duration-500 group-hover:scale-[1.02]`}
            style={PROFESSIONAL_IMAGE_FILTER}
          />
          {/* Professional overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  )
}
