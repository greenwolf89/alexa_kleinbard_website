/** Single image in the mapper: path + display name */
export type GalleryImageInput = {
  path: string
  name: string
}

/** Mapper images: either full object or legacy filename string (name derived from file) */
export type GalleryImageEntry = GalleryImageInput | string

export const galleryMapper = [
  {
    folder: 'Native Songs Sanctuaries Hugging Mother',
    title: 'Native Songs, Sanctuaries and Hotspots',
    featured: true,
    years: '2024-2026',
    description: `These paintings focus on hotspots where indigenous communities and native species hold on in fragile corridors. Protecting land means protecting “native songs”—languages, animal voices, and the habitats they depend on—all vanishing along with biodiversity. Each work ties to one place and its people, animals, and plants.`,
    materials: 'Oil paint on birch wood',
    dimensions: '18" × 24″',
    images: [
      { path: 'HUGGING MOTHER -2- Songs of Hope and Despair.jpg', name: 'Songs of Hope and Despair' },
      { path: 'HUGGING MOTHER -1- Vibrating songs of the Boreal Cones.jpg', name: 'Vibrating Songs of the Boreal Cones' },
      { path: 'HUGGING MOTHER -3- Messengers Symphonies Raising Alarms.jpg', name: 'Messenger Symphonies Raising Alarms' },
      { path: 'HUGGING MOTHER -4- Rhythms Flowing Undergraound In Northern Waters.jpg', name: 'Rhythms Flowing Underground in Northern Waters' },
      { path: 'HUGGING MOTHER -5- Feathering Springs Caressing Salmon.jpg', name: 'Feathering Springs Caressing Salmon' },
      { path: 'HUGGING MOTHER -6- Listening To The Flowers Drinking The Morning Light Awakening their Pollinators.jpg', name: 'Listening to the Flowers Drinking the Morning Light, Awakening Their Pollinators' },
      { path: 'HUGGING MOTHER -7- Cypress Sanctuary Tricking Springs.jpg', name: 'Cypress Sanctuary Tricking Springs' },
      { path: 'HUGGING MOTHER -8- The Seas Tender Breath Comforting the Vulnerable  .jpg', name: `The Sea's Tender Breath Comforting the Vulnerable` },
      { path: 'HUGGING MOTHER -9- Holding Back te Flames.jpg', name: 'Holding Back the Flames' },
      { path: 'HUGGING MOTHER -10- Transformation of the Spirit Hunger.jpg', name: 'Transformation of the Spirit Hunger' }
    ],
  },
  {
    folder: 'Songbirds Nesting at Twilight',
    title: 'Songbirds Nesting at Twilight',
    featured: false,
    years: '2018-2024',
    description: 'These works trace habitat loss, climate stress, and the fragile beauty of birds and forests in the Southeast. Rooted in long observation of one mountain ridge, the paintings urge us to protect the garden we share with every other species.',
    materials: 'Oil paint on birch wood, colored pencil on rag paper',
    dimensions: '24" x 25", 35" x 40", 10" x 13", 45" x 53"',
    images: [
      { path: 'SONGBIRDS NESTING AT TWILIGHT -1- Danger in Pristine Florida,,,.jpg', name: 'Danger in Pristine Florida' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -11- Wetlands Deforested.JPG', name: 'Wetlands Deforested' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -13- No More Sanctuary.jpg', name: 'No More Sanctuary' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -14- Conversations.jpg', name: 'Conversations' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -15- Explosion in The Gulf.JPG', name: 'Explosion in The Gulf' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -16- Last Stand .jpeg', name: 'Last Stand' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -18- Nesting on the Precipice .jpg', name: 'Nesting on the Precipice' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -19- Fox and Big Blue.jpg', name: 'Fox and Big Blue' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -2- Buzzard Roost Twilight Song.jpg', name: 'Buzzard Roost Twilight Song' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -20- Nesting Grounds In The Land Of Plenty.jpg', name: 'Nesting Grounds In The Land Of Plenty' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -21- Messengers .jpg', name: 'Messengers' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -22- Mountain Sanctuary on Our Ridge.jpeg', name: 'Mountain Sanctuary on Our Ridge' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -23- Blue Wind Sirens Song .jpg', name: `Blue Wind Siren's Song` },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -24- Mama Doe Calling in The Blue Swilring Wind .jpg', name: 'Mama Doe Calling in The Blue Swirling Wind' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -25- Epiphany Of The Crying Bird, Swamp Gospels .jpg', name: 'Epiphany Of The Crying Bird, Swamp Gospels' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -26- Windy Awakenings.jpg', name: 'Windy Awakenings' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -27- When All The Spiraling Ryhthms Collide .jpg', name: 'When All The Spiraling Rhythms Collide' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -28- Stormy Forest Symphony .jpg', name: 'Stormy Forest Symphony' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -29- Sanctuary of the Mother Tree .jpg', name: 'Sanctuary of the Mother Tree' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -3- Circling for a Place to Land.jpg', name: 'Circling for a Place to Land' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -30- Yellow Throat Warblers nesting at Twilight.jpg', name: 'Yellow Throat Warblers Nesting at Twilight' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -31- Towhee Song of Loss at Twilight.jpg', name: 'Towhee Song of Loss at Twilight' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -35- Landing in a Deforested Wetland.JPG', name: 'Landing in a Deforested Wetland' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -4- Swirling Winds In  a Fragile Land .jpg', name: 'Swirling Winds In a Fragile Land' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -43- Blue Warblers Nesting.jpeg', name: 'Blue Warblers Nesting' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -44- Hooded Warbler Nesting.jpeg', name: 'Hooded Warbler Nesting' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -45- Golden Winged Warbelrs Nesting.jpeg', name: 'Golden Winged Warblers Nesting' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -46- Baltimore Oriole Nesting.jpeg', name: 'Baltimore Oriole Nesting' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -48- Hooded Warbler Nesting.jpeg', name: 'Hooded Warbler Nesting' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -49- Nashville Warblers Nestng.jpg', name: 'Nashville Warblers Nesting' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -50- Robins Nesting.jpeg', name: 'Robins Nesting' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -5- Searching for a Tree to Nest.JPG', name: 'Searching for a Tree to Nest' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -6- Messengers.jpg', name: 'Messengers' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -7- Songs of Loss.jpg', name: 'Songs of Loss' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -8- Landing in a Deforested Wetland.jpg', name: 'Landing in a Deforested Wetland' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -9- Spoonbills in Rising Seas.JPG', name: 'Spoonbills in Rising Seas' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -53- Migrating Birds North America to South America.jpg', name: 'Migrating Birds North America to South America' }
    ],
  },
  {
    folder: 'Corridors',
    title: 'Corridors',
    featured: false,
    years: '2011-2017',
    description: `In this series, collaged silhouettes picture a roaming cast of predators and prey against the rivers, sanctuaries, and shorelines named in each title. The series maps a patchwork of endangered corridors: beauty, peril, and the thin ground where wildlife still crosses.`,
    dimensions: `53" × 34" × 1/4″', '57" × 34" × 1/4″', '67" × 46" × 1/4″`,
    materials: 'Photos laminated to shaped birch wood',
    images: [
      { path: 'CORRIDORS_3_Gulf Oil Spill Sea Turtle 67x 46 x1_4 inches.jpg', name: 'Gulf Oil Spill Sea Turtle' },
      { path: 'CORRIDORS_8_Bella Coola ,River Wolves.jpg', name: 'Bella Coola, River Wolves' },
      { path: 'CORRIDORS_1_Cloudland Canyon Bobcat 57x34x1_4 inches.jpg .jpg', name: 'Cloudland Canyon Bobcat' },
      { path: 'CORRIDORS_2_ Caloosahatchie River baby panther.jpg', name: 'Caloosahatchie River Baby Panther' },
      { path: 'CORRIDORS_4_Gribbel Island Owl.jpg', name: 'Gribbel Island Owl' },
      { path: 'CORRIDORS_5_St Marks Eagle.jpg .jpg', name: 'St Marks Eagle' },
      { path: 'CORRIDORS_6_Mcneil Sanctuary  Grizzley  53 x34 x1_4 _.jpg', name: 'McNeil Sanctuary Grizzly' },
      { path: 'CORRIDORS_7_Aucilla River Deer.jpg', name: 'Aucilla River Deer' },
    ],
  },
  {
    folder: 'Remedies',
    title: 'Remedies & Bloodlines',
    featured: false,
    years: '2003-2009',
    description: 'Plants that heal',
    materials: 'Oil paint on shaped birch wood',
    dimensions: '24" x 48" x 1/2", 42" x 48" x 1/2"',
    images: [
      { path: 'REMEDIES_1_Dandelion.jpg', name: 'Dandelion'},
      { path: 'REMEDIES_2_Marshmallow.jpg', name: 'Marshmallow' },
      { path: 'REMEDIES_3__Comfrey, MadonaLily,Arnica,Solomoms Seal.jpg', name: `Comfrey, Madonna Lily, Arnica, Solomon's Seal` },
      { path: 'REMEDIES_4_Bloodroot.jpg', name: 'Bloodroot' },
      { path: 'REMEDIES_5_Mayapple.jpg', name: 'Mayapple' },
      { path: 'REMEDIES_6_Night Blooming Cereus.jpg', name: 'Night Blooming Cereus' },
      { path: 'EMEDIES_7_Mullen.jpg', name: 'Mullen' },
      { path: 'REMEDIES_8_Clary.jpg', name: 'Clary' },
      { path: 'REMEDIES_9_Borrage.jpg', name: 'Borrage' },
      { path: 'REMEDIES_10_Arnica.jpg', name: 'Arnica' },
      { path: 'REMEDIES_11_ Bloodroot.JPG', name: 'Bloodroot' },
      { path: 'REMEDIES_12_Holy Thistle jpg.jpeg', name: 'Holy Thistle' },
      { path: 'REMEDIES_13_Passion Flower.jpg', name: 'Passion Flower' },
      { path: 'REMEDIES_14_Flax.jpg', name: 'Flax' },
      { path: 'REMEDIES_15_Bind weed.jpg', name: 'Bindweed' },
      { path: 'REMEDIES_16_ Foxglove digitalis.jpg', name: 'Foxglove Digitalis' },
      { path: 'REMEDIES_17_FRACKED,_Chamonile,Dandelion,Fennel,Cumin.JPG', name: 'Chamomile, Dandelion, Fennel, Cumin' },
    ],
  },
  {
    folder: 'Botanical Drawings',
    title: 'Botanical Drawings',
    featured: false,
    years: '2000-2006',
    description: 'A selection of works from this body of work.',
    materials: 'Graphite on Strathmore paper',
    dimensions: '11" x 14"',
    images: [
      { path: 'BOTANICAL DRAWINGS_15_Life Raft.jpg', name: 'Life Raft' },
      { path: 'BOTANICAL DRAWINGS_1_, Milk Thistle.jpg', name: 'Milk Thistle' },
      { path: 'BOTANICAL DRAWINGS_10_Holy Thistle.jpg', name: 'Holy Thistle' },
      { path: 'BOTANICAL DRAWINGS_11_Black Cohosh.jpg', name: 'Black Cohosh' },
      { path: 'BOTANICAL DRAWINGS_12_Milk Thistle.jpg', name: 'Milk Thistle' },
      { path: 'BOTANICAL DRAWINGS_13_Rhematism Remedy.jpg', name: 'Rheumatism Remedy' },
      { path: 'BOTANICAL DRAWINGS_14_ Many Trees.jpg', name: 'Many Trees' },
      { path: 'BOTANICAL DRAWINGS_15_The Mood Of Mountains.jpg', name: 'The Mood Of Mountains' },
      { path: 'BOTANICAL DRAWINGS_16_ Bindweed.jpg', name: 'Bindweed' },
      { path: 'BOTANICAL DRAWINGS_17_ Erect Clematis.jpg', name: 'Erect Clematis' },
      { path: 'BOTANICAL DRAWINGS_18_Flax and Passion Vine .jpg', name: 'Flax and Passion Vine' },
      { path: 'BOTANICAL DRAWINGS_19_ Milk Thistle.jpg', name: 'Milk Thistle' },
      { path: 'BOTANICAL DRAWINGS_2_Pomegranate.jpg', name: 'Pomegranate' },
      { path: 'BOTANICAL DRAWINGS_20_passion Flower.jpg', name: 'Passion Flower' },
      { path: 'BOTANICAL DRAWINGS_21_Comfrey.jpg', name: 'Comfrey' },
      { path: 'BOTANICAL DRAWINGS_22_ Night Blooming Cereus.jpg', name: 'Night Blooming Cereus' },
      { path: 'BOTANICAL DRAWINGS_23_Lotus.jpg', name: 'Lotus' },
      { path: 'BOTANICAL DRAWINGS_3_Melancholy Thistle .jpg', name: 'Melancholy Thistle' },
      { path: 'BOTANICAL DRAWINGS_4_Wavy Thistle.jpg', name: 'Wavy Thistle' },
      { path: 'BOTANICAL DRAWINGS_5_ Blessed Thistle.jpg', name: 'Blessed Thistle' },
      { path: 'BOTANICAL DRAWINGS_6_Rheumatism Remedy.jpg', name: 'Rheumatism Remedy' },
      { path: 'BOTANICAL DRAWINGS_7_Lady Slipper.jpg', name: 'Lady Slipper' },
      { path: 'BOTANICAL DRAWINGS_8_Wavy Thistle.jpg', name: 'Wavy Thistle' },
      { path: 'BOTANICAL DRAWINGS_9_Thistle.jpg', name: 'Thistle' },
    ],
  },

  {
    folder: 'Fl Endandered Native Plants Thistles & Aphrodesiacs',
    title: 'Florida Native Endangered Plants, Thistles & Aphrodesiacs',
    featured: false,
    years: '1998-2003',
    description: '',
    materials: 'Oil paint on shaped birch wood',
    dimensions: '48" x 96" x 1", 36" x 60" x 1/2"',
    images: [
      { path: 'FL ENDANGERED_1_Spiny Pod.jpg', name: 'Spiny Pod' },
      { path: 'FL ENDANGERED_3_Miiccosukee Gooseberry.jpg', name: 'Miccosukee Gooseberry' },
      { path: 'FL ENDANGERED_3_Rosemary Etonia.jpg', name: 'Rosemary Etonia' },
      { path: 'THISTLES_1_Milk Thistle.jpg', name: 'Milk Thistle' },
      { path: 'THISTLES_2_ Wavy Thistle.jpg', name: 'Wavy Thistle' },
      { path: 'THISTLES_3_Holy Thistle.jpg', name: 'Holy Thistle' },
      { path: 'APHRODISIACS_1_Silver Eringo.jpg', name: 'Silver Eringo' },
      { path: 'APHRODISIACS_2_Datura.jpg', name: 'Datura' },
      { path: 'APHRODIASIACS_3_Lotus.jpg .jpg', name: 'Lotus' },
      { path: 'APHRODISAICS_4_Pomegranate.jpg', name: 'Pomegranate' }
    ],
  },

  {
    folder: 'Talking Leaves',
    title: 'Talking Leaves',
    featured: false,
    years: '1994 - 1997',
    description: `The paintings in this series are ethereal landscapes created on carefully cut-out leaf forms of specific plants. Within each form is an internal landscape, which envelops the viewer and draws them into the landscape. The objective is to heighten the viewers' awareness of their oneness with nature and the fragile environment in which society lives.`,
    images: [
      { path: 'TALKING LEAVES_2_ Butter Bur.jpg', name: 'Butter Bur' },
      { path: 'TALKING LEAVES_2  Ginseng jpg.jpeg', name: 'Ginseng' },
      { path: 'TALKING LEAVES_6_ Salt Bush, Thunder Hole view.jpg', name: 'Salt Bush, Thunder Hole View' },
      { path: 'TALKING LEAVES_7_ Comfrey, Shell Point View.jpg', name: 'Comfrey, Shell Point View' },
      { path: 'TALKING LEAVES_8_ Solomon Seal, Lake Kezar view.jpg', name: 'Solomon Seal, Lake Kezar View' },
      { path: 'TALKING LEAVES_9_Hawthorne, Rossi, Sundet view.jpg', name: 'Hawthorne, Sundet View' },
      { path: 'TALKING LEAVES_10_Echinicea,  Blagden Preserve, Mt Desert, 1997.jpg', name: 'Echinicea, Blagden Preserve, Mt. Desert Island' },
      { path: 'TALKING LEAVES_12_ Wolfsbane, Four Seals View.jpg', name: 'Wolfsbane, Four Seals View' },
      { path: 'TALKING LEAVES_13_ Motherwort, Spring Creek view.jpg', name: 'Motherwort, Spring Creek View' },
      { path: 'TALKING LEAVES_14_, Ginseng, Vogel View.jpg', name: 'Ginseng, Vogel View' },
      { path: 'TALKING LEAVES_15_Tulip, Sommes Sound, 1995.jpg', name: 'Tulip, Sommes Sound View' },
      { path: 'TALKING LEAVES_16_Caster oil , Pretty March View.jpg', name: 'Castor Oil, Pretty March View' },
      { path: 'TALKING LEAVES_5_ Ginko Gulf Coast.jpg', name: 'Gingko Gulf Coast' }
    ],
  },
  {
    folder: `Bird's Eye View`,
    title: `Bird's Eye View`,
    featured: false,
    years: '1993 - 1996',
    description: 'Need description',
    materials: 'Oil paint on birch wood',
    dimensions: '48" x 60" x 1/2"',
    images: [
      { path: 'BIRDS EYE VIEW-1- Acid Rivers To Lake View.jpeg', name: 'Acid Rivers To Lake View' },
      { path: 'BIRDS EYE VIEW -2-Overlooking Smokestacks View.jpeg', name: 'Overlooking Smokestacks View' },
      { path: 'BIRDS EYE VIEW -3-Just passing Through Whales out of Breath.jpeg', name: 'Just Passing Through Whales Out Of Breath' },
      { path: 'BIRDS EYE  VIEW -4-Just Passing Through, Wolf, Coyote, and Octopus.jpg', name: 'Just Passing Through, Wolf, Coyote, and Octopus' },
      { path: 'BIRDS EYE VIEW-5- Mountain Waters Flow To Tree Cemetery View.jpeg', name: 'Mountain Waters Flow To Tree Cemetery View' },
      { path: 'BIRDS EYE VIEW-6-Forest Song View.jpg', name: 'Forest Song View' },
      { path: 'BIRDS EYE VIEW -7- Life on Fire.jpeg', name: 'Life On Fire' },
      { path: 'BIRDS EYE VIEW -8- Blue Heron, Red Wolf, Oysters.jpeg', name: 'Blue Heron, Red Wolf, Oysters' }
    ],
  },
  {
    folder: 'Future Imaginings',
    title: 'Future Imaginings',
    featured: false,
    years: '1987-1990',
    description: 'Need description',
    materials: 'Oil paint on wood',
    dimensions: '11" x 14"',
    images: [
      { path: 'FUTURE IMAGININGS -1-  Searching for seeds.JPG', name: 'Searching For Seeds' },
      { path: 'FUTURE IMAGININGS -2-Searching for seeds.JPG', name: 'Searching For Seeds 2' },
      { path: 'FUTURE IMAGIININGS -3- Searching for Seeds.JPG', name: 'Searching For Seeds 3' },
      { path: 'FUTURE IMAGININGS -4- Before and After.jpg', name: 'Before and After' },
      { path: 'FUTURE IMAGININGS  -5- Searching for life.jpg', name: 'Searching For Life' },
      { path: 'FUTURE IMAGININGS -6- Life in the Aquafer.JPG', name: 'Life In The Aquifer' },
      { path: 'FUTURE IMAGININGS -7- Life In The Underground.JPG', name: 'Life In The Underground' },
      { path: 'FUTURE IMAGININGS -8- Drawing a Time Before.JPG', name: 'Drawing A Time Before' },
      { path: 'FUTURE IMAGININGS -9-Drawing a Time Before.JPG', name: 'Drawing A Time Before 2' }
    ],
  },
  {
    folder: 'Early Envrionmental',
    title: 'Early Envrionmental',
    featured: false,
    years: '1980-1987',
    description: 'Need description',
    materials: 'Oil paint on wood, Oil paint on stretched canvas',
    dimensions: `3' x 4', 3' x 7', 4' x 5'`,
    images: [
      { path: 'EARLY ENVIRONMENTAL, 1980 ,THE FIRE WAS BURNING .jpg', name: 'The Fire Was Burning' },
      { path: 'EARLY ENVIRONMENTAL, Red Tide .jpg', name: 'Red Tide' },
      { path: 'EARLY ENVIRONMENTAL_1_Carving Up the  Earth.jpg', name: 'Carving Up the Earth' },
      { path: 'EARLY ENVIRONMENTAL_2_On the Edge 1985.jpg', name: 'On the Edge' },
      { path: 'EARLY ENVIRONMENTAL_3_In this Place let Their Be Plenty and Grace.jpg', name: 'In This Place Let There Be Plenty and Grace' },
      { path: 'EARLY ENVIRONMENTAL_4_Slash and Burn 1984.jpg', name: 'Slash and Burn' },
      { path: 'EARLY ENVIRONMENTAL_5_Polar Bears in Garbage Dump, 1986 .jpg', name: 'Polar Bears In Garbage Dump' },
      { path: 'EARLY ENVIRONMENTAL_6_In Sickness and in Health Till Death Do Us Part, center panel.jpg', name: 'In Sickness and In Health Till Death Do Us Part, Center Panel' },
      { path: 'EARLY ENVIRONMENTAL_7_In Sickness and in Health Till Death Do Us Part , Garden of Eden.jpg .JPG', name: 'In Sickness and In Health Till Death Do Us Part, Garden of Eden' },
      { path: 'EARLY ENVIRONMENTAL_8_In Sickness and in Health Till Death Do Us Part, Skeleton Trees.jpg', name: 'In Sickness And In Health Till Death Do Us Part, Skeleton Trees' },
      { path: 'EARLY ENVIRONMENTAL_9_In Sickness and in Health Till Death Do Us Part.jpg', name: 'In Sickness and In Health Till Death Do Us Part' },

    ],
  }
] as const

