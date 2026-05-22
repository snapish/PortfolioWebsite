import { projects } from '../data'
import { getFaviconUrl, isGitHubUrl } from '../utils/linkIcons'
import { toWords } from 'number-to-words'

function getTimelineBounds(timeline: string) {
  const years = timeline.match(/\d{4}/g)?.map(Number) ?? []
  const start = years[0] ?? Number.POSITIVE_INFINITY
  const end = years[1] ?? start

  return { start, end }
}

export default function ProjectsSection() {
  const sortedProjects = [...projects].sort((a, b) => {
    const aBounds = getTimelineBounds(a.timeline)
    const bBounds = getTimelineBounds(b.timeline)

    if (aBounds.start !== bBounds.start) {
      return bBounds.start - aBounds.start
    }

    if (aBounds.end !== bBounds.end) {
      return bBounds.end - aBounds.end
    }

    return a.title.localeCompare(b.title)
  })

  const projectCountWord = toWords(sortedProjects.length)
  const capitalizedProjectCountWord =
    projectCountWord.charAt(0).toUpperCase() + projectCountWord.slice(1)

  const projectsHeading =
    sortedProjects.length === 1
      ? `${capitalizedProjectCountWord} Featured Build`
      : `${capitalizedProjectCountWord} Featured Builds`

  return (
    <section className="content-island" id="projects">
      <div>
        <p className="eyebrow">Projects</p>
        <h2>{projectsHeading}</h2>
      </div>
      <div className="project-grid">
        {sortedProjects.map((project, index) => (
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
