import { imageUrl } from '../config/images'
import styles from './Hero.module.css'

/** Hero: full-bleed artwork for landing, unobstructed */
export default function Hero({ artworkPath }: { artworkPath: string }) {
  return (
    <section className={styles.hero}>
      <img
        src={imageUrl(artworkPath)}
        alt=""
        className={styles.artwork}
      />
    </section>
  )
}
