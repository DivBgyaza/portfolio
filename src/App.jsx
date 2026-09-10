import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { portfolioSections } from './data/portfolio.js'
import { SectionPlaceholder } from './sections/SectionPlaceholder.jsx'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header sections={portfolioSections} />
      <main id="main-content">
        {portfolioSections.map((section, index) => (
          <SectionPlaceholder key={section.id} section={section} isHero={index === 0} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
