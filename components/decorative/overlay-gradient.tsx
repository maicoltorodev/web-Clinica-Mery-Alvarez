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

/**
 * Componente reutilizable para overlay de gradiente sutil
 */
export function OverlayGradient({ 
  isActive = false, 
  intensity = 'subtle',
  className = ''
}: OverlayGradientProps) {
  const gradientClass = intensityClasses[intensity]
  
  return (
    <div 
      className={`absolute inset-0 bg-gradient-to-br ${gradientClass} transition-opacity duration-300 pointer-events-none z-10 ${isActive ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-100 ${className}`} 
    />
  )
}
