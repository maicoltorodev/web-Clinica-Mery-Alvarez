"use client"

interface OverlayGradientProps {
  isActive?: boolean
  intensity?: 'subtle' | 'medium' | 'strong'
  className?: string
}

const intensityClasses = {
  subtle: 'from-primary/5 via-transparent to-accent/5',
  medium: 'from-primary/8 via-transparent to-accent/8',
  strong: 'from-primary/10 via-transparent to-accent/10',
}

// Intensidades reducidas para móvil
const intensityClassesMobile = {
  subtle: 'from-primary/3 via-transparent to-accent/3 lg:from-primary/5 lg:via-transparent lg:to-accent/5',
  medium: 'from-primary/5 via-transparent to-accent/5 lg:from-primary/8 lg:via-transparent lg:to-accent/8',
  strong: 'from-primary/6 via-transparent to-accent/6 lg:from-primary/10 lg:via-transparent lg:to-accent/10',
}

/**
 * Componente reutilizable para overlay de gradiente sutil
 */
export function OverlayGradient({ 
  isActive = false, 
  intensity = 'subtle',
  className = ''
}: OverlayGradientProps) {
  const gradientClass = intensityClassesMobile[intensity] // Usar versión optimizada para móvil
  
  return (
    <div 
      className={`absolute inset-0 bg-gradient-to-br ${gradientClass} transition-opacity duration-300 pointer-events-none z-10 ${isActive ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-100 ${className}`}
      style={isActive || undefined ? { willChange: 'opacity', transform: 'translateZ(0)' } : undefined}
    />
  )
}
