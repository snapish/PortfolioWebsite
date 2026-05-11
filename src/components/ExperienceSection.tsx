import { experiences } from '../data'

export default function ExperienceSection() {
  return (
    <section className="content-island" id="experience">
      <div>
        <p className="eyebrow">Work Experience</p>
        <h2>Building polished product experiences</h2>
      </div>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article
            key={experience.title}
            className="experience-card"
            style={{ '--index': index } as React.CSSProperties}
          >
            <p className="period">{experience.period}</p>
            <h3>{experience.title}</h3>
            <p className="company">{experience.company}</p>
            <p>{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
