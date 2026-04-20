import {imageUrl} from '../config/images'
import styles from './About.module.css'

export default function AboutSummary() {
    return (
        <div className={styles.page}>
            <section className={styles.section}>
                <div className={styles.artistImageWrap}>
                    <img
                        src={imageUrl('artist2.jpg')}
                        alt="Alexa Kleinbard"
                        className={styles.artistImage}
                    />
                </div>
                <div className={styles.text}>
                    <h1 className={styles.title}>About the Artist</h1>
                    <p>
                        Alexa Kleinbard is a Florida-based ecological painter and sculptor whose life has
                        been shaped by an early immersion in the woods, gardens, and wildlife surrounding
                        her childhood home in Pennsylvania, as well as by the influence of her mother, a
                        painter and puppet maker. From traveling across the United States and Europe in her
                        teens and twenties to eventually settling in North Florida and the mountains of
                        North Georgia, she has continually sought out wild places, carrying those experiences
                        back into the studio as narrative imagery.
                    </p>
                    <p>
                        Over five decades, Kleinbard has developed a rich body of work that includes
                        low-relief clay and paper sculptures, cut-out wooden “Birds Eye View” and
                        “Talking Leaves” paintings, large site-specific murals, and series such as
                        Remedies, Corridors, and Songbirds Nesting at Twilight. Her practice is grounded in
                        close observation of plants and animals, research into medicinal botany and
                        folklore, and a deep engagement with art history, from Hieronymus Bosch to Henri
                        Rousseau. Exhibited widely in museums and galleries and recognized with multiple
                        National Endowment for the Arts fellowships and other honors, her work weaves
                        autobiography with mythic, often dreamlike scenes.
                    </p>
                    <p>
                        At the heart of Kleinbard&apos;s work is an urgent concern for biodiversity, habitat
                        loss, and the intertwined fate of humans and the more-than-human world. Her paintings
                        and reliefs depict forests, rivers, birds, and animals under pressure from logging,
                        industrial development, pollution, and climate change, yet they also honor the
                        resilience and healing power of living systems. Drawing on writers like E.O. Wilson
                        and the vision of preserving at least half the planet for nature, Kleinbard uses
                        lush, detailed imagery to invite viewers into complex emotional landscapes that
                        mourn damage while advocating for care, protection, and wonder.
                    </p>
                </div>
            </section>
        </div>
    )
}
