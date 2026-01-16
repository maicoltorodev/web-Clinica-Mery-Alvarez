"use client"

import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

export function SocialMedia() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Síguenos en nuestras <span className="text-gradient-brand">redes sociales</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            Mantente al día con nuestros tratamientos, consejos y promociones especiales
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a 
            href="https://www.facebook.com/clinicameryalvarez" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm text-muted-foreground whitespace-nowrap font-medium">
              Facebook
            </span>
          </a>
          
          <a 
            href="https://www.instagram.com/clinicameryalvarez" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm text-muted-foreground whitespace-nowrap font-medium">
              Instagram
            </span>
          </a>
          
          <a 
            href="https://www.youtube.com/clinicameryalvarez" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="YouTube"
          >
            <Youtube className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm text-muted-foreground whitespace-nowrap font-medium">
              YouTube
            </span>
          </a>
          
          <a 
            href="https://wa.me/573163433000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm text-muted-foreground whitespace-nowrap font-medium">
              WhatsApp
            </span>
          </a>
          
          <a 
            href="https://www.tiktok.com/@clinicameryalvarez" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="TikTok"
          >
            <svg className="h-6 w-6 sm:h-7 sm:w-7 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm text-muted-foreground whitespace-nowrap font-medium">
              TikTok
            </span>
          </a>
          
          <a 
            href="https://open.spotify.com/show/clinicameryalvarez" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Spotify"
          >
            <svg className="h-6 w-6 sm:h-7 sm:w-7 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm text-muted-foreground whitespace-nowrap font-medium">
              Spotify
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
