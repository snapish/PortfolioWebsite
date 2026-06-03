import { experiences } from '../data'
import { getFaviconUrl } from '../utils/linkIcons'

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
            {experience.links && experience.links.length > 0 && (
              <div className="card-links" aria-label={`${experience.company} links`}>
                {experience.links.map((link) => {
                  const faviconUrl = getFaviconUrl(link.href)

                  return (
                    <a
                      key={`${experience.title}-${link.label}`}
                      className="link-chip"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {faviconUrl ? (
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
