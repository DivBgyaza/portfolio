import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { aboutContent, contactContent, experienceContent, footerContent, heroContent, portfolioSections, projectsContent, servicesContent, skillsContent } from './data/portfolio.js'
import { About } from './sections/About.jsx'
import { Contact } from './sections/Contact.jsx'
import { Experience } from './sections/Experience.jsx'
import { Hero } from './sections/Hero.jsx'
import { Projects } from './sections/Projects.jsx'
import { Services } from './sections/Services.jsx'
import { Skills } from './sections/Skills.jsx'

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
        <Projects content={projectsContent} />
        <Experience content={experienceContent} />
        <Contact content={contactContent} />
      </main>
      <Footer content={footerContent} sections={portfolioSections} />
    </div>
  )
}
