const OUTCOMES = [
  {
    metric: 'AI Tool Adoption',
    title: 'Department-Wide Impact',
    summary:
      'Demonstrated early capabilities of AI tooling for a manufacturing company, resulting in a massive productivity increase for developers.',
  },
  {
    metric: 'Improved Build Time by 25%',
    title: 'CI/CD Optimization',
    summary:
      'Presented and acted on a plan to optimize Jenkins builds by implementing parallel build jobs, allowing the team to test builds faster.',
  },
  {
    metric: 'Thousands of Monthly Users',
    title: 'Real-World Product Usage',
    summary:
      'Built and deployed a first-of-its-kind web app to support a community of worldwide gamers. Maintained and hosted since 2019.',
  },
]

export default function OutcomesSection() {
  return (
    <section className="content-island" id="outcomes">
      <div>
        <p className="eyebrow">Highlights</p>
        <h2>Featured outcomes</h2>
        <p>
          Selected results from recent work, focused on reliability, delivery
          quality, and products that hold up under real usage.
        </p>
      </div>
      <div className="outcomes-grid">
        {OUTCOMES.map((outcome) => (
          <article key={outcome.title} className="outcome-card">
            <p className="outcome-metric">{outcome.metric}</p>
            <h3>{outcome.title}</h3>
            <p>{outcome.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
