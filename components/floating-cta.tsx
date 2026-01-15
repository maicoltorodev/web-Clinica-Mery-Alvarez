"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, X, Phone } from "lucide-react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-card border border-border shadow-2xl rounded-2xl p-4 flex flex-col gap-3 min-w-[280px]">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-sm mb-1">¿Lista para comenzar?</h3>
            <p className="text-xs text-muted-foreground">Agenda tu consulta gratuita</p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-muted rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <Button size="sm" className="w-full gap-2">
            <Calendar className="h-4 w-4" />
            <span>Agendar Cita</span>
          </Button>
          <Button size="sm" variant="outline" className="w-full gap-2">
            <Phone className="h-4 w-4" />
            <span>Llamar Ahora</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
