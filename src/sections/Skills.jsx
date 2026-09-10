export function Skills({ content }) {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-heading">
      <div className="skills-heading reveal">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="skills-heading">{content.heading}</h2>
        </div>
        <p>{content.introduction}</p>
      </div>

      <div className="skills-grid">
        {content.categories.map((category, index) => (
          <article className="skill-category reveal" key={category.title}>
            <div className="skill-category__heading">
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="skills-process reveal">
        <p>How I work</p>
        <ol aria-label="Delivery process">
          {content.process.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </div>
    </section>
  )
}
