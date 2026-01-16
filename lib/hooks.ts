"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Hook que detecta cuando un elemento está en el centro del viewport
 * Útil para activar efectos hover en mobile cuando el elemento está visible en el centro
 */
export function useInViewportCenter(threshold: number = 0.4) {
  const [isInCenter, setIsInCenter] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const checkPosition = () => {
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportCenter = viewportHeight / 2
      
      // Calcular el centro del elemento
      const elementCenter = rect.top + rect.height / 2
      
      // Verificar si el centro del elemento está cerca del centro del viewport
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
      const isNearCenter = distanceFromCenter < (viewportHeight * threshold)
      
      // También verificar que el elemento esté visible
      const isVisible = rect.top < viewportHeight && rect.bottom > 0
      
      setIsInCenter(isNearCenter && isVisible)
    }

    // Verificar en scroll y resize
    window.addEventListener("scroll", checkPosition, { passive: true })
    window.addEventListener("resize", checkPosition, { passive: true })
    checkPosition() // Verificar inicialmente

    return () => {
      window.removeEventListener("scroll", checkPosition)
      window.removeEventListener("resize", checkPosition)
    }
  }, [threshold])

  return { elementRef, isInCenter }
}
