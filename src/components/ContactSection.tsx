const CONTACT_LINKS = [
  { label: 'Email Me', href: 'mailto:hello@example.com', icon: '@' },
  { label: 'GitHub', href: 'https://github.com', icon: '</>' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'in' },
]

export default function ContactSection() {
  return (
    <section className="content-island contact-cta" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something useful</h2>
        <p>
          I am open to full-time roles, contract work, and technical
          collaborations. If you are building something meaningful and need an
          engineer who can execute, I would love to connect.
        </p>
      </div>
      <div className="contact-links" aria-label="Contact links">
        {CONTACT_LINKS.map((link) => (
          <a key={link.label} className="link-chip" href={link.href} target="_blank" rel="noreferrer">
            <span aria-hidden="true">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
