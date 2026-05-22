import { CONTACT_LINKS } from '../data/contact'

export default function ContactSection() {
  return (
    <section className="content-island contact-cta" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something useful</h2>
        <p>
          I am open to full-time roles, contract work, and technical
          collaborations. If you are building something and need an
          engineer who can make sh*t happen, I would love to connect.
        </p>
      </div>
      <div className="contact-links" aria-label="Contact links">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.label}
            className="link-chip"
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            {link.icon && <span aria-hidden="true">{link.icon}</span>}
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
