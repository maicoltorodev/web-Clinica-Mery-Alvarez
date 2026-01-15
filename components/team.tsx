"use client"

import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Dr. Carlos Mendoza",
    role: "Especialista en Tratamientos Faciales",
    specialization: "Dermatología Estética",
    credentials: "Médico Especialista",
    experience: "12+ años",
    image: "/personal/personal-carlos.png",
  },
  {
    name: "Dra. Mery Álvarez",
    role: "Directora Médica",
    specialization: "Medicina Estética",
    credentials: "Médica Especialista",
    experience: "27+ años",
    image: "/personal/personal-mery.png",
  },
  {
    name: "Dra. Ana Rodríguez",
    role: "Especialista en Medicina Corporal",
    specialization: "Medicina Estética Corporal",
    credentials: "Médica Especialista",
    experience: "10+ años",
    image: "/personal/personal-ana.png",
  },
]

export function Team() {
  return (
    <section id="equipo" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Nuestro <span className="text-gradient-gold">Equipo Médico</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Profesionales altamente capacitados comprometidos con tu bienestar y belleza
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              {/* Decorative border elements - same as hero */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-0" />
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
              
              <Card className="border-border/50 hover:border-transparent transition-all duration-300 overflow-hidden relative z-10">
                {/* Image container with border design */}
                <div className="relative aspect-[3/4] overflow-visible bg-transparent p-2 group-hover:p-4 transition-all duration-300">
                  {/* Main image container - same style as hero */}
                  <div className="relative bg-gradient-to-br from-background to-muted/50 p-3 group-hover:p-4 rounded-xl shadow-2xl border border-border/50 group-hover:border-accent/50 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden rounded-lg h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover relative z-10"
                      />
                      {/* Subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                      
                      {/* Logo badge */}
                      <div className="absolute top-3 right-3 z-20 bg-background/95 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-border/50">
                        <img
                          src="/logo.png"
                          alt="Clínica Mery Álvarez"
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Corner accent decorations - same as hero */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20" />
                  </div>
                </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">{member.specialization}</p>
                  <p className="text-xs text-muted-foreground">{member.credentials}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{member.experience}</span>
                </div>
              </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
