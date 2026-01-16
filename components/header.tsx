"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, ShoppingBag, Users, Sparkles, UserCheck, MessageSquare, Phone } from "lucide-react"
import { useMobileMenu } from "@/lib/mobile-menu-context"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Guardar el scroll actual
      const scrollY = window.scrollY
      // Bloquear el scroll del body
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      // Restaurar el scroll del body
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }
    return () => {
      // Cleanup al desmontar
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: "Nosotros", href: "#nosotros", icon: Users },
    { label: "Tratamientos", href: "#tratamientos", icon: Sparkles },
    { label: "Productos", href: "#productos", icon: ShoppingBag },
    { label: "Equipo", href: "#equipo", icon: UserCheck },
    { label: "Testimonios", href: "#testimonios", icon: MessageSquare },
    { label: "Contacto", href: "#contacto", icon: Phone },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/95 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <a href="#inicio" className="flex items-center flex-shrink-0">
            <img
              src="/flower.gif"
              alt="Clínica Mery Álvarez"
              className="h-10 sm:h-12 w-auto lg:h-16 object-contain"
            />
          </a>

          {/* Mobile CTA Button - Centered */}
          <div className="flex-1 flex justify-center lg:hidden px-4">
            <Button 
              size="sm" 
              className="gap-2 h-9 text-xs sm:text-sm px-2 sm:px-4"
              onClick={() => {
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Agendar Cita</span>
            </Button>
          </div>

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
            <Button size="sm" className="gap-2" onClick={() => {
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
            }}>
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

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="lg:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out animate-in slide-in-from-right">
              {/* Header del menú */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
                <img
                  src="/titulo.png"
                  alt="Clínica Mery Álvarez"
                  className="h-8 sm:h-10 w-auto object-contain"
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
              <nav className="flex flex-col p-4 sm:p-6 overflow-y-auto">
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-200 mb-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
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

              {/* Footer del menú */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-border bg-muted/30">
                <Button 
                  className="w-full gap-2 h-12 text-base font-semibold"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Agendar Cita</span>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
