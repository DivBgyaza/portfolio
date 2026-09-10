export function SectionPlaceholder({ section, isHero = false }) {
  const Tag = isHero ? 'h1' : 'h2'

  return (
    <section className={`section ${isHero ? 'hero' : ''}`} id={section.id}>
      <div className="section-content">
        <p className="eyebrow">{section.label}</p>
        <Tag>{section.heading}</Tag>
        {section.role && <p className="role">{section.role}</p>}
        <p className="section-copy">{section.copy}</p>
      </div>
    </section>
  )
}
