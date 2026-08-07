// ============================================================
// GLOBAL TYPES — Rootwell CMS (White-Label Configurable)
// ============================================================

export interface ServiceItem {
  id: string
  icon: string
  title: string
  description: string
  tag: string
}

export interface SiteConfig {
  companyLogo: string
  companyName: string
  primaryColor: string
  accentColor: string
  heroBadgeText: string
  tagline: string
  heroSubtitle: string
  stat1Num: string
  stat1Label: string
  stat2Num: string
  stat2Label: string
  stat3Num: string
  stat3Label: string
  servicesTag: string
  servicesTitle: string
  servicesSubtitle: string
  galleryTag: string
  galleryTitle: string
  gallerySubtitle: string
  videoTag: string
  videoTitle: string
  videoSubtitle: string
  videoUrl: string
  reviewsTag: string
  reviewsTitle: string
  contactTag: string
  contactTitle: string
  contactSubtitle: string
  contactEmail: string
  whatsappNumber: string
  serviceArea: string
  guaranteedResponse: string
  instagramUrl: string
  youtubeUrl: string
  facebookUrl: string
  footerText: string
  heroVideoUrl: string
  heroVideoPoster: string
  navbarLinks: string
  eventTypes: string
  certifications: string
  footerServicesLinks: string
  footerCompanyLinks: string
  footerLegalLinks: string
  privacyPolicyUrl: string
  legalNoticeUrl: string
  cookiesPolicyUrl: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  createdAt: string
}

export interface Review {
  id: string
  author: string
  role: string
  content: string
  rating: number
  avatar: string
  createdAt: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  phone: string
  eventType: string
  message: string
  createdAt: string
  read: boolean
}

export type AdminSection =
  | 'dashboard'
  | 'config'
  | 'services'
  | 'gallery'
  | 'videos'
  | 'reviews'
  | 'messages'

export interface AppState {
  siteConfig: SiteConfig
  services: ServiceItem[]
  gallery: GalleryImage[]
  reviews: Review[]
  messages: ContactMessage[]
}

export type AppAction =
  | { type: 'UPDATE_CONFIG'; payload: Partial<SiteConfig> }
  | { type: 'ADD_SERVICE'; payload: ServiceItem }
  | { type: 'UPDATE_SERVICE'; payload: ServiceItem }
  | { type: 'DELETE_SERVICE'; payload: string }
  | { type: 'ADD_IMAGE'; payload: GalleryImage }
  | { type: 'DELETE_IMAGE'; payload: string }
  | { type: 'ADD_REVIEW'; payload: Review }
  | { type: 'UPDATE_REVIEW'; payload: Review }
  | { type: 'DELETE_REVIEW'; payload: string }
  | { type: 'ADD_MESSAGE'; payload: ContactMessage }
  | { type: 'MARK_MESSAGE_READ'; payload: string }
  | { type: 'DELETE_MESSAGE'; payload: string }
  | { type: 'LOAD_STATE'; payload: AppState }
