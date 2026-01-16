"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { useMobileMenu } from "@/lib/mobile-menu-context"

export function WhatsAppFAB() {
  const { isMobileMenuOpen } = useMobileMenu()
  const [showMessage, setShowMessage] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const productosSection = document.getElementById("productos")
      if (productosSection && !hasShown) {
        const rect = productosSection.getBoundingClientRect()
        // Mostrar cuando la sección de productos esté visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setShowMessage(true)
          setHasShown(true)
          // Ocultar después de 5 segundos
          setTimeout(() => {
            setShowMessage(false)
          }, 5000)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Verificar en carga inicial
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasShown])

  // Ocultar el FAB cuando el menú móvil está abierto
  if (isMobileMenuOpen) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
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
      <div className="relative w-14 h-14">
        {/* Pulse effect - solo para el botón */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-ping opacity-75" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-pulse opacity-50" />
        
        {/* Button */}
        <a
          href="https://wa.me/573163433000"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full gradient-brand shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-10 block"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-7 w-7 text-white relative z-10" />
        </a>
      </div>
    </div>
  )
}
