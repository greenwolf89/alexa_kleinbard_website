import { useState, useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { imageUrl } from '../config/images'
import type { BodyOfWork } from '../config/site'
import type { BodyDimensions } from '../config/galleryMapper'
import styles from './Gallery.module.css'

function adjacentBodies(currentId: string, list: BodyOfWork[]) {
  const i = list.findIndex((b) => b.id === currentId)
  if (i < 0) return { prev: null as BodyOfWork | null, next: null as BodyOfWork | null }
  return {
    prev: i > 0 ? list[i - 1]! : null,
    next: i < list.length - 1 ? list[i + 1]! : null,
  }
}

const SWIPE_THRESHOLD = 50

function DimensionsBlock({ dimensions }: { dimensions: BodyDimensions }) {
  if (typeof dimensions === 'string') {
    return (
      <p className={styles.galleryMetaLine}>
        Dimensions: {dimensions}
      </p>
    )
  }
  return (
    <div className={styles.dimensionsMulti}>
      <p className={styles.dimensionsLabel}>Dimensions:</p>
      <ul className={styles.dimensionsList}>
        {dimensions.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Gallery({
  body,
  showHeading = true,
  seriesNavBodies,
}: {
  body: BodyOfWork
  showHeading?: boolean
  /** When set (e.g. Work index order), show prev/next links to adjacent bodies */
  seriesNavBodies?: BodyOfWork[]
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [failedToLoad, setFailedToLoad] = useState<Set<number>>(new Set())
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [lightboxCaptionVisible, setLightboxCaptionVisible] = useState(false)
  const [lightboxMediaWidthPx, setLightboxMediaWidthPx] = useState<string | null>(null)
  const lightboxImgRef = useRef<HTMLImageElement>(null)
  const images = body.images
  const imageUrls = useMemo(() => images.map((img) => imageUrl(img.fullPath)), [images])
  const canNavigate = imageUrls.length > 1

  const handleImageError = (i: number) => {
    setFailedToLoad((prev) => new Set(prev).add(i))
  }

  const goPrev = useCallback(() => {
    if (!canNavigate || lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + imageUrls.length) % imageUrls.length))
  }, [canNavigate, imageUrls.length, lightboxIndex])

  const goNext = useCallback(() => {
    if (!canNavigate || lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % imageUrls.length))
  }, [canNavigate, imageUrls.length, lightboxIndex])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex, goPrev, goNext])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const x = touchStartX
    setTouchStartX(null)
    if (x === null) return
    const endX = e.changedTouches[0].clientX
    const delta = endX - x
    if (canNavigate && delta > SWIPE_THRESHOLD) goPrev()
    else if (canNavigate && delta < -SWIPE_THRESHOLD) goNext()
  }

  // Always show the caption for the current image in the lightbox
  useEffect(() => {
    if (lightboxIndex !== null) {
      setLightboxCaptionVisible(true)
    } else {
      setLightboxCaptionVisible(false)
    }
  }, [lightboxIndex])

  /** Lock pop-out stack width to the laid-out image so long titles wrap, not widen the block */
  useLayoutEffect(() => {
    if (lightboxIndex === null) {
      setLightboxMediaWidthPx(null)
      return
    }
    const img = lightboxImgRef.current
    if (!img) return

    const apply = () => {
      const w = Math.ceil(img.getBoundingClientRect().width)
      if (w > 0) setLightboxMediaWidthPx(`${w}px`)
    }
    apply()
    if (!img.complete) img.addEventListener('load', apply, { once: true })
    const ro = new ResizeObserver(apply)
    ro.observe(img)
    return () => {
      ro.disconnect()
      img.removeEventListener('load', apply)
    }
  }, [lightboxIndex])

  const showGalleryFooter = Boolean(body.materials?.trim() || body.dimensions !== undefined)

  const { prev: prevBody, next: nextBody } = useMemo(
    () => (seriesNavBodies?.length ? adjacentBodies(body.id, seriesNavBodies) : { prev: null, next: null }),
    [body.id, seriesNavBodies],
  )
  const showSeriesNav = Boolean(seriesNavBodies?.length && (prevBody || nextBody))

  return (
    <section className={styles.section}>
      {showHeading && (
        <>
          <h2 className={styles.heading}>{body.title}</h2>
          {body.years?.trim() ? <p className={styles.description}>{body.years}</p> : null}
        </>
      )}
      {imageUrls.length > 0 && (
        <div className={styles.grid}>
          {images.map((img, i) => {
            const src = imageUrls[i]
            return (
              <div key={src} className={styles.tile}>
                {failedToLoad.has(i) ? (
                  <a href={src} target="_blank" rel="noopener noreferrer" className={styles.tileFallback}>
                    <span>Open / download</span>
                  </a>
                ) : (
                  <div className={styles.tileMedia}>
                    <button
                      type="button"
                      className={styles.tileButton}
                      onClick={() => {
                        setLightboxCaptionVisible(false)
                        setLightboxIndex(i)
                      }}
                    >
                      <img src={src} alt="" loading="lazy" onError={() => handleImageError(i)} />
                    </button>
                    <div className={styles.tileCaption}>
                      <span className={styles.tileCaptionName}>{img.name}</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
      {showGalleryFooter ? (
        <footer className={styles.galleryFooter}>
          {body.materials?.trim() ? (
            <p className={styles.galleryMetaLine}>Materials: {body.materials}</p>
          ) : null}
          {body.dimensions !== undefined ? <DimensionsBlock dimensions={body.dimensions} /> : null}
        </footer>
      ) : null}
      {showSeriesNav ? (
        <nav className={styles.seriesNav} aria-label="Adjacent bodies of work">
          <div className={styles.seriesNavSlot}>
            {prevBody ? (
              <Link
                className={`${styles.seriesNavLink} ${styles.seriesNavLinkPrev}`}
                to={`/work/${prevBody.id}`}
              >
                <span className={styles.seriesNavLabel}>Previous</span>
                <span className={styles.seriesNavTitle} title={prevBody.title}>
                  <span className={styles.seriesNavChevron} aria-hidden>←</span>
                  {prevBody.title}
                </span>
              </Link>
            ) : null}
          </div>
          <div className={styles.seriesNavSlot}>
            {nextBody ? (
              <Link
                className={`${styles.seriesNavLink} ${styles.seriesNavLinkNext}`}
                to={`/work/${nextBody.id}`}
              >
                <span className={styles.seriesNavLabel}>Next</span>
                <span className={styles.seriesNavTitle} title={nextBody.title}>
                  {nextBody.title}
                  <span className={styles.seriesNavChevron} aria-hidden>→</span>
                </span>
              </Link>
            ) : null}
          </div>
        </nav>
      ) : null}
      {lightboxIndex !== null && !failedToLoad.has(lightboxIndex) && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="View image"
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            ×
          </button>
          {canNavigate && (
            <>
              <button
                type="button"
                className={styles.lightboxPrev}
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                aria-label="Previous image"
              >
                <span aria-hidden>‹</span>
              </button>
              <button
                type="button"
                className={styles.lightboxNext}
                onClick={(e) => { e.stopPropagation(); goNext() }}
                aria-label="Next image"
              >
                <span aria-hidden>›</span>
              </button>
            </>
          )}
          <div className={styles.lightboxImageWrap}>
            <div
              className={styles.lightboxMedia}
              style={lightboxMediaWidthPx ? { width: lightboxMediaWidthPx } : undefined}
            >
              <div className={styles.lightboxFigure}>
                <img
                  ref={lightboxImgRef}
                  src={imageUrls[lightboxIndex]}
                  alt=""
                  onClick={(e) => e.stopPropagation()}
                  className={styles.lightboxImage}
                />
              </div>
              <div
                className={`${styles.lightboxCaption} ${lightboxCaptionVisible ? styles.lightboxCaptionVisible : ''}`}
                onClick={(e) => e.stopPropagation()}
                aria-hidden
              >
                <span className={styles.lightboxCaptionName}>{images[lightboxIndex].name}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
