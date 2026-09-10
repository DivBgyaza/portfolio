import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { heroContent, portfolioSections } from './data/portfolio.js'
import { Hero } from './sections/Hero.jsx'
import { SectionPlaceholder } from './sections/SectionPlaceholder.jsx'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header sections={portfolioSections} />
      <main id="main-content">
        <Hero content={heroContent} />
        {portfolioSections.slice(1).map((section) => (
          <SectionPlaceholder key={section.id} section={section} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
