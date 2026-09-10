import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { aboutContent, heroContent, portfolioSections, servicesContent, skillsContent } from './data/portfolio.js'
import { About } from './sections/About.jsx'
import { Hero } from './sections/Hero.jsx'
import { Services } from './sections/Services.jsx'
import { Skills } from './sections/Skills.jsx'
import { SectionPlaceholder } from './sections/SectionPlaceholder.jsx'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header sections={portfolioSections} />
      <main id="main-content">
        <Hero content={heroContent} />
        <About content={aboutContent} />
        <Services content={servicesContent} />
        <Skills content={skillsContent} />
        {portfolioSections.slice(4).map((section) => (
          <SectionPlaceholder key={section.id} section={section} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
