const base = typeof import.meta.env !== 'undefined' && import.meta.env?.VITE_S3_BASE_URL
  ? (import.meta.env.VITE_S3_BASE_URL as string).trim().replace(/\/$/, '')
  : ''

if (import.meta.env.DEV && typeof window !== 'undefined') {
  if (!base) {
    console.warn(
      '[images] VITE_S3_BASE_URL is not set in .env — image URLs will point to /images/... (local), so S3/CloudFront images will not load. Add VITE_S3_BASE_URL to .env and restart the dev server.'
    )
  }
}

/**
 * Encode path for S3/CloudFront: each segment (folder, filename) is encoded
 * so spaces and special characters work in the URL. Use '+' for spaces so
 * CloudFront/S3 resolve the object key correctly.
 */
function encodePath(path: string): string {
  const clean = path.replace(/^\//, '')
  return clean
    .split('/')
    .map((segment) => encodeURIComponent(segment).replace(/%20/g, '+'))
    .join('/')
}

/** Build full image URL: S3 base + path, or local /images/ path */
export function imageUrl(path: string): string {
  if (!path) return ''
  if (path.startsWith('http')) return path
  if (base) return `${base}/${encodePath(path)}`
  return `/images/${path.replace(/^\//, '')}`
}
