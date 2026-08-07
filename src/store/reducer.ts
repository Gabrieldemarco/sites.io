import type { AppState, AppAction } from '@/types'
import { INITIAL_STATE } from './defaults'

const STORAGE_KEY = 'aeropulse_state'

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return INITIAL_STATE
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed === 'object' && parsed !== null) {
      const loaded = parsed as Partial<AppState>
      // Merge siteConfig deeply to ensure new fields are present
      const mergedConfig = { ...INITIAL_STATE.siteConfig, ...loaded.siteConfig }
      const migratedConfig = {
        ...mergedConfig,
        companyName: ['TeffyDron', 'Rootwell'].includes(mergedConfig.companyName)
          ? 'AeroPulse'
          : mergedConfig.companyName,
        contactEmail: mergedConfig.contactEmail === 'info@teffydron.es'
          ? 'hola@aeropulse.es'
          : mergedConfig.contactEmail,
        instagramUrl: mergedConfig.instagramUrl.includes('teffydron')
          ? 'https://instagram.com/aeropulse'
          : mergedConfig.instagramUrl,
        youtubeUrl: mergedConfig.youtubeUrl.includes('teffydron')
          ? 'https://youtube.com/@aeropulse'
          : mergedConfig.youtubeUrl,
        facebookUrl: mergedConfig.facebookUrl.includes('teffydron')
          ? 'https://facebook.com/aeropulse'
          : mergedConfig.facebookUrl,
        footerText: mergedConfig.footerText
          .split('TeffyDron').join('AeroPulse')
          .split('Rootwell').join('AeroPulse'),
        videoUrl: mergedConfig.videoUrl.includes('dQw4w9WgXcQ') ? '' : mergedConfig.videoUrl,
        heroVideoPoster: mergedConfig.heroVideoPoster.includes('images.unsplash.com')
          ? ''
          : mergedConfig.heroVideoPoster,
      }
      return {
        ...INITIAL_STATE,
        ...loaded,
        siteConfig: migratedConfig,
        reviews: loaded.reviews?.map((review) => ({
          ...review,
          content: review.content.split('TeffyDron').join('AeroPulse'),
        })) ?? INITIAL_STATE.reviews,
      }
    }
    return INITIAL_STATE
  } catch {
    return INITIAL_STATE
  }
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    console.warn('Could not save state to localStorage')
  }
}

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'LOAD_STATE':
      return action.payload

    case 'UPDATE_CONFIG':
      return { ...state, siteConfig: { ...state.siteConfig, ...action.payload } }

    case 'ADD_SERVICE':
      return { ...state, services: [...state.services, action.payload] }

    case 'UPDATE_SERVICE':
      return {
        ...state,
        services: state.services.map((s) => (s.id === action.payload.id ? action.payload : s)),
      }

    case 'DELETE_SERVICE':
      return { ...state, services: state.services.filter((s) => s.id !== action.payload) }

    case 'ADD_IMAGE':
      return { ...state, gallery: [...state.gallery, action.payload] }

    case 'DELETE_IMAGE':
      return { ...state, gallery: state.gallery.filter((img) => img.id !== action.payload) }

    case 'ADD_REVIEW':
      return { ...state, reviews: [...state.reviews, action.payload] }

    case 'UPDATE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.map((r) => (r.id === action.payload.id ? action.payload : r)),
      }

    case 'DELETE_REVIEW':
      return { ...state, reviews: state.reviews.filter((r) => r.id !== action.payload) }

    case 'ADD_MESSAGE':
      return { ...state, messages: [action.payload, ...state.messages] }

    case 'MARK_MESSAGE_READ':
      return {
        ...state,
        messages: state.messages.map((m) =>
          m.id === action.payload ? { ...m, read: true } : m
        ),
      }

    case 'DELETE_MESSAGE':
      return { ...state, messages: state.messages.filter((m) => m.id !== action.payload) }

    default:
      return state
  }
}
