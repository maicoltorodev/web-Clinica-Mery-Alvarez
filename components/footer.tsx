"use client"

import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

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
                <a href="#inicio" className="text-background/70 hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-background/70 hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="text-background/70 hover:text-primary transition-colors">
                  Tratamientos
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-background/70 hover:text-primary transition-colors">
                  Equipo Médico
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-background/70 hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Tratamientos</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#tratamientos" className="text-background/70 hover:text-primary transition-colors">
                  Faciales
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="text-background/70 hover:text-primary transition-colors">
                  Corporales
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="text-background/70 hover:text-primary transition-colors">
                  Zona Íntima
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="text-background/70 hover:text-primary transition-colors">
                  Tecnología
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
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground w-full md:w-auto h-12 sm:h-11 text-base">
              Agendar Cita Ahora
            </Button>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-background/20 mt-8 sm:mt-12 pt-8 sm:pt-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Síguenos en nuestras redes sociales</h3>
            <p className="text-sm sm:text-base text-background/70">Mantente al día con nuestros tratamientos, consejos y promociones especiales</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a 
              href="https://www.facebook.com/clinicameryalvarez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 sm:p-4 rounded-xl bg-background/10 hover:bg-background/20 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-background/70 whitespace-nowrap">
                Facebook
              </span>
            </a>
            <a 
              href="https://www.instagram.com/clinicameryalvarez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 sm:p-4 rounded-xl bg-background/10 hover:bg-background/20 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-background/70 whitespace-nowrap">
                Instagram
              </span>
            </a>
            <a 
              href="https://www.youtube.com/clinicameryalvarez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 sm:p-4 rounded-xl bg-background/10 hover:bg-background/20 transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-background/70 whitespace-nowrap">
                YouTube
              </span>
            </a>
            <a 
              href="https://wa.me/573163433000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 sm:p-4 rounded-xl bg-background/10 hover:bg-background/20 transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-background/70 whitespace-nowrap">
                WhatsApp
              </span>
            </a>
            <a 
              href="https://www.tiktok.com/@clinicameryalvarez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 sm:p-4 rounded-xl bg-background/10 hover:bg-background/20 transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-background/70 whitespace-nowrap">
                TikTok
              </span>
            </a>
            <a 
              href="https://open.spotify.com/show/clinicameryalvarez" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative p-3 sm:p-4 rounded-xl bg-background/10 hover:bg-background/20 transition-all duration-300 hover:scale-110"
              aria-label="Spotify"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-background/70 whitespace-nowrap">
                Spotify
              </span>
            </a>
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
