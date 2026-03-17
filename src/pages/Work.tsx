import { Link } from 'react-router-dom'
import { bodiesOfWork } from '../config/site'
import { imageUrl } from '../config/images'
import styles from './Work.module.css'

export default function Work() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Work</h1>
      <div className={styles.grid}>
        {bodiesOfWork.map((body) => {
          const thumbPath = body.images[0]?.fullPath
          const thumbSrc = thumbPath ? imageUrl(thumbPath) : ''
          return (
            <Link
              key={body.id}
              to={`/work/${body.id}`}
              className={styles.card}
            >
              <div className={styles.cardImageWrap}>
                {thumbSrc ? (
                  <img src={thumbSrc} alt="" className={styles.cardImage} />
                ) : (
                  <div className={styles.cardPlaceholder}>No image</div>
                )}
              </div>
              <h2 className={styles.cardTitle}>{body.title}</h2>
              {body.description && (
                <p className={styles.cardYears}>{body.description}</p>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
