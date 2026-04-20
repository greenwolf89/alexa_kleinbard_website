import { imageUrl } from '../config/images'
import styles from './Hero.module.css'

/** Hero: full-bleed artwork for landing, unobstructed */
export default function Hero({
  artworkPath,
  artworkPathNarrow,
  narrowMedia = '(max-width: 699px)',
}: {
  artworkPath: string
  artworkPathNarrow?: string
  narrowMedia?: string
}) {
  return (
    <section className={styles.hero}>
      <picture>
        {artworkPathNarrow && (
          <source srcSet={imageUrl(artworkPathNarrow)} media={narrowMedia} />
        )}
        <img src={imageUrl(artworkPath)} alt="" className={styles.artwork} />
      </picture>
    </section>
  )
}
