import { Link } from 'react-router-dom'
import { openings } from '../config/site'
import { imageUrl } from '../config/images'
import styles from './Openings.module.css'

export default function Openings() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Exhibitions</h1>
      <div className={styles.videoEmbed}>
        <iframe
          src="https://www.youtube.com/embed/wDcnAl-P8jc?si=01LS-HZgqX1XWMVu"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className={styles.grid}>
        {openings.map((opening) => {
          const thumbPath = opening.body?.images[0]?.fullPath
          const thumbSrc = thumbPath ? imageUrl(thumbPath) : ''
          return (
            <Link
              key={opening.id}
              to={`/openings/${opening.id}`}
              className={styles.card}
            >
              <div className={styles.cardImageWrap}>
                {thumbSrc ? (
                  <img src={thumbSrc} alt="" className={styles.cardImage} />
                ) : (
                  <div className={styles.cardPlaceholder}>No image</div>
                )}
              </div>
              <h2 className={styles.cardTitle}>{opening.title}</h2>
              {opening.date && (
                <p className={styles.cardDate}>{opening.date}</p>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
