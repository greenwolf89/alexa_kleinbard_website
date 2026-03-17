import type { BodyOfWork } from './galleryMapper'

export type Opening = {
  id: string
  title: string
  date: string
  description: string
  /** When set, detail page shows this body's gallery (e.g. Installations) */
  body: BodyOfWork | null
}

/** id matches a body id (e.g. 'installations') to show that body's gallery on the opening detail page */
const OPENINGS_CONFIG: { id: string; title: string; date: string; description: string }[] = [
  { id: 'installations', title: 'Installations', date: '', description: 'Installation views from various exhibitions and venues.' },
  { id: 'recent-opening', title: 'Upcoming or recent opening', date: '2025', description: 'Details for this opening or exhibition.' },
]

/** Build openings list; inject body for entries that have a matching body (e.g. Installations) */
export function openingsMapper(allBodies: BodyOfWork[]): Opening[] {
  return OPENINGS_CONFIG.map((o) => {
    const body = allBodies.find((b) => b.id === o.id) ?? null
    return { ...o, body }
  })
}
