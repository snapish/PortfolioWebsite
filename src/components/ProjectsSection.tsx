import { projects } from '../data'

export default function ProjectsSection() {
  return (
    <section className="content-island" id="projects">
      <div>
        <p className="eyebrow">Projects</p>
        <h2>Six featured builds</h2>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-card"
            style={{ '--index': index } as React.CSSProperties}
          >
            <p className="period">{project.timeline}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
