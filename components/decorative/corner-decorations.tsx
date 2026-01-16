"use client"

interface CornerDecorationsProps {
  isActive?: boolean
  size?: 'small' | 'medium' | 'large'
  position?: 'inside' | 'outside'
  className?: string
}

const sizeClasses = {
  small: 'w-4 h-4',
  medium: 'w-6 h-6',
  large: 'w-8 h-8',
}

/**
 * Componente reutilizable para decoraciones de esquina
 */
export function CornerDecorations({ 
  isActive = false, 
  size = 'medium',
  position = 'inside',
  className = ''
}: CornerDecorationsProps) {
  const sizeClass = sizeClasses[size]
  const positionClass = position === 'outside' ? '-top-2 -left-2' : 'top-2 left-2'
  const bottomPositionClass = position === 'outside' ? '-bottom-2 -right-2' : 'bottom-2 right-2'
  const roundedClass = position === 'outside' ? 'rounded-tl-lg' : 'rounded-tl-lg'
  const bottomRoundedClass = position === 'outside' ? 'rounded-br-lg' : 'rounded-br-lg'
  
  return (
    <>
      {/* Top-left corner */}
      <div 
        className={`absolute ${positionClass} ${sizeClass} border-t-2 border-l-2 border-accent ${roundedClass} transition-opacity duration-300 pointer-events-none z-20 ${isActive ? 'opacity-60' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-60 ${className}`} 
      />
      {/* Bottom-right corner */}
      <div 
        className={`absolute ${bottomPositionClass} ${sizeClass} border-b-2 border-r-2 border-accent ${bottomRoundedClass} transition-opacity duration-300 pointer-events-none z-20 ${isActive ? 'opacity-60' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-60 ${className}`} 
      />
    </>
  )
}
