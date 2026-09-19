import { useEffect, useRef } from 'react'

let sharedObserver
const observedElements = new Map()

function revealElement(element) {
  element.classList.add('scroll-reveal--visible')
  element.classList.remove('scroll-reveal--pending')
  sharedObserver?.unobserve(element)
  const timeoutId = observedElements.get(element)
  if (timeoutId) window.clearTimeout(timeoutId)
  observedElements.delete(element)
}

function getSharedObserver() {
  if (sharedObserver || typeof IntersectionObserver === 'undefined') return sharedObserver
  sharedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) window.setTimeout(() => revealElement(entry.target), 24)
    })
  }, { threshold: 0.08, rootMargin: '0px 0px 12% 0px' })
  return sharedObserver
}

export function ScrollReveal({ as = 'div', children, className = '', direction = 'up', delay = 0, distance, ...props }) {
  const elementRef = useRef(null)
  const Component = as

  useEffect(() => {
    const element = elementRef.current
    if (distance) element?.style.setProperty('--reveal-distance', distance)
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const observer = getSharedObserver()
    if (!observer) return undefined
    element.classList.add('scroll-reveal--pending')
    const timeoutId = window.setTimeout(() => {
      if (observedElements.has(element)) revealElement(element)
    }, 9000)
    observedElements.set(element, timeoutId)
    observer.observe(element)
    return () => {
      if (!observedElements.has(element)) return
      observer.unobserve(element)
      window.clearTimeout(observedElements.get(element))
      observedElements.delete(element)
    }
  }, [distance])

  const { style, ...restProps } = props
  return <Component ref={elementRef} className={`scroll-reveal scroll-reveal--${direction} ${className}`.trim()} style={{ '--reveal-delay': `${delay}ms`, ...style }} {...restProps}>{children}</Component>
}
