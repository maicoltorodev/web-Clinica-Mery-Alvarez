"use client"

interface DecorativeBordersProps {
  isActive?: boolean
  className?: string
  blurIntensity?: 'xl' | '2xl' | 'lg'
  roundedSize?: 'xl' | '2xl' | '3xl'
}

const blurClasses = {
  lg: 'blur-lg',
  xl: 'blur-xl',
  '2xl': 'blur-2xl',
}

const roundedClasses = {
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
}

/**
 * Componente reutilizable para bordes decorativos con gradiente
 */
export function DecorativeBorders({ 
  isActive = false, 
  className = '',
  blurIntensity = 'xl',
  roundedSize = '2xl'
}: DecorativeBordersProps) {
  const blurClass = blurClasses[blurIntensity]
  const roundedClass = roundedClasses[roundedSize]
  
  return (
    <>
      {/* Outer border with blur */}
      <div 
        className={`absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 ${roundedClass} ${blurClass} transition-opacity duration-300 pointer-events-none z-0 ${isActive ? 'opacity-60' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-60 ${className}`} 
      />
      {/* Inner border */}
      <div 
        className={`absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl transition-opacity duration-300 pointer-events-none z-0 ${isActive ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-100 ${className}`} 
      />
    </>
  )
}
