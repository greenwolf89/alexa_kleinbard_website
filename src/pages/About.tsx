import { imageUrl } from '../config/images'
import { site } from '../config/site'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.artistImageWrap}>
          <img
            src={imageUrl('artist.jpg')}
            alt="Alexa Kleinbard"
            className={styles.artistImage}
          />
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>About {site.title}</h1>
          <p>
            Alexa Kleinbard’s paintings immerse the viewer in dense, luminous worlds
            where wildlife, flora, and myth intertwine. Her work explores the
            interconnectedness of nature through a rich palette of deep blues,
            teals, and emerald greens, often set against dark, atmospheric
            backgrounds that make each element feel alive and glowing.
          </p>
          <p>
            Drawing on themes of biodiversity, transformation, and the hidden life
            of nocturnal and twilight landscapes, her art invites close looking
            and a sense of wonder at the complexity of the natural world.
          </p>
        </div>
      </section>
    </div>
  )
}
