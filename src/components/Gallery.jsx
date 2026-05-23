import { useEffect, useRef, useState } from 'react'

const photos = [
  { src: '/media/commercial-3.jpg', alt: 'Commercial flat-roof project' },
  { src: '/media/roof-1.jpg', alt: 'Residential asphalt shingle roof' },
  { src: '/media/commercial-2.jpg', alt: 'Commercial metal roofing' },
  { src: '/media/siding-2.jpg', alt: 'James Hardie siding install' },
  { src: '/media/siding-4.jpg', alt: 'Exterior siding upgrade' },
  { src: '/media/commercial-5.jpg', alt: 'Large facility re-roof' },
  { src: '/media/commercial-4.jpg', alt: 'Commercial roof detail' },
  { src: '/media/roof-6.jpg', alt: 'Completed residential roof' },
  { src: '/media/gutter-2.jpg', alt: 'Seamless rain gutter installation' },
  { src: '/media/commercial-6.jpg', alt: 'Commercial TPO roof' },
]

const AUTOPLAY_MS = 5000

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const goTo = (i) => setIndex((i + photos.length) % photos.length)
  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(() => goTo(index + 1), AUTOPLAY_MS)
    return () => clearTimeout(timerRef.current)
  }, [index, paused])

  return (
    <section className="section section--soft" id="gallery" aria-labelledby="gal-h">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Project Gallery</span>
          <h2 id="gal-h">Recent work across Utah</h2>
          <p>A look at real residential and commercial projects we've delivered for Utah homeowners and contractors.</p>
        </div>

        <div
          className="slideshow"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Recent project photos"
        >
          <div className="slideshow__stage">
            {photos.map((p, i) => (
              <figure
                key={p.src}
                className={`slideshow__slide${i === index ? ' is-active' : ''}`}
                aria-hidden={i !== index}
              >
                <img src={p.src} alt={p.alt} loading={i === 0 ? 'eager' : 'lazy'} />
                <figcaption className="slideshow__caption">
                  <span className="slideshow__count">{String(i + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</span>
                  <span className="slideshow__label">{p.alt}</span>
                </figcaption>
              </figure>
            ))}

            <button
              type="button"
              className="slideshow__nav slideshow__nav--prev"
              onClick={prev}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              className="slideshow__nav slideshow__nav--next"
              onClick={next}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          <div className="slideshow__dots" role="tablist" aria-label="Slide selector">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`slideshow__dot${i === index ? ' is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
