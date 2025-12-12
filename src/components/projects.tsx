import { getFeaturedProjects } from '@/content/projects'
import { ProjectCard } from './project-card'

export function Projects() {
  const projects = getFeaturedProjects()

  return (
    <section id="projekte" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-section text-center mb-4">Projekte</h2>
        <p className="text-body text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Eine Auswahl meiner KI- und Automatisierungsprojekte.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
