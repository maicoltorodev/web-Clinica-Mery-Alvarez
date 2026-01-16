"use client"

import React, { useEffect, useRef, useState, createContext, useContext, useCallback } from "react"

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

  const registerElement = useCallback((id: string, element: HTMLElement) => {
    elementsRef.current.set(id, element)
    // Notificar a todos los listeners que hay un cambio
    listenersRef.current.forEach(listener => listener())
  }, [])

  const unregisterElement = useCallback((id: string) => {
    elementsRef.current.delete(id)
    // Notificar a todos los listeners que hay un cambio
    listenersRef.current.forEach(listener => listener())
  }, [])

  const subscribe = useCallback((listener: () => void) => {
    listenersRef.current.add(listener)
    return () => {
      listenersRef.current.delete(listener)
    }
  }, [])

  useEffect(() => {
    const checkPositions = () => {
      const viewportHeight = window.innerHeight
      const viewportCenter = viewportHeight / 2
      
      let closestId: string | null = null
      let closestDistance = Infinity

      // Calcular distancia de cada elemento al centro
      elementsRef.current.forEach((element, id) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < viewportHeight && rect.bottom > 0
        
        if (isVisible) {
          const elementCenter = rect.top + rect.height / 2
          const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
          
          // Solo considerar elementos dentro de un threshold razonable
          if (distanceFromCenter < viewportHeight * 0.5 && distanceFromCenter < closestDistance) {
            closestDistance = distanceFromCenter
            closestId = id
          }
        }
      })

      setActiveElementId(prev => {
        if (prev !== closestId) {
          // Notificar a todos los listeners cuando cambia el elemento activo
          listenersRef.current.forEach(listener => listener())
          return closestId
        }
        return prev
      })
    }

    // Throttle para mejor performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkPositions()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    checkPositions() // Verificar inicialmente

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return React.createElement(
    ViewportCenterContext.Provider,
    {
      value: {
        registerElement,
        unregisterElement,
        activeElementId,
        subscribe,
      },
    },
    children
  )
}

/**
 * Hook que detecta cuando un elemento está en el centro del viewport
 * Solo un elemento puede estar activo a la vez (el más cercano al centro)
 */
export function useInViewportCenter(threshold: number = 0.4) {
  const [isInCenter, setIsInCenter] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const elementIdRef = useRef<string>(`element-${Math.random().toString(36).substr(2, 9)}`)
  const context = useContext(ViewportCenterContext)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Registrar el elemento en el contexto si existe
    if (context) {
      context.registerElement(elementIdRef.current, element)

      // Verificar si este elemento es el activo
      const checkIfActive = () => {
        setIsInCenter(context.activeElementId === elementIdRef.current)
      }

      // Suscribirse a cambios en el elemento activo
      checkIfActive() // Verificar inicialmente
      const unsubscribe = context.subscribe(checkIfActive)

      return () => {
        unsubscribe()
        context.unregisterElement(elementIdRef.current)
      }
    } else {
      // Fallback al comportamiento original si no hay contexto
      const checkPosition = () => {
        const rect = element.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const viewportCenter = viewportHeight / 2
        
        const elementCenter = rect.top + rect.height / 2
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
        const isNearCenter = distanceFromCenter < (viewportHeight * threshold)
        const isVisible = rect.top < viewportHeight && rect.bottom > 0
        
        setIsInCenter(isNearCenter && isVisible)
      }

      window.addEventListener("scroll", checkPosition, { passive: true })
      window.addEventListener("resize", checkPosition, { passive: true })
      checkPosition()

      return () => {
        window.removeEventListener("scroll", checkPosition)
        window.removeEventListener("resize", checkPosition)
      }
    }
  }, [threshold, context])

  return { elementRef, isInCenter }
}
