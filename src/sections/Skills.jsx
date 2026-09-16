import { ScrollReveal } from '../components/ScrollReveal.jsx'

export function Skills({ content }) {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-heading">
      <ScrollReveal className="skills-heading">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="skills-heading">{content.heading}</h2>
        </div>
        <p>{content.introduction}</p>
      </ScrollReveal>

      <div className="skills-grid">
        {content.categories.map((category, index) => (
          <ScrollReveal as="article" className="skill-category" key={category.title} delay={(index % 3) * 70}>
            <div className="skill-category__heading">
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="skills-process" delay={100}>
        <p>How I work</p>
        <ol aria-label="Delivery process">
          {content.process.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </ScrollReveal>
    </section>
  )
}
