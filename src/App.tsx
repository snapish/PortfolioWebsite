import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProjectShowcase from './components/ProjectShowcase'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useScrollAnimations } from './hooks/useScrollAnimations'

export default function App() {
  const activeSection = useScrollSpy('header[id], main > section[id]')

  useScrollAnimations(
    '.spotlight-stage, .stage-card, .experience-card, .project-card, .content-island',
  )

  return (
    <div className="site-shell">
      <NavBar activeSection={activeSection} />
      <Hero />
      <ProjectShowcase />
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <footer className="site-footer">
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}
