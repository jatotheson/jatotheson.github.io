export const WEBSITE_VERSION = '01.00.03' as const


export const COLORS = {
  background: {
    default: 'rgb(255, 255, 255)',
    scrollEnd: 'rgb(205, 205, 255)',
  },
  primary: 'rgb(37, 99, 235)', // blue-600
  text: {
    primary: 'rgb(17, 24, 39)', // gray-900
    secondary: 'rgb(75, 85, 99)', // gray-600
  }
} as const


export const PROJECT_CARD = {
  minHeight: 240,
} as const


export const BASE_URL = import.meta.env.BASE_URL
export function getAssetUrl(path: string): string {
  // Ensure there’s no leading slash duplication
  const base_url = BASE_URL.endsWith('/')
    ? BASE_URL
    : BASE_URL + '/'

  return `${base_url}${path.replace(/^\/+/, '')}`
}

