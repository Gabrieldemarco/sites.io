import type { SiteConfig, AppState, ServiceItem } from '@/types'

export const DEFAULT_CONFIG: SiteConfig = {
  companyLogo: '',
  companyName: 'Rootwell',
  primaryColor: '#00d4ff',
  accentColor: '#ff0066',
  heroBadgeText: '🚁 Drones Profesionales',
  tagline: 'Capturamos la emoción desde el cielo',
  heroSubtitle:
    'Drones profesionales para eventos deportivos en toda España y Europa. FPV Racing, cinematografía aérea y retransmisión en vivo.',
  stat1Num: '200+',
  stat1Label: 'Eventos Filmados',
  stat2Num: '15+',
  stat2Label: 'Países',
  stat3Num: '4K',
  stat3Label: 'Resolución',
  servicesTag: 'Servicios',
  servicesTitle: 'Soluciones completas de drones',
  servicesSubtitle: 'Ofrecemos soluciones completas de drones para todo tipo de eventos deportivos',
  galleryTag: 'Galería',
  galleryTitle: 'Nuestro trabajo en acción',
  gallerySubtitle: 'Más de 200 eventos filmados en toda Europa. Cada vuelo es una historia única.',
  videoTag: 'Showreel',
  videoTitle: 'Nuestro trabajo habla por sí solo',
  videoSubtitle: 'Más de 200 eventos filmados en toda Europa. Cada vuelo es una historia única.',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  reviewsTag: 'Testimonios',
  reviewsTitle: 'Lo que dicen nuestros clientes',
  contactTag: 'Contacto',
  contactTitle: 'Hablemos de tu próximo evento',
  contactSubtitle: 'Cuéntanos sobre tu evento y te enviaremos un presupuesto personalizado en menos de 24 horas.',
  contactEmail: 'info@teffydron.es',
  whatsappNumber: '34600000000',
  serviceArea: 'España y Europa',
  guaranteedResponse: '24 horas',
  instagramUrl: 'https://instagram.com/teffydron',
  youtubeUrl: 'https://youtube.com/@teffydron',
  facebookUrl: 'https://facebook.com/teffydron',
  footerText: '© 2025 Rootwell. Todos los derechos reservados. | RGPD · Aviso Legal',
}

export const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: '1',
    icon: '🎥',
    title: 'Cinematografía Aérea',
    description: 'Grabaciones en 4K/8K con estabilización gimbal para producciones de alta calidad.',
    tag: 'Filmación',
  },
  {
    id: '2',
    icon: '🏎️',
    title: 'FPV Racing',
    description: 'Drones FPV de alta velocidad para carreras y eventos de motorsport en primera persona.',
    tag: 'Racing',
  },
  {
    id: '3',
    icon: '📡',
    title: 'Retransmisión en Vivo',
    description: 'Transmisiones en tiempo real con baja latencia para eventos deportivos masivos.',
    tag: 'Live',
  },
  {
    id: '4',
    icon: '🎯',
    title: 'Inspección Técnica',
    description: 'Análisis detallado de infraestructuras, instalaciones y terrenos con drones de precisión.',
    tag: 'Inspección',
  },
  {
    id: '5',
    icon: '🗺️',
    title: 'Cartografía 3D',
    description: 'Modelos 3D y ortofotos de alta resolución para planificación y análisis.',
    tag: 'Mapping',
  },
  {
    id: '6',
    icon: '🎬',
    title: 'Producción Eventos',
    description: 'Cobertura completa de eventos deportivos, conciertos y espectáculos aéreos.',
    tag: 'Eventos',
  },
]

export const DEFAULT_GALLERY = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1527977966861-9b05741b38f5?w=800',
    alt: 'Drone sobre estadio deportivo',
    category: 'deportes' as const,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800',
    alt: 'FPV racing en circuito',
    category: 'fpv' as const,
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800',
    alt: 'Vista aérea de competición ciclista',
    category: 'deportes' as const,
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1534481016308-0fca71578ae5?w=800',
    alt: 'Drone cinematográfico profesional',
    category: 'cinematica' as const,
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800',
    alt: 'Vista aérea de maratón urbano',
    category: 'aerea' as const,
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
    alt: 'Evento deportivo nocturno',
    category: 'deportes' as const,
    createdAt: new Date().toISOString(),
  },
]

export const DEFAULT_REVIEWS = [
  {
    id: '1',
    author: 'Carlos Martínez',
    role: 'Director Deportivo — Club Atlético Madrid',
    content:
      'TeffyDron transformó la cobertura de nuestros partidos. La calidad de imagen es increíble y el equipo es extremadamente profesional. Totalmente recomendados.',
    rating: 5,
    avatar: 'CM',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    author: 'Sophie Dubois',
    role: 'Organizadora — Tour Ciclista Francia',
    content:
      'Contratamos a TeffyDron para el Tour y superaron todas las expectativas. Las imágenes aéreas dieron una dimensión completamente nueva al evento.',
    rating: 5,
    avatar: 'SD',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    author: 'Marco Rossi',
    role: 'CEO — SportMedia Italia',
    content:
      'El mejor servicio de drones para eventos que hemos contratado en toda Europa. Rápidos, profesionales y con tecnología de última generación.',
    rating: 5,
    avatar: 'MR',
    createdAt: new Date().toISOString(),
  },
]

export const INITIAL_STATE: AppState = {
  siteConfig: DEFAULT_CONFIG,
  services: DEFAULT_SERVICES,
  gallery: DEFAULT_GALLERY,
  reviews: DEFAULT_REVIEWS,
  messages: [],
}
