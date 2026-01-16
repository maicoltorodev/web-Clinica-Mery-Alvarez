"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Tratamientos", href: "#tratamientos" },
    { label: "Equipo", href: "#equipo" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <a href="#inicio" className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Clínica Mery Álvarez"
              className="h-10 sm:h-12 w-auto lg:h-16 object-contain"
            />
          </a>

          {/* Mobile CTA Button - Centered */}
          <div className="flex-1 flex justify-center lg:hidden px-4">
            <Button 
              size="sm" 
              className="gap-2 h-9 text-xs sm:text-sm px-3 sm:px-4"
              onClick={() => {
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Agendar Cita</span>
              <span className="xs:hidden">Cita</span>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-border mt-4 pt-6 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-semibold text-foreground hover:text-primary transition-colors py-2 px-1 rounded-md hover:bg-muted/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border mt-2">
                <Button className="w-full gap-2 h-11 text-base">
                  <Calendar className="h-5 w-5" />
                  <span>Agendar Cita</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