export type GalleryMapperEntry = (typeof galleryMapper)[number]

function slugFromFolder(folder: string): string {
  return folder.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

function humanize(folder: string): string {
  return folder
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

/** Build full S3 path for an image in a body */
export function imagePathForBody(folder: string, imageFilename: string): string {
  return `${folder}/${imageFilename.replace(/^\//, '')}`
}

function nameFromFilename(filename: string): string {
  return filename.replace(/\.[^.]+$/, '').trim()
}

function normalizeImageEntry(entry: GalleryImageEntry, folder: string): GalleryImage {
  if (typeof entry === 'string') {
    return {
      fullPath: imagePathForBody(folder, entry),
      name: nameFromFilename(entry),
    }
  }
  return {
    fullPath: imagePathForBody(folder, entry.path),
    name: entry.name,
  }
}

/** Normalized image for the app: fullPath for URL; name for captions */
export type GalleryImage = {
  fullPath: string
  name: string
}

/** One size, or multiple distinct sizes for a series */
export type BodyDimensions = string | readonly string[]

function normalizeBodyDimensions(spec: BodyDimensions | undefined): BodyDimensions | undefined {
  if (spec === undefined) return undefined
  if (typeof spec === 'string') {
    const t = spec.trim()
    return t ? t : undefined
  }
  const parts = [...new Set(spec.map((s) => s.trim()).filter(Boolean))]
  if (parts.length === 0) return undefined
  if (parts.length === 1) return parts[0]
  return parts
}

export type BodyOfWork = {
  id: string
  title: string
  featured: boolean
  /** Year range for this series (e.g. "2018-2024") */
  years: string
  /** Intro copy on the body-of-work page */
  description: string
  /** Shared medium for all works in this series (shown below the gallery) */
  materials?: string
  /** Sizes for the series when uniform or a short list of distinct sizes */
  dimensions?: BodyDimensions
  folder: string
  images: GalleryImage[]
}

/** Derive bodies of work for the app from the mapper */
export function bodiesOfWorkFromMapper(): BodyOfWork[] {
  return galleryMapper.map((entry: GalleryMapperEntry) => {
    const folder = entry.folder
    const images = (entry.images as readonly GalleryImageEntry[]).map((e) => normalizeImageEntry(e, folder))
    const row = entry as GalleryMapperEntry & {
      materials?: string
      years?: string
      description?: string
      dimensions?: BodyDimensions
    }
    return {
      id: slugFromFolder(folder),
      title: entry.title || humanize(folder),
      featured: entry.featured ?? false,
      years: row.years ?? '',
      description: row.description ?? '',
      materials: row.materials?.trim() ? row.materials : undefined,
      dimensions: normalizeBodyDimensions(row.dimensions),
      folder,
      images,
    }
  })
}
