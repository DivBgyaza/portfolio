import { useEffect, useRef, useState } from 'react'

export function Recognition({ content }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const slideshowRef = useRef(null)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener?.('change', update)
    return () => query.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return undefined
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % content.slides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [content.slides.length, paused, reducedMotion])

  const goTo = (index) => setActiveIndex((index + content.slides.length) % content.slides.length)

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(activeIndex - 1) }
    if (event.key === 'ArrowRight') { event.preventDefault(); goTo(activeIndex + 1) }
    if (event.key === 'Home') { event.preventDefault(); goTo(0) }
    if (event.key === 'End') { event.preventDefault(); goTo(content.slides.length - 1) }
  }

  const slide = content.slides[activeIndex]
  return (
    <section className="recognition-section" id="recognition" aria-labelledby="recognition-heading">
      <div className="recognition-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="recognition-heading">{content.heading}</h2>
        <p>{content.description}</p>
      </div>
      <div
        className="recognition-slideshow"
        ref={slideshowRef}
        tabIndex="0"
        aria-label="Cyber Security Essentials recognition images"
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }}
      >
        <div className="recognition-slide" aria-live="polite">
          <img src={slide.src} alt={slide.alt} />
          <span className="recognition-slide__label">Recognition image {activeIndex + 1} of {content.slides.length}</span>
        </div>
        <div className="recognition-controls">
          <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous recognition image">?</button>
          <div className="recognition-dots" role="tablist" aria-label="Choose recognition image">
            {content.slides.map((item, index) => (
              <button key={item.id} type="button" role="tab" aria-selected={index === activeIndex} aria-label={`Show recognition image ${index + 1}`} onClick={() => goTo(index)} />
            ))}
          </div>
          <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next recognition image">?</button>
        </div>
      </div>
    </section>
  )
}
