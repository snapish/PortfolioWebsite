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
          A quick summary for recruiters and hiring managers. For full experience,
          projects, and technical depth, use the links below.
        </p>
      </div>
      <div className="resume-panel">
        <ul>
          {RESUME_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="resume-actions">
          <a className="link-chip" href="/resume.pdf" target="_blank" rel="noreferrer">
            <span aria-hidden="true">[]</span>
            Download Resume
          </a>
          <a className="link-chip" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <span aria-hidden="true">in</span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
