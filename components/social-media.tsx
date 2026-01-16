"use client"

import { Facebook, Instagram, Youtube, MessageCircle, ExternalLink, Share2 } from "lucide-react"
import { useInViewportCenter } from "@/lib/hooks"
import { SectionHeader } from "@/components/section-header"
import { DecorativeBorders } from "@/components/decorative/decorative-borders"
import { CornerDecorations } from "@/components/decorative/corner-decorations"

const socialNetworks = [
  {
    name: "Spotify",
    icon: null,
    color: "#1DB954",
    url: "https://open.spotify.com/show/clinicameryalvarez",
    description: "Escucha nuestros podcasts sobre salud y bienestar",
    content: "Podcasts • Entrevistas • Consejos",
    gradient: "from-green-400 to-green-600"
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "#1877F2",
    url: "https://www.facebook.com/clinicameryalvarez",
    description: "Conoce nuestros tratamientos, testimonios y promociones especiales",
    content: "Tips de cuidado • Promociones • Testimonios",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "url(#instagram-gradient)",
    url: "https://www.instagram.com/clinicameryalvarez",
    description: "Sigue nuestro día a día y descubre resultados reales",
    content: "Antes y después • Tips diarios • Historias",
    gradient: "from-purple-500 via-pink-500 to-orange-500"
  },
  {
    name: "YouTube",
    icon: Youtube,
    color: "#FF0000",
    url: "https://www.youtube.com/clinicameryalvarez",
    description: "Aprende sobre nuestros tratamientos con videos educativos",
    content: "Tutoriales • Procedimientos • Expertos",
    gradient: "from-red-500 to-red-600"
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    color: "#25D366",
    url: "https://wa.me/573163433000",
    description: "Consulta directa con nuestro equipo médico",
    content: "Atención inmediata • Consultas • Citas",
    gradient: "from-green-500 to-green-600"
  },
  {
    name: "TikTok",
    icon: null,
    color: "#000000",
    url: "https://www.tiktok.com/@clinicameryalvarez",
    description: "Contenido divertido y educativo sobre medicina estética",
    content: "Tendencias • Tips rápidos • Transformaciones",
    gradient: "from-gray-900 to-black"
  }
]

export function SocialMedia() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader
          badge={{ icon: Share2, text: "Conecta con nosotros" }}
          title={
            <>Síguenos en nuestras <span className="text-gradient-brand">redes sociales</span></>
          }
          description="Mantente al día con nuestros tratamientos, consejos de expertos y promociones exclusivas. Únete a nuestra comunidad y descubre cómo transformar tu bienestar."
        />
        
        {/* Social Networks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {socialNetworks.map((network, index) => {
            const Icon = network.icon
            const { elementRef, isInCenter } = useInViewportCenter(0.35, `social-${network.name.toLowerCase().replace(/\s/g, '-')}`)
            return (
              <div key={network.name} ref={elementRef} className="group relative">
              <a
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <DecorativeBorders isActive={isInCenter} blurIntensity="xl" />
                
                <div className="relative bg-card border border-border/50 hover:border-transparent rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl overflow-hidden z-10 h-full flex flex-col">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${network.gradient} transition-opacity duration-300 ${isInCenter ? 'opacity-5' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-5`} />
                  
                  <CornerDecorations isActive={isInCenter} size="medium" position="inside" />
                  
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6 relative z-10">
                    {Icon ? (
                      <div className="inline-flex p-3 sm:p-4 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors">
                        <Icon 
                          className="h-8 w-8 sm:h-10 sm:w-10" 
                          style={{ color: typeof network.color === 'string' && network.color.startsWith('#') ? network.color : undefined }}
                        />
                      </div>
                    ) : (
                      <div className="inline-flex p-3 sm:p-4 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors">
                        {network.name === "TikTok" ? (
                          <svg className="h-8 w-8 sm:h-10 sm:w-10" fill={network.color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                          </svg>
                        ) : (
                          <svg className="h-8 w-8 sm:h-10 sm:w-10" fill={network.color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {network.name}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                      {network.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {network.content.split(" • ").map((item, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="relative z-10 mt-auto">
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      <span>Seguir ahora</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
              </div>
            )
          })}
        </div>

        {/* SVG Gradient Definition for Instagram */}
        <svg className="hidden">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#833AB4" />
              <stop offset="50%" stopColor="#E1306C" />
              <stop offset="100%" stopColor="#FCAF45" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
