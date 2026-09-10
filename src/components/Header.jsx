import { useEffect, useRef, useState } from 'react'

export function Header({ sections }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
      const marker = window.scrollY + window.innerHeight * 0.32
      const current = sections.reduce((active, section) => {
        const element = document.getElementById(section.id)
        return element && element.offsetTop <= marker ? section.id : active
      }, 'home')
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [sections])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target) && !menuButtonRef.current?.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label="Bello Bashir Gyaza, home" onClick={closeMenu}>
        BELLO<span aria-hidden="true">.</span>
      </a>
      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav ref={menuRef} id="primary-navigation" className={`primary-navigation ${isMenuOpen ? 'primary-navigation--open' : ''}`} aria-label="Primary navigation">
        <ul className="nav-list">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a className={activeSection === id ? 'active' : ''} href={`#${id}`} aria-current={activeSection === id ? 'page' : undefined} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
