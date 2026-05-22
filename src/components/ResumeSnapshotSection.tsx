import { RESUME_REQUEST_LINKS } from '../data/contact'

const RESUME_POINTS = [
  'Full-stack and automation experience across web apps, tooling, and game-adjacent projects.',
  'Comfortable shipping from prototype to production with TypeScript, Python, and modern front-end tooling.',
  'Track record of balancing quality, speed, and maintainability when deadlines are tight.',
]

export default function ResumeSnapshotSection() {
  return (
    <section className="content-island" id="resume">
      <div>
        <p className="eyebrow">Resume</p>
        <h2>Resume snapshot</h2>
        <p>
          A quick summary for recruiters and hiring managers. If you want a full
          copy of my resume, request it directly through email or LinkedIn.
        </p>
      </div>
      <div className="resume-panel">
        <ul>
          {RESUME_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="resume-actions">
          {RESUME_REQUEST_LINKS.map((link) => (
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
      </div>
    </section>
  )
}
