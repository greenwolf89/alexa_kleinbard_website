/** Single image in the mapper: path = filename in folder; name, materials, dimensions for captions */
export type GalleryImageInput = {
  path: string
  name: string
  materials: string
  dimensions: string
}

/** Mapper images: either full object or legacy filename string (name derived, materials/dimensions empty) */
export type GalleryImageEntry = GalleryImageInput | string

export const galleryMapper = [
  {
    folder: 'Native Songs Sanctuaries Hugging Mother',
    title: 'Hugging Mother',
    featured: true,
    description: 'Native Songs, Sanctuaries and Hotspots 2024-2026',
    images: [
      { path: 'HUGGING MOTHER -2- Songs of Hope and Despair.jpg', name: 'Songs of Hope and Despair', materials: 'Oil Paint on Birch Wood', dimensions: '18 x 24”' },
      { path: 'HUGGING MOTHER -1- Vibrating songs of the Boreal Cones.jpg', name: 'Vibrating Songs of the Boreal Cones', materials: 'Oil Paint on Birch Wood', dimensions: '18 x 24”' },
      { path: 'HUGGING MOTHER -3- Messengers Symphonies Raising Alarms.jpg', name: 'Messenger Symphonies Raising Alarms', materials: 'Oil Paint on Birch Wood', dimensions: '18 x 24”' },
      { path: 'HUGGING MOTHER -4- Rhythms Flowing Undergraound In Northern Waters.jpg', name: 'Rhythms Flowing Underground in Northern Waters', materials: 'Oil Paint on Birch Wood', dimensions: '18 x 24”' },
      { path: 'HUGGING MOTHER -5- Feathering Springs Caressing Salmon.jpg', name: 'Feathering Springs Caressing Salmon', materials: 'Oil Paint on Birch Wood', dimensions: '18 x 24”' },
      { path: 'HUGGING MOTHER -6- Listening To The Flowers Drinking The Morning Light Awakening their Pollinators.jpg', name: 'Listening to the Flowers Drinking the Morning Light, Awakening Their Pollinators', materials: 'Oil Paint on Birch Wood', dimensions: '18 x 24”' },
      { path: 'HUGGING MOTHER -7- Cypress Sanctuary Tricking Springs.jpg', name: 'Cypress Sanctuary Tricking Springs', materials: 'Oil Paint on Birch Wood', dimensions: '18 x 24”' },
      { path: 'HUGGING MOTHER -8- The Seas Tender Breath Comforting the Vulnerable  .jpg', name: 'The Seas Tender Breath Comforting the Vulnerable', materials: 'Oil Paint on Birch Wood', dimensions: '18 x 24”' },
      { path: 'HUGGING MOTHER -9- Holding Back te Flames.jpg', name: 'Holding Back the Flames', materials: 'Oil Paint on Birch Wood', dimensions: '18 x 24”' },
      { path: 'HUGGING MOTHER -10- Transformation of the Spirit Hunger.jpg', name: 'Transformation of the Spirit Hunger', materials: 'Oil Paint on Birch Wood', dimensions: '18 x 24”' }
    ],
  },
  {
    folder: 'Songbirds Nesting at Twilight',
    title: 'Songbirds Nesting at Twilight',
    featured: false,
    description: '2018-2024',
    images: [
      { path: 'SONGBIRDS NESTING AT TWILIGHT -1- Danger in Pristine Florida,,,.jpg', name: 'Danger in Pristine Florida', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -11- Wetlands Deforested.JPG', name: 'Wetlands Deforested', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -13- No More Sanctuary.jpg', name: 'No More Sanctuary', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -14- Conversations.jpg', name: 'Conversations', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -15- Explosion in The Gulf.JPG', name: 'Explosion in The Gulf', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -16- Last Stand .jpeg', name: 'Last Stand', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -18- Nesting on the Precipice .jpg', name: 'Nesting on the Precipice', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -19- Fox and Big Blue.jpg', name: 'Fox and Big Blue', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -2- Buzzard Roost Twilight Song.jpg', name: 'Buzzard Roost Twilight Song', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -20- Nesting Grounds In The Land Of Plenty.jpg', name: 'Nesting Grounds In The Land Of Plenty', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -21- Messengers .jpg', name: 'Messengers', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -22- Mountain Sanctuary on Our Ridge.jpeg', name: 'Mountain Sanctuary on Our Ridge', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -23- Blue Wind Sirens Song .jpg', name: 'Blue Wind Sirens Song', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -24- Mama Doe Calling in The Blue Swilring Wind .jpg', name: 'Mama Doe Calling in The Blue Swirling Wind', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -25- Epiphany Of The Crying Bird, Swamp Gospels .jpg', name: 'Epiphany Of The Crying Bird, Swamp Gospels', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -26- Windy Awakenings.jpg', name: 'Windy Awakenings', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -27- When All The Spiraling Ryhthms Collide .jpg', name: 'When All The Spiraling Rhythms Collide', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -28- Stormy Forest Symphony .jpg', name: 'Stormy Forest Symphony', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -29- Sanctuary of the Mother Tree .jpg', name: 'Sanctuary of the Mother Tree', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -3- Circling for a Place to Land.jpg', name: 'Circling for a Place to Land', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -30- Yellow Throat Warblers nesting at Twilight.jpg', name: 'Yellow Throat Warblers Nesting at Twilight', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -31- Towhee Song of Loss at Twilight.jpg', name: 'Towhee Song of Loss at Twilight', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -35- Landing in a Deforested Wetland.JPG', name: 'Landing in a Deforested Wetland', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -4- Swirling Winds In  a Fragile Land .jpg', name: 'Swirling Winds In a Fragile Land', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -43- Blue Warblers Nesting.jpeg', name: 'Blue Warblers Nesting', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -44- Hooded Warbler Nesting.jpeg', name: 'Hooded Warbler Nesting', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -45- Golden Winged Warbelrs Nesting.jpeg', name: 'Golden Winged Warblers Nesting', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -46- Baltimore Oriole Nesting.jpeg', name: 'Baltimore Oriole Nesting', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -48- Hooded Warbler Nesting.jpeg', name: 'Hooded Warbler Nesting', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -49- Nashville Warblers Nestng.jpg', name: 'Nashville Warblers Nesting', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -50- Robins Nesting.jpeg', name: 'Robins Nesting', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -5- Searching for a Tree to Nest.JPG', name: 'Searching for a Tree to Nest', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -53- Migrating Birds North America to South America.jpg', name: 'Migrating Birds North America to South America', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -6- Messengers.jpg', name: 'Messengers', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -7- Songs of Loss.jpg', name: 'Songs of Loss', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -8- Landing in a Deforested Wetland.jpg', name: 'Landing in a Deforested Wetland', materials: '', dimensions: '' },
      { path: 'SONGBIRDS NESTING AT TWILIGHT -9- Spoonbills in Rising Seas.JPG', name: 'Spoonbills in Rising Seas', materials: '', dimensions: '' },
    ],
  },
  {
    folder: 'Corridors',
    title: 'Corridors',
    featured: false,
    description: '2011-2017',
    images: [
      { path: 'CORRIDORS_3_Gulf Oil Spill Sea Turtle 67x 46 x1_4 inches.jpg', name: 'Gulf Oil Spill Sea Turtle', materials: '', dimensions: '67 x 46 x 1/4 inches' },
      { path: 'CORRIDORS_8_Bella Coola ,River Wolves.jpg', name: 'Bella Coola, River Wolves', materials: '', dimensions: '' },
      { path: 'CORRIDORS_1_Cloudland Canyon Bobcat 57x34x1_4 inches.jpg .jpg', name: 'Cloudland Canyon Bobcat', materials: '', dimensions: '57 x 34 x 1/4 inches' },
      { path: 'CORRIDORS_2_ Caloosahatchie River baby panther.jpg', name: 'Caloosahatchie River Baby Panther', materials: '', dimensions: '' },
      { path: 'CORRIDORS_4_Gribbel Island Owl.jpg', name: 'Gribbel Island Owl', materials: '', dimensions: '' },
      { path: 'CORRIDORS_5_St Marks Eagle.jpg .jpg', name: 'St Marks Eagle', materials: '', dimensions: '' },
      { path: 'CORRIDORS_6_Mcneil Sanctuary  Grizzley  53 x34 x1_4 _.jpg', name: 'McNeil Sanctuary Grizzly', materials: '', dimensions: '53 x 34 x 1/4 inches' },
      { path: 'CORRIDORS_7_Aucilla River Deer.jpg', name: 'Aucilla River Deer', materials: '', dimensions: '' },
    ],
  },
  {
    folder: 'Botanical Drawings',
    title: 'Botanical Drawings',
    featured: false,
    description: '2000-2006',
    images: [
      { path: 'BOTANICAL DRAWINGS_15_Life Raft.jpg', name: 'Life Raft', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_1_, Milk Thistle.jpg', name: 'Milk Thistle', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_10_Holy Thistle.jpg', name: 'Holy Thistle', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_11_Black Cohosh.jpg', name: 'Black Cohosh', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_12_Milk Thistle.jpg', name: 'Milk Thistle', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_13_Rhematism Remedy.jpg', name: 'Rheumatism Remedy', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_14_ Many Trees.jpg', name: 'Many Trees', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_15_The Mood Of Mountains.jpg', name: 'The Mood Of Mountains', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_16_ Bindweed.jpg', name: 'Bindweed', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_17_ Erect Clematis.jpg', name: 'Erect Clematis', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_18_Flax and Passion Vine .jpg', name: 'Flax and Passion Vine', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_19_ Milk Thistle.jpg', name: 'Milk Thistle', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_2_Pomegranate.jpg', name: 'Pomegranate', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_20_passion Flower.jpg', name: 'Passion Flower', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_21_Comfrey.jpg', name: 'Comfrey', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_22_ Night Blooming Cereus.jpg', name: 'Night Blooming Cereus', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_23_Lotus.jpg', name: 'Lotus', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_3_Melancholy Thistle .jpg', name: 'Melancholy Thistle', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_4_Wavy Thistle.jpg', name: 'Wavy Thistle', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_5_ Blessed Thistle.jpg', name: 'Blessed Thistle', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_6_Rheumatism Remedy.jpg', name: 'Rheumatism Remedy', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_7_Lady Slipper.jpg', name: 'Lady Slipper', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_8_Wavy Thistle.jpg', name: 'Wavy Thistle', materials: '', dimensions: '' },
      { path: 'BOTANICAL DRAWINGS_9_Thistle.jpg', name: 'Thistle', materials: '', dimensions: '' },
    ],
  },
  {
    folder: 'body-of-work-5',
    title: 'Body of Work 5',
    featured: false,
    description: '',
    images: [],
  },
  {
    folder: 'body-of-work-6',
    title: 'Body of Work 6',
    featured: false,
    description: '',
    images: [],
  },
  {
    folder: 'body-of-work-7',
    title: 'Body of Work 7',
    featured: false,
    description: '',
    images: [],
  },
  {
    folder: 'body-of-work-8',
    title: 'Body of Work 8',
    featured: false,
    description: '',
    images: [],
  },
  {
    folder: 'body-of-work-9',
    title: 'Body of Work 9',
    featured: false,
    description: '',
    images: [],
  },
  {
    folder: 'body-of-work-10',
    title: 'Body of Work 10',
    featured: false,
    description: '',
    images: [],
  },
  {
    folder: 'installations',
    title: 'Installations',
    featured: false,
    description: '',
    images: [],
  },
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
      materials: '',
      dimensions: '',
    }
  }
  return {
    fullPath: imagePathForBody(folder, entry.path),
    name: entry.name,
    materials: entry.materials,
    dimensions: entry.dimensions,
  }
}

/** Normalized image for the app: fullPath for URL; name, materials, dimensions for captions */
export type GalleryImage = {
  fullPath: string
  name: string
  materials: string
  dimensions: string
}

export type BodyOfWork = {
  id: string
  title: string
  featured: boolean
  /** Shown as subtitle (e.g. years "2018-2024") */
  description: string
  /** Optional short paragraph under title/years on the body of work page */
  introParagraph?: string
  folder: string
  images: GalleryImage[]
}

/** Derive bodies of work for the app from the mapper */
export function bodiesOfWorkFromMapper(): BodyOfWork[] {
  return galleryMapper.map((entry: GalleryMapperEntry) => {
    const folder = entry.folder
    const images = (entry.images as readonly GalleryImageEntry[]).map((e) => normalizeImageEntry(e, folder))
    return {
      id: slugFromFolder(folder),
      title: entry.title || humanize(folder),
      featured: entry.featured ?? false,
      description: entry.description ?? '',
      introParagraph: (entry as GalleryMapperEntry & { introParagraph?: string }).introParagraph,
      folder,
      images,
    }
  })
}
