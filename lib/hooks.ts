"use client"

import React, { useEffect, useRef, useState, createContext, useContext, useCallback, useMemo } from "react"

// Contexto para gestionar qué elemento está activo
interface ViewportCenterContextType {
  registerElement: (id: string, element: HTMLElement) => void
  unregisterElement: (id: string) => void
  activeElementId: string | null
  subscribe: (listener: () => void) => () => void
}

const ViewportCenterContext = createContext<ViewportCenterContextType | null>(null)

// Provider del contexto
export function ViewportCenterProvider({ children }: { children: React.ReactNode }) {
  const [activeElementId, setActiveElementId] = useState<string | null>(null)
  const elementsRef = useRef<Map<string, HTMLElement>>(new Map())
  const listenersRef = useRef<Set<() => void>>(new Set())
  const isMountedRef = useRef(true)
  const animationFrameRef = useRef<number | null>(null)

  const registerElement = useCallback((id: string, element: HTMLElement) => {
    if (!isMountedRef.current) return
    elementsRef.current.set(id, element)
    // Notificar a todos los listeners que hay un cambio
    listenersRef.current.forEach(listener => listener())
  }, [])

  const unregisterElement = useCallback((id: string) => {
    if (!isMountedRef.current) return
    elementsRef.current.delete(id)
    // Notificar a todos los listeners que hay un cambio
    listenersRef.current.forEach(listener => listener())
  }, [])

  const subscribe = useCallback((listener: () => void) => {
    if (!isMountedRef.current) return () => {}
    listenersRef.current.add(listener)
    return () => {
      if (isMountedRef.current) {
        listenersRef.current.delete(listener)
      }
    }
  }, [])

  useEffect(() => {
    isMountedRef.current = true
    // Verificar si estamos en desktop (lg breakpoint = 1024px)
    const isDesktop = () => window.innerWidth >= 1024

    const checkPositions = () => {
      if (!isMountedRef.current) return
      
      const viewportHeight = window.innerHeight
      const viewportCenter = viewportHeight / 2
      
      let closestId: string | null = null
      let closestDistance = Infinity

      // Calcular distancia de cada elemento al centro (optimizado)
      const elements = elementsRef.current
      for (const [id, element] of elements) {
        // Usar getBoundingClientRect una vez por elemento
        const rect = element.getBoundingClientRect()
        // Early exit si el elemento no es visible
        if (rect.bottom < 0 || rect.top > viewportHeight) {
          continue
        }
        
        const elementCenter = rect.top + rect.height / 2
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
        
        // Solo considerar elementos dentro de un threshold razonable
        if (distanceFromCenter < viewportHeight * 0.5 && distanceFromCenter < closestDistance) {
          closestDistance = distanceFromCenter
          closestId = id
        }
      }

      if (isMountedRef.current) {
        setActiveElementId(prev => {
          if (prev !== closestId) {
            // Notificar a todos los listeners cuando cambia el elemento activo
            listenersRef.current.forEach(listener => listener())
            return closestId
          }
          return prev
        })
      }
    }

    // Throttle optimizado: más agresivo en desktop para mejor rendimiento
    let ticking = false
    let lastTime = 0
    const isMobile = () => window.innerWidth < 1024
    // Desktop: throttle más agresivo (200ms) para mejor fluidez
    const throttleDelay = isMobile() ? 150 : 200
    
      const handleScroll = () => {
        if (!isMountedRef.current) return
        
        const now = Date.now()
        if (!ticking && (now - lastTime) >= throttleDelay) {
          if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current)
            animationFrameRef.current = null
          }
          animationFrameRef.current = window.requestAnimationFrame(() => {
            if (isMountedRef.current) {
              checkPositions()
            }
            ticking = false
            lastTime = now
            animationFrameRef.current = null
          })
          ticking = true
        }
      }

    // Activar eventos tanto en mobile como desktop
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    checkPositions() // Verificar inicialmente

    return () => {
      isMountedRef.current = false
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      // Cancelar animation frame si existe
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
      // Limpiar Maps y Sets
      elementsRef.current.clear()
      listenersRef.current.clear()
    }
  }, [])

  // Memoizar el valor del contexto para evitar re-renders innecesarios
  const contextValue = useMemo(
    () => ({
      registerElement,
      unregisterElement,
      activeElementId,
      subscribe,
    }),
    [activeElementId, registerElement, unregisterElement, subscribe]
  )

  return React.createElement(
    ViewportCenterContext.Provider,
    {
      value: contextValue,
    },
    children
  )
}

