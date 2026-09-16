import { ScrollReveal } from '../components/ScrollReveal.jsx'

export function Experience({ content }) {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-heading">
      <ScrollReveal className="experience-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="experience-heading">{content.heading}</h2>
        <p>{content.introduction}</p>
      </ScrollReveal>

      <div className="experience-timeline">
        {content.entries.map((entry, index) => (
          <ScrollReveal as="article" className="experience-entry" key={entry.organization} delay={(index % 4) * 120}>
            <div className="experience-entry__meta">
              <p className="experience-entry__dates">
                <time dateTime={entry.startDate}>{entry.dates.split(' — ')[0]}</time> — Present
              </p>
              {entry.current && <span className="experience-entry__current">Current role</span>}
            </div>
            <div className="experience-entry__body">
              <h3>{entry.organization}</h3>
              <p className="experience-entry__role">{entry.role}</p>
              <p className="experience-entry__description">{entry.description}</p>
              <h4>Key responsibilities</h4>
              <ul>
                {entry.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
              </ul>
              {entry.url && (
                <a className="experience-entry__link" href={entry.url} target="_blank" rel="noopener noreferrer" aria-label={`${entry.linkLabel ?? `Visit ${entry.organization}`} (opens in a new tab)`}>
                  {entry.linkLabel ?? `Visit ${entry.organization}`} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
