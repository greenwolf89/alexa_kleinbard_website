import { Link, useParams, Navigate } from 'react-router-dom'
import Gallery from '../components/Gallery'
import { bodiesOfWork } from '../config/site'
import styles from './BodyOfWork.module.css'

export default function BodyOfWork() {
  const { bodyId } = useParams()
  const body = bodyId ? bodiesOfWork.find((b) => b.id === bodyId) : null

  if (!body) return <Navigate to="/work" replace />

  return (
    <div className={styles.page}>
      <Link to="/work" className={styles.backLink}>
        ← Work
      </Link>
      <h1 className={styles.title}>{body.title}</h1>
      {body.description && (
        <p className={styles.years}>{body.description}</p>
      )}
      {(body.introParagraph ?? true) && (
        <p className={styles.paragraph}>
          {body.introParagraph || 'A selection of works from this body of work.'}
        </p>
      )}
      <Gallery body={body} showHeading={false} />
    </div>
  )
}
