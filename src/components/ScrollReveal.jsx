import { useEffect, useRef } from 'react'

let sharedObserver
const observedElements = new Set()

function getSharedObserver() {
  if (sharedObserver || typeof IntersectionObserver === 'undefined') return sharedObserver
  sharedObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('scroll-reveal--visible')
      entry.target.classList.remove('scroll-reveal--pending')
      sharedObserver.unobserve(entry.target)
      observedElements.delete(entry.target)
    })
  }, { threshold: 0.1, rootMargin: '0px 0px 12% 0px' })
  return sharedObserver
}

export function ScrollReveal({ as = 'div', children, className = '', direction = 'up', delay = 0, ...props }) {
  const elementRef = useRef(null)
  const Component = as

  useEffect(() => {
    const element = elementRef.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const observer = getSharedObserver()
    if (!observer) return undefined
    element.classList.add('scroll-reveal--pending')
    observedElements.add(element)
    observer.observe(element)
    return () => {
      if (!observedElements.has(element)) return
      observer.unobserve(element)
      observedElements.delete(element)
    }
  }, [])

  return <Component ref={elementRef} className={`scroll-reveal scroll-reveal--${direction} ${className}`.trim()} style={{ '--reveal-delay': `${delay}ms`, ...props.style }} {...props}>{children}</Component>
}
