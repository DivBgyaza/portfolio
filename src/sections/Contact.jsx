export function Contact({ content }) {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-section__intro">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="contact-heading">{content.heading}</h2>
        <p className="contact-section__lead">{content.introduction}</p>
        <p className="contact-section__support">{content.supportingText}</p>
        <div className="contact-section__details">
          <p><span className="contact-section__status" aria-hidden="true" />{content.availability}</p>
          <p>{content.location}</p>
        </div>
        <div className="contact-section__actions">
          <a className="button button--primary" href={content.primaryCta.url} target="_blank" rel="noopener noreferrer">{content.primaryCta.label}</a>
          <a className="button button--secondary" href={content.secondaryCta.url}>{content.secondaryCta.label}</a>
        </div>
      </div>

      <address className="contact-methods" aria-label="Contact methods">
        {content.methods.map((method) => (
          <a
            className="contact-method"
            href={method.url}
            key={method.name}
            {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <span className="contact-method__name">{method.name}</span>
            <span className="contact-method__label">{method.label}</span>
            <span className="contact-method__value">{method.value}</span>
            <span className="contact-method__arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </address>
    </section>
  )
}
