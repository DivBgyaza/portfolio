export function Header({ sections }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Bello Bashir Gyaza, home">
        BBG<span aria-hidden="true">.</span>
      </a>
      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {sections.map(({ id, label }) => (
            <li key={id}><a href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
