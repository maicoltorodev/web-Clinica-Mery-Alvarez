"use client"

import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

interface SectionHeaderProps {
  badge: {
    icon: LucideIcon
    text: string
  }
  title: ReactNode | string
  description?: string
  className?: string
}

/**
 * Componente reutilizable para headers de sección con badge, título y descripción
 */
export function SectionHeader({ badge, title, description, className = '' }: SectionHeaderProps) {
  const Icon = badge.icon
  
  return (
    <div className={`text-center mb-12 sm:mb-16 max-w-3xl mx-auto ${className}`}>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border-2 border-primary/40 shadow-lg shadow-primary/10 backdrop-blur-sm mb-4 sm:mb-6">
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
        <span className="text-xs sm:text-sm font-semibold text-primary">{badge.text}</span>
      </div>
      
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance">
        {title}
      </h2>
      
      {/* Description */}
      {description && (
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-balance px-2">
          {description}
        </p>
      )}
    </div>
  )
}
