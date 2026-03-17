/**
 * Home page image mapper: folder and paths for hero, artist, and any
 * additional images. Paths are relative to S3 (or /public/images/ when no base).
 * Set folder to '' to use root (e.g. hero.png at bucket root or in public/images/).
 */

export const homeMapper = {
  /** S3 folder name, or '' for root (e.g. public/images/) */
  folder: '',
  /** Hero artwork filename */
  hero: 'hero.jpeg',
  /** Artist portrait filename */
  artist: 'artist.jpg',
  /** Optional extra images for home; add filenames when needed */
  additionalImages: [] as string[],

  /**
   * Catalogue paragraphs shown in a looping carousel below the hero (6s per slide).
   * Add or edit strings; order is preserved.
   */
  catalogueParagraphs: [
    `Alexa Kleinbard’s spectacular work is created
      from the premise that humans are in and of
      Nature, that Nature is not separate from or
      controllable by humans. In her view, we reside
      in the garden of nature but are not the owners
      of it. The beautiful and seductive works in this
      exhibition serve to shine a light on the now
      unavoidable fact that we are in the process of
      destroying this incredible garden that is our
      home.`,
        `“I hope the paintings, with their close up view of a healing plant and their faraway
    view of a silent world, will offer the viewer a chance to ponder the future of our
    planet. By being provocative and strong enough visually, perhaps these works
    will stop a new viewer for a reflective instance, while at the same time celebrating
    a far away slice of landscape that is cradled in medicinal plant flora and root that
    have long served as keepers of the naturalist flame, a flame one hopes will never
    be extinguished.”`,
        `All creatures we share this planet with are
    affected by human activity that fragments their
    habitats, their roaming and foraging grounds,
    and their mating and nesting places. In her
    extensive road trips around the United States,
    Kleinbard has observed increasing swaths
    of deforestation, especially in her home of
    Northwest Florida.`
    // 'Third paragraph…',
  ] as string[],
}

function pathFrom(folder: string, filename: string): string {
  return folder ? `${folder}/${filename}`.replace(/\/+$/, '') : filename
}

/** Full path for hero image (for imageUrl / Hero artworkPath) */
export function homeHeroPath(): string {
  return pathFrom(homeMapper.folder, homeMapper.hero)
}

/** Full path for artist image (for imageUrl / Hero artistPath) */
export function homeArtistPath(): string {
  return pathFrom(homeMapper.folder, homeMapper.artist)
}
