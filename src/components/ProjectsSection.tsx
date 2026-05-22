import { projects } from '../data'
import { getFaviconUrl, isGitHubUrl } from '../utils/linkIcons'

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
            {project.links && project.links.length > 0 && (
              <div className="card-links" aria-label={`${project.title} links`}>
                {project.links.map((link) => {
                  const faviconUrl = getFaviconUrl(link.href)
                  const shouldUseFavicon = !isGitHubUrl(link.href)

                  return (
                    <a
                      key={`${project.id}-${link.label}`}
                      className="link-chip"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {shouldUseFavicon && faviconUrl ? (
                        <span aria-hidden="true">
                          <img src={faviconUrl} alt="" loading="lazy" decoding="async" />
                        </span>
                      ) : (
                        link.icon && <span aria-hidden="true">{link.icon}</span>
                      )}
                      {link.label}
                    </a>
                  )
                })}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
