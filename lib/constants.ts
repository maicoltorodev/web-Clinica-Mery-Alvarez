/**
 * Constantes y configuraciones compartidas
 */

// Estilos de filtro para imágenes profesionales
export const PROFESSIONAL_IMAGE_FILTER = {
  filter: 'contrast(1.05) saturate(1.08) brightness(1.03)',
  imageRendering: 'crisp-edges' as const,
}

// Tamaños responsivos para la imagen de Mery
export const MERY_IMAGE_SIZES = {
  mobile: 'w-[200px] sm:w-[260px]',
  desktop: 'w-[420px]',
}

// Clases CSS comunes para botones CTA
export const CTA_BUTTON_CLASSES = {
  base: 'gap-2 h-12 sm:h-11 text-base',
  fullWidth: 'w-full sm:w-auto',
  primary: 'group w-full sm:w-auto',
}
