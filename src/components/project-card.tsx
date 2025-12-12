import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/content/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-subheading mb-2">{project.title}</h3>

      <p className="text-body text-gray-600 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-200 text-gray-700 text-caption rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-caption text-blue-600 hover:text-blue-700"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-caption text-gray-600 hover:text-gray-700"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        )}
        <Link
          href={`/projekte/${project.slug}`}
          className="ml-auto text-caption text-blue-600 hover:text-blue-700 font-medium"
        >
          Mehr erfahren →
        </Link>
      </div>
    </article>
  )
}
