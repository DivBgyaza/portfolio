import { ScrollReveal } from '../components/ScrollReveal.jsx'

export function Projects({ content }) {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-heading">
      <ScrollReveal className="projects-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="projects-heading">{content.heading}</h2>
        <p>{content.introduction}</p>
      </ScrollReveal>

      <div className="projects-grid">
        {content.projects.map((project) => (
          <ScrollReveal as="article" className="project-card" key={project.title} delay={(project.title.length % 3) * 70}>
            <div className="project-card__media">
              <img
                src={project.cover}
                alt={project.coverAlt}
                width={project.coverWidth}
                height={project.coverHeight}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="project-card__body">
              <p className="project-card__category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <ul className="project-card__services" aria-label={`${project.title} services`}>
                {project.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
              <a className="project-card__link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View Live Site: ${project.title} (opens in a new tab)`}>
                View Live Site
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
