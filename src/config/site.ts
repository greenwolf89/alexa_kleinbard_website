import { bodiesOfWorkFromMapper, type BodyOfWork } from './galleryMapper'
import { openingsMapper, type Opening } from './openingsMapper'

export const site = {
  title: 'Alexa Kleinbard',
  domain: 'alexakleinbard.art',
  cvFileName: 'Alexa_Kleinbard_CV.pdf',
  /** Path under S3 or in /public/images/ for CV file */
  cvPath: 'Alexa_Kleinbard_CV.pdf',
}

const allBodies = bodiesOfWorkFromMapper()

/** Bodies of work for Work tab (excludes Installations; Installations lives under Openings/Exhibitions) */
export const bodiesOfWork = allBodies.filter((b) => b.id !== 'installations')

/** Get any body by id (e.g. for Installations opening) */
export function getBodyById(id: string): BodyOfWork | undefined {
  return allBodies.find((b) => b.id === id)
}

export type { BodyOfWork }

/** Links for Publications */
export const publications = [
  { label: 'Publication or review title', url: '#' },
  { label: 'Another article or show', url: '#' },
] as const

/** Openings & exhibitions (list + detail pages); includes Installations as first entry */
export const openings = openingsMapper(allBodies)
export type { Opening }
