import { useState } from 'react'
import type { Project } from '../types'
import { projects } from '../data'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'] as const

function ProjectCard({
  project,
  index,
  isActive,
  onClick,
}: {
  project: Project
  index: number
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      className={`stage-card${isActive ? ' active' : ''}`}
      type="button"
      onClick={onClick}
      aria-label={`View ${project.title}`}
      style={{ '--index': index } as React.CSSProperties}
    >
      <span className="card-numeral">{ROMAN[index]}</span>
      <span className="card-title">{project.title}</span>
    </button>
  )
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="stage-detail">
      <div className="detail-header">
        <h2>{project.title}</h2>
      </div>
      <div className="detail-body">
        <p>{project.description}</p>
        <div className="detail-meta">
          <span>{project.role}</span>
          <span>{project.timeline}</span>
        </div>
        <div className="detail-stack">
          {project.stack.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectShowcase() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)

  const activeProject = projects.find((p) => p.id === activeProjectId) ?? null

  const handleCardClick = (projectId: string) => {
    setActiveProjectId(activeProjectId === projectId ? null : projectId)
  }

  return (
    <>
      <section className="spotlight-stage">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isActive={activeProjectId === project.id}
            onClick={() => handleCardClick(project.id)}
          />
        ))}
      </section>

      {activeProject && <ProjectDetail project={activeProject} />}
    </>
  )
}
