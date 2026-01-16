"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X } from "lucide-react"
import { useMobileMenu } from "@/lib/mobile-menu-context"

export function WhatsAppFAB() {
  const { isMobileMenuOpen } = useMobileMenu()
  const [showFAB, setShowFAB] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const hasShownRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    
    const handleScroll = () => {
      // Verificar si el componente está montado antes de actualizar estado
      if (!isMountedRef.current) return
      
      const inicioSection = document.getElementById("inicio")
      
      if (inicioSection) {
        const rect = inicioSection.getBoundingClientRect()
        // Mostrar FAB cuando se haya bajado de la sección de inicio
        const isBelowInicio = rect.bottom < window.innerHeight * 0.2
        setShowFAB(isBelowInicio)
        
        // Mostrar mensaje cuando se llegue a productos (solo una vez)
        if (!hasShownRef.current) {
          const productosSection = document.getElementById("productos")
          if (productosSection) {
            const productosRect = productosSection.getBoundingClientRect()
            if (productosRect.top < window.innerHeight && productosRect.bottom > 0) {
              hasShownRef.current = true
              setShowMessage(true)
              // Limpiar timeout anterior si existe
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
              }
              // Ocultar después de 5 segundos
              timeoutRef.current = setTimeout(() => {
                if (isMountedRef.current) {
                  setShowMessage(false)
                }
                timeoutRef.current = null
              }, 5000)
            }
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Verificar en carga inicial
    
    return () => {
      isMountedRef.current = false
      window.removeEventListener("scroll", handleScroll)
      // Limpiar timeout si existe
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [])

  // Ocultar el FAB cuando el menú móvil está abierto o cuando no debe mostrarse
  if (isMobileMenuOpen || !showFAB) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex flex-col items-end gap-3">
      {/* Message Tooltip */}
      {showMessage && (
        <div className="bg-card border border-border shadow-2xl rounded-2xl p-4 min-w-[280px] animate-in slide-in-from-bottom-5 duration-300 relative">
          <button
            onClick={() => setShowMessage(false)}
            className="absolute top-2 right-2 p-1 hover:bg-muted rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="pr-6">
            <p className="text-sm font-medium mb-1">¿Necesitas ayuda?</p>
            <p className="text-xs text-muted-foreground">Escríbenos por WhatsApp y te asesoramos</p>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative w-14 h-14 lg:w-20 lg:h-20">
        {/* Pulse effect - solo para el botón */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-ping opacity-75" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-pulse opacity-50" />
        
        {/* Button */}
        <a
          href="https://wa.me/573163433000"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 lg:w-20 lg:h-20 rounded-full gradient-brand shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-10 block"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-7 w-7 lg:h-10 lg:w-10 text-white relative z-10" />
        </a>
      </div>
    </div>
  )
}
