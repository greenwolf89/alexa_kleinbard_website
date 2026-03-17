import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { site, publications } from '../config/site'
import { homeHeroPath, homeMapper } from '../config/homeMapper'
import { imageUrl } from '../config/images'
import styles from './Home.module.css'

const CAROUSEL_DELAY_MS = 3000
const CATALOGUE_DURATION_MS = 10000

export default function Home() {
  const [overlayVisible, setOverlayVisible] = useState(false)
  const paragraphs = homeMapper.catalogueParagraphs
  const [index, setIndex] = useState(0)
  const current = paragraphs.length > 0 ? paragraphs[index % paragraphs.length] : ''

  useEffect(() => {
    const t = setTimeout(() => setOverlayVisible(true), CAROUSEL_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (paragraphs.length <= 1 || !overlayVisible) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % paragraphs.length)
    }, CATALOGUE_DURATION_MS)
    return () => clearInterval(id)
  }, [paragraphs.length, overlayVisible])

  return (
    <>
      <section className={styles.heroSection}>
        <Hero artworkPath={homeHeroPath()} />
        <div
          className={styles.heroOverlay}
          data-visible={overlayVisible}
          aria-hidden={!overlayVisible}
        >
          <p className={styles.tagline} key={index}>
            {current}
          </p>
          <Link to="/work" className={styles.cta}>
            View work
          </Link>
        </div>
      </section>
      <section className={styles.linksSection}>
        <div className={styles.linksBlock}>
          <h3>CV</h3>
          <a href={imageUrl(site.cvPath)} download={site.cvFileName} className={styles.downloadLink}>
            Download CV (PDF)
          </a>
        </div>
        <div className={styles.linksBlock}>
          <h3>Publications</h3>
          <ul>
            {publications.map((p, i) => (
              <li key={i}>
                <a href={p.url} target="_blank" rel="noopener noreferrer">{p.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.linksBlock}>
          <h3>Openings &amp; exhibitions</h3>
          <p className={styles.linksNote}>
            <Link to="/openings">View openings and exhibitions</Link>
          </p>
        </div>
      </section>
    </>
  )
}
