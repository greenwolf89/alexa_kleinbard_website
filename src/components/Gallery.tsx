import { useState, useCallback, useEffect, useMemo } from 'react'
import { imageUrl } from '../config/images'
import type { BodyOfWork } from '../config/site'
import type { GalleryImage } from '../config/galleryMapper'
import styles from './Gallery.module.css'

const SWIPE_THRESHOLD = 50

/** Parse dimensions string (e.g. "18 x 24\"", "67 x 46 x 1/4 inches") to approximate area for sorting. */
function parseDimensionsArea(dimensions: string): number {
  if (!dimensions || !dimensions.trim()) return 600
  const numbers = dimensions.match(/\d+(?:\s*\.\s*\d+)?|\d+\s*\/\s*\d+/g)
  if (!numbers || numbers.length < 2) return 600
  const w = parseFloat(numbers[0].replace(/\s*\/\s*/, '.')) || 0
  const h = parseFloat(numbers[1].replace(/\s*\/\s*/, '.')) || 0
  return w * h
}

/** Sort images small → medium → large by parsed dimensions area. */
function sortImagesBySize(images: GalleryImage[]): GalleryImage[] {
  return [...images].sort((a, b) => parseDimensionsArea(a.dimensions) - parseDimensionsArea(b.dimensions))
}

export default function Gallery({ body, showHeading = true }: { body: BodyOfWork; showHeading?: boolean }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [failedToLoad, setFailedToLoad] = useState<Set<number>>(new Set())
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [tileCaptionIndex, setTileCaptionIndex] = useState<number | null>(null)
  const [lightboxCaptionVisible, setLightboxCaptionVisible] = useState(false)
  const images = useMemo(() => sortImagesBySize(body.images), [body.images])
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
    else if (Math.abs(delta) < SWIPE_THRESHOLD) setLightboxCaptionVisible((v) => !v)
  }

  return (
    <section className={styles.section}>
      {showHeading && (
        <>
          <h2 className={styles.heading}>{body.title}</h2>
          {body.description && <p className={styles.description}>{body.description}</p>}
        </>
      )}
      {imageUrls.length > 0 && (
        <div className={styles.grid}>
          {images.map((img, i) => {
            const src = imageUrls[i]
            const showTileCaption = tileCaptionIndex === i
            return (
              <div key={src} className={styles.tile}>
                {failedToLoad.has(i) ? (
                  <a href={src} target="_blank" rel="noopener noreferrer" className={styles.tileFallback}>
                    <span>Open / download</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    className={styles.tileButton}
                    onClick={() => {
                      if (showTileCaption) {
                        setTileCaptionIndex(null)
                        setLightboxCaptionVisible(false)
                        setLightboxIndex(i)
                      } else {
                        setTileCaptionIndex(i)
                      }
                    }}
                  >
                    <img src={src} alt="" loading="lazy" onError={() => handleImageError(i)} />
                    <div className={`${styles.tileCaption} ${showTileCaption ? styles.tileCaptionVisible : ''}`}>
                      <span className={styles.tileCaptionName}>{img.name}</span>
                      <span className={styles.tileCaptionMeta}>
                        {[img.materials, img.dimensions].filter(Boolean).join(' · ')}
                      </span>
                    </div>
                  </button>
                )}
              </div>
            )
          })}
        </div>
      )}
      {lightboxIndex !== null && !failedToLoad.has(lightboxIndex) && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setLightboxCaptionVisible(true)}
          onMouseLeave={() => setLightboxCaptionVisible(false)}
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
            <img
              src={imageUrls[lightboxIndex]}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className={styles.lightboxImage}
            />
            <div
              className={`${styles.lightboxCaption} ${lightboxCaptionVisible ? styles.lightboxCaptionVisible : ''}`}
              onClick={(e) => e.stopPropagation()}
              aria-hidden
            >
              <span className={styles.lightboxCaptionName}>{images[lightboxIndex].name}</span>
              <span className={styles.lightboxCaptionMeta}>
                {[images[lightboxIndex].materials, images[lightboxIndex].dimensions].filter(Boolean).join(' · ')}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
