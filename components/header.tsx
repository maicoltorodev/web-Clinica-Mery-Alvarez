"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, ShoppingBag, Users, Sparkles, UserCheck, MessageSquare, Phone } from "lucide-react"
import { useMobileMenu } from "@/lib/mobile-menu-context"
import { scrollToSection } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu()
  const animationFrameRef = useRef<number | null>(null)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking && isMountedRef.current) {
        // Cancelar frame anterior si existe
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        
        animationFrameRef.current = window.requestAnimationFrame(() => {
          if (isMountedRef.current) {
            setIsScrolled(window.scrollY > 20)
          }
          ticking = false
          animationFrameRef.current = null
        })
        ticking = true
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      isMountedRef.current = false
      window.removeEventListener("scroll", handleScroll)
      // Cancelar animation frame si existe
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Guardar el scroll actual antes de bloquear
      const scrollY = window.scrollY
      // Bloquear el scroll del body
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        // Restaurar el scroll del body al cerrar o desmontar
        const savedScrollY = scrollY // Usar la variable guardada en lugar de leer del DOM
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        // Restaurar la posición de scroll
        window.scrollTo(0, savedScrollY)
      }
    } else {
      // Asegurar que el body no esté bloqueado cuando el menú está cerrado
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])
  
  const handleScrollToContact = useCallback(() => {
    scrollToSection("contacto")
  }, [])

  const navItems = [
    { label: "Nosotros", href: "#nosotros", icon: Users },
    { label: "Tratamientos", href: "#tratamientos", icon: Sparkles },
    { label: "Productos", href: "#productos", icon: ShoppingBag },
    { label: "Equipo", href: "#equipo", icon: UserCheck },
    { label: "Testimonios", href: "#testimonios", icon: MessageSquare },
    { label: "Contacto", href: "#contacto", icon: Phone },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-colors duration-300 ${
          isMobileMenuOpen 
            ? "bg-white/95 lg:backdrop-blur-md shadow-sm border-b border-border z-50"
            : isScrolled
            ? "bg-white/95 lg:backdrop-blur-md shadow-sm border-b border-border z-50"
            : "bg-white/95 lg:backdrop-blur-md border-b border-border/50 z-50"
        }`}
      >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <a href="#inicio" className="flex items-center flex-shrink-0 group">
        <Image
          src="/flower.gif"
          alt="Clínica Mery Álvarez"
          width={64}
          height={64}
          className="h-10 sm:h-12 w-auto lg:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
          priority
          quality={85}
          unoptimized
        />
          </a>

          {/* Mobile CTA Button - Centered */}
          {!isMobileMenuOpen && (
            <div className="flex-1 flex justify-center lg:hidden px-4">
              <Button 
                size="sm" 
                className="gap-2 h-9 text-xs sm:text-sm px-2 sm:px-4"
                onClick={handleScrollToContact}
              >
                <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Agendar Cita</span>
              </Button>
            </div>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors relative group"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button size="sm" className="gap-2" onClick={handleScrollToContact}>
              <Calendar className="h-4 w-4" />
              <span>Agendar Cita</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Fuera del header para evitar conflictos de z-index */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-[55] transform transition-transform duration-300 ease-out">
              {/* Header del menú */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
                <Image
                  src="/titulo.png"
                  alt="Clínica Mery Álvarez"
                  width={200}
                  height={60}
                  className="h-8 sm:h-10 w-auto object-contain"
                  loading="lazy"
                  quality={90}
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6 text-foreground" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col p-4 sm:p-6 pb-6 overflow-y-auto">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-200 mb-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                        {item.label}
                      </span>
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors opacity-0 group-hover:opacity-100" />
                    </a>
                  )
                })}
              </nav>
            </div>
          </>
        )}
    </>
  )
}
