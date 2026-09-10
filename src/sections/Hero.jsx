import portrait from '../assets/bello-bashir-gyaza.jpg'

export function Hero({ content }) {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero__decoration hero__decoration--one" aria-hidden="true" />
      <div className="hero__decoration hero__decoration--two" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="hero-heading">{content.heading}</h1>
          <p className="hero__title">{content.title}</p>
          <p className="hero__introduction">{content.introduction}</p>
          <div className="hero__actions" aria-label="Portfolio actions">
            <a className="button button--primary" href="#projects">View My Work</a>
            <a className="button button--secondary" href="#contact">Let’s Work Together</a>
          </div>
          <div className="hero__brand-detail">
            <span>Design. Develop. Deliver.</span>
            <a href="https://belnavo-tech.onrender.com" target="_blank" rel="noreferrer">Visit BelNavo Tech <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="portrait-frame">
            <img src={portrait} alt="Bello Bashir Gyaza, founder of BelNavo Tech" width="1242" height="2208" fetchPriority="high" />
            <p className="availability"><span aria-hidden="true" />{content.availability}</p>
          </div>
          <ul className="role-list" aria-label="Professional disciplines">
            {content.roles.map((role) => <li key={role}>{role}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
