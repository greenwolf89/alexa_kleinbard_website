import { Link, useParams, Navigate } from 'react-router-dom'
import Gallery from '../components/Gallery'
import { openings } from '../config/site'
import styles from './OpeningDetail.module.css'

export default function OpeningDetail() {
  const { openingId } = useParams()
  const opening = openingId ? openings.find((o) => o.id === openingId) : null

  if (!opening) return <Navigate to="/openings" replace />

  return (
    <div className={styles.page}>
      <Link to="/openings" className={styles.backLink}>
        ← Openings / Exhibitions
      </Link>
      <h1 className={styles.title}>{opening.title}</h1>
      {opening.date && (
        <p className={styles.date}>{opening.date}</p>
      )}
      {opening.description && (
        <p className={styles.paragraph}>{opening.description}</p>
      )}
      {opening.body && opening.body.images.length > 0 && (
        <Gallery body={opening.body} showHeading={false} />
      )}
    </div>
  )
}
