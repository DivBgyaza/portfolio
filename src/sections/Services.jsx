import { ServiceIcon } from '../components/ServiceIcon.jsx'

export function Services({ content }) {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-heading reveal">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="services-heading">{content.heading}</h2>
        </div>
        <p>{content.introduction}</p>
      </div>
      <div className="service-grid">
        {content.services.map((service, index) => (
          <article className="service-card reveal" key={service.title} tabIndex="0">
            <div className="service-card__top">
              <span className="service-card__icon"><ServiceIcon name={service.icon} /></span>
              <span className="service-card__number" aria-hidden="true">0{index + 1}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
