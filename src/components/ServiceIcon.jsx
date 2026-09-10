const paths = {
  code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
  design: <><path d="M12 3a9 9 0 1 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h3a6 6 0 0 0 0-12Z" /><path d="M7.5 10h.01M9 6.5h.01M13.5 6h.01M17 9h.01" /></>,
  motion: <><path d="M5 3h14v18H5z" /><path d="m10 9 5 3-5 3Z" /></>,
  support: <><path d="M4 5h16v11H4z" /><path d="M8 20h8M12 16v4" /><path d="m9.5 10 1.5 1.5 3.5-3.5" /></>,
  security: <><path d="M12 3 5 6v5c0 4.6 2.9 8 7 10 4.1-2 7-5.4 7-10V6Z" /><path d="m9 12 2 2 4-4" /></>,
  solutions: <><path d="M9 18h6M10 22h4" /><path d="M8.2 14.5A7 7 0 1 1 15.8 14.5C14.7 15.3 14 16 14 18h-4c0-2-.7-2.7-1.8-3.5Z" /></>,
}

export function ServiceIcon({ name }) {
  return (
    <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  )
}
