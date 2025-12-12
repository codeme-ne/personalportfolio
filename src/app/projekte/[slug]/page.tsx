import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { getProjectContent, getAllProjectSlugs } from '@/lib/mdx'
import { getProjectBySlug } from '@/content/projects'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/mdx-components'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: 'Projekt nicht gefunden' }
  }

  return {
    title: `${project.title} | Lukas Zangerl`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const projectData = getProjectBySlug(slug)
  const content = await getProjectContent(slug)

  if (!projectData || !content) {
    notFound()
  }

  const { frontmatter } = content

  return (
    <main className="min-h-screen bg-[var(--gray-50)]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/#projekte"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--gray-500)] transition-colors hover:text-[var(--gray-700)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Alle Projekte
        </Link>

        <header className="mb-12">
          <h1 className="text-section mb-4">{projectData.title}</h1>
          <p className="text-body-lg mb-6 text-[var(--gray-600)]">{frontmatter.description}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {projectData.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--gray-200)] px-3 py-1 text-xs font-medium text-[var(--gray-700)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {projectData.liveUrl && (
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--blue-600)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--blue-700)]"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {projectData.githubUrl && (
              <a
                href={projectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--gray-300)] bg-white px-4 py-2 text-sm font-medium text-[var(--gray-700)] transition-colors hover:bg-[var(--gray-100)]"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        </header>

        <article className="prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">Problem</h2>
            <p className="text-body text-[var(--gray-600)]">{frontmatter.problem}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">Lösung</h2>
            <p className="text-body text-[var(--gray-600)]">{frontmatter.solution}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">Ergebnis</h2>
            <p className="text-body text-[var(--gray-600)]">{frontmatter.result}</p>
          </section>

          {content.content && (
            <section className="mb-10">
              <MDXRemote source={content.content} components={mdxComponents} />
            </section>
          )}

          {frontmatter.improvements && (
            <section className="mb-10 rounded-lg border border-[var(--gray-200)] bg-[var(--gray-100)] p-6">
              <h2 className="text-subheading mb-4 text-[var(--gray-900)]">
                Was ich verbessern würde
              </h2>
              <p className="text-body text-[var(--gray-600)]">{frontmatter.improvements}</p>
            </section>
          )}

          {frontmatter.sourceUrl && (
            <section className="mt-12 border-t border-[var(--gray-200)] pt-6">
              <p className="text-caption text-[var(--gray-500)]">
                Quelle / Beleg:{' '}
                <a
                  href={frontmatter.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--blue-600)] hover:underline"
                >
                  {frontmatter.sourceUrl}
                </a>
              </p>
            </section>
          )}
        </article>
      </div>
    </main>
  )
}