/**
 * Hook que detecta cuando un elemento está en el centro del viewport
 * Solo un elemento puede estar activo a la vez (el más cercano al centro)
 */
export function useInViewportCenter(threshold: number = 0.4, elementId?: string) {
  const [isInCenter, setIsInCenter] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const elementIdRef = useRef<string>(elementId || `element-${Math.random().toString(36).substr(2, 9)}`)
  const context = useContext(ViewportCenterContext)
  const isMountedHookRef = useRef(true)

  useEffect(() => {
    isMountedHookRef.current = true
    const element = elementRef.current
    if (!element) return

    // Registrar el elemento en el contexto si existe
    if (context) {
      context.registerElement(elementIdRef.current, element)

      // Verificar si este elemento es el activo
      const checkIfActive = () => {
        if (isMountedHookRef.current) {
          setIsInCenter(context.activeElementId === elementIdRef.current)
        }
      }

      // Suscribirse a cambios en el elemento activo
      checkIfActive() // Verificar inicialmente
      const unsubscribe = context.subscribe(checkIfActive)

      return () => {
        isMountedHookRef.current = false
        unsubscribe()
        context.unregisterElement(elementIdRef.current)
      }
    } else {
      // Fallback al comportamiento original si no hay contexto
      const isMountedFallbackRef = useRef(true)
      const animationFrameFallbackRef = useRef<number | null>(null)

      // Throttle optimizado: más agresivo en desktop para mejor rendimiento
      let ticking = false
      let lastTime = 0
      const isMobile = () => window.innerWidth < 1024
      // Desktop: throttle más agresivo (200ms) para mejor fluidez
      const throttleDelay = isMobile() ? 150 : 200
      
      const checkPosition = () => {
        if (!isMountedFallbackRef.current) return
        
        const now = Date.now()
        if (!ticking && (now - lastTime) >= throttleDelay) {
          if (animationFrameFallbackRef.current !== null) {
            cancelAnimationFrame(animationFrameFallbackRef.current)
            animationFrameFallbackRef.current = null
          }
          animationFrameFallbackRef.current = window.requestAnimationFrame(() => {
            if (!isMountedFallbackRef.current) return
            
            const rect = element.getBoundingClientRect()
            const viewportHeight = window.innerHeight
            const viewportCenter = viewportHeight / 2
            
            const elementCenter = rect.top + rect.height / 2
            const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
            const isNearCenter = distanceFromCenter < (viewportHeight * threshold)
            const isVisible = rect.top < viewportHeight && rect.bottom > 0
            
            if (isMountedFallbackRef.current) {
              setIsInCenter(isNearCenter && isVisible)
            }
            ticking = false
            lastTime = now
            animationFrameFallbackRef.current = null
          })
          ticking = true
        }
      }

      // Activar eventos tanto en mobile como desktop
      window.addEventListener("scroll", checkPosition, { passive: true })
      window.addEventListener("resize", checkPosition, { passive: true })
      checkPosition()

      return () => {
        isMountedFallbackRef.current = false
        window.removeEventListener("scroll", checkPosition)
        window.removeEventListener("resize", checkPosition)
        if (animationFrameFallbackRef.current !== null) {
          cancelAnimationFrame(animationFrameFallbackRef.current)
          animationFrameFallbackRef.current = null
        }
      }
    }
  }, [threshold, context])

  return { elementRef, isInCenter }
}

/**
 * Hook para manejar navegación de carruseles/carrousels
 * @param totalItems - Número total de items en el carrusel
 * @param initialIndex - Índice inicial (default: 0)
 */
export function useCarousel(totalItems: number, initialIndex: number = 0) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1))
  }, [totalItems])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1))
  }, [totalItems])

  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index)
    }
  }, [totalItems])

  return {
    currentIndex,
    goToPrevious,
    goToNext,
    goToIndex,
    setCurrentIndex,
  }
}
