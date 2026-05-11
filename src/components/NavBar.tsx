type NavBarProps = {
  activeSection: string
}

const NAV_LINKS = [
  { href: '#top', label: 'Home', id: 'top' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#projects', label: 'Projects', id: 'projects' },
]

export default function NavBar({ activeSection }: NavBarProps) {
  return (
    <nav className="sticky-nav">
      <div className="nav-inner">
        {NAV_LINKS.map(({ href, label, id }) => (
          <a
            key={id}
            href={href}
            className={`nav-link${activeSection === id ? ' active' : ''}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
