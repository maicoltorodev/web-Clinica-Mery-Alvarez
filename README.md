# Clínica Mery Álvarez - Sitio Web Premium

Sitio web moderno y profesional para Clínica Mery Álvarez, diseñado con un enfoque en prestigio, profesionalismo, modernidad y exclusividad.

## 🎨 Características

- **Diseño Premium**: Paleta de colores elegante con acentos dorados y grises sofisticados
- **Totalmente Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Performance Optimizado**: Carga rápida y experiencia fluida
- **SEO Friendly**: Metadata optimizada para motores de búsqueda
- **Componentes Modulares**: Arquitectura escalable y mantenible

## 🚀 Tecnologías

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos utility-first
- **Lucide React** - Iconos modernos
- **Geist Font** - Tipografía elegante

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx      # Layout principal con metadata
│   ├── page.tsx         # Página de inicio
│   └── globals.css      # Estilos globales y tema premium
├── components/
│   ├── header.tsx       # Navegación principal sticky
│   ├── hero.tsx         # Sección hero impactante
│   ├── about.tsx        # Sección sobre la clínica
│   ├── services.tsx     # Tratamientos y servicios
│   ├── team.tsx         # Equipo médico
│   ├── testimonials.tsx # Testimonios de pacientes
│   ├── footer.tsx       # Footer con información de contacto
│   ├── floating-cta.tsx # CTA flotante para conversión
│   └── ui/              # Componentes UI reutilizables
└── public/              # Assets estáticos
```

## 🎯 Secciones del Sitio

1. **Hero Section** - Presentación impactante con CTAs destacados
2. **Sobre Nosotros** - Historia, valores y credenciales
3. **Tratamientos** - Servicios ofrecidos con descripciones detalladas
4. **Equipo Médico** - Perfiles profesionales del equipo
5. **Testimonios** - Reseñas y experiencias de pacientes
6. **Contacto** - Información de contacto y formularios

## 🎨 Personalización

### Colores

Los colores principales están definidos en `app/globals.css`:
- **Primary**: Dorado/Cobre elegante (`oklch(65% 0.12 75)`)
- **Background**: Blanco perla (`oklch(99% 0 0)`)
- **Foreground**: Gris oscuro elegante (`oklch(15% 0 0)`)

### Componentes

Todos los componentes están en `components/` y pueden ser fácilmente modificados o extendidos.

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🚀 Despliegue

### Vercel (Recomendado)

El despliegue más fácil es usando [Vercel](https://vercel.com):

1. Conecta tu repositorio GitHub
2. Vercel detectará automáticamente Next.js
3. Despliega con un clic

### Otros Proveedores

El proyecto puede ser desplegado en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Próximos Pasos

- [ ] Integrar sistema de reservas online
- [ ] Agregar blog/noticias
- [ ] Implementar formulario de contacto funcional
- [ ] Agregar galería de antes/después
- [ ] Integrar chat en vivo
- [ ] Agregar multiidioma (ES/EN)

## 📄 Licencia

© 2024 Clínica Mery Álvarez. Todos los derechos reservados.
