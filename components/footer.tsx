"use client"

import { Phone, Mail, MapPin, Clock, Home, Users, Sparkles, UserCheck, MessageSquare, Calendar, ArrowRight, Smile, Users2, Flower, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Clínica Mery Álvarez"
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm sm:text-base text-background/70 mb-4 sm:mb-6 leading-relaxed">
              Somos una IPS que busca transformar tu vida desde el interior, brindando experiencias de salud y bienestar 
              a través de tratamientos personalizados realizados por profesionales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#inicio" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                  <Home className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a href="#nosotros" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                  <Users className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Nosotros</span>
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                  <Sparkles className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Tratamientos</span>
                </a>
              </li>
              <li>
                <a href="#equipo" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                  <UserCheck className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Equipo Médico</span>
                </a>
              </li>
              <li>
                <a href="#testimonios" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                  <MessageSquare className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Testimonios</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Tratamientos</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#tratamientos" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                  <Smile className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Faciales</span>
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                  <Users2 className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Corporales</span>
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                  <Flower className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Zona Íntima</span>
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors group">
                  <Zap className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <span>Tecnología</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contacto</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-background/70 leading-relaxed">
                  Calle 50 # 50-50
                  <br />
                  Medellín, Colombia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+573163433000" className="text-sm sm:text-base text-background/70 hover:text-primary transition-colors">
                    +57 316 343 3000
                  </a>
                  <span className="text-background/60 text-xs sm:text-sm">PBX: 604 322 9596</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:contacto@clinicameryalvarez.com" className="text-sm sm:text-base text-background/70 hover:text-primary transition-colors">
                  contacto@clinicameryalvarez.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm sm:text-base text-background/70 leading-relaxed">
                  <div className="mb-2">
                    <strong>Poblado:</strong><br />
                    Lun - Vie: 7:30 AM - 6:00 PM<br />
                    Sáb: 7:30 AM - 3:00 PM
                  </div>
                  <div>
                    <strong>Centro - Laureles - Rionegro:</strong><br />
                    Lun - Vie: 8:00 AM - 5:30 PM<br />
                    Sáb: 8:00 AM - 1:30 PM
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-background/20 pt-8 sm:pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Te ayudamos a rejuvenecer naturalmente</h3>
              <p className="text-sm sm:text-base text-background/70">Agenda tu cita de valoración en cualquiera de nuestras sedes. ¡Recuerda que TÚ eres tu mejor inversión!</p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground w-full md:w-auto h-12 sm:h-11 text-base gap-2 group" onClick={() => scrollToSection("contacto")}>
              <Calendar className="h-5 w-5" />
              <span>Agendar Cita Ahora</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-background/60 text-xs sm:text-sm">
          <p>© 1999-{new Date().getFullYear()} Clínica Mery Álvarez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
