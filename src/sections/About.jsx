export function About({ content }) {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-layout">
        <div className="about-intro reveal">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="about-heading">{content.heading}</h2>
          <p className="about-location">
            <span aria-hidden="true">●</span>
            {content.location}
          </p>
        </div>
        <div className="about-details reveal">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="about-brand">
            <div>
              <span>Founder of BelNavo Tech</span>
              <strong>Design. Develop. Deliver.</strong>
            </div>
            <a href="https://belnavo-tech.onrender.com" target="_blank" rel="noreferrer">Explore BelNavo Tech <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <ul className="value-list" aria-label="Core values">
        {content.values.map((value, index) => (
          <li key={value.title} className="value-item reveal">
            <span className="value-number" aria-hidden="true">0{index + 1}</span>
            <div><h3>{value.title}</h3><p>{value.description}</p></div>
          </li>
        ))}
      </ul>
    </section>
  )
}
