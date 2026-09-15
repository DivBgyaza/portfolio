export function Footer({ content, sections }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <a className="site-footer__brand" href="#home" aria-label="Bello Bashir Gyaza, back to home">BELLO<span aria-hidden="true">.</span></a>
          <p className="site-footer__name">{content.name}</p>
          <p>{content.title}</p>
          <p>{content.founder}</p>
          <p className="site-footer__motto">{content.motto}</p>
        </div>

        <nav className="site-footer__navigation" aria-label="Footer navigation">
          <p className="site-footer__label">Explore</p>
          <ul>
            {sections.map(({ id, label }) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
          </ul>
        </nav>

        <div className="site-footer__connect">
          <p className="site-footer__label">Connect</p>
          <ul>
            {content.links.map((link) => (
              <li key={link.label}>
                <a href={link.url} {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-footer__base">
        <p>© {currentYear} {content.name}</p>
        <p>{content.credit}</p>
      </div>
    </footer>
  )
}
