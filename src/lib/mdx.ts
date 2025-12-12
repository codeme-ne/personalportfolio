import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PROJECTS_PATH = path.join(process.cwd(), 'src/content/projects')

export interface ProjectFrontmatter {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  problem: string
  solution: string
  result: string
  improvements?: string
  sourceUrl?: string
}

export interface ProjectContent {
  slug: string
  frontmatter: ProjectFrontmatter
  content: string
}

export async function getProjectContent(slug: string): Promise<ProjectContent | null> {
  try {
    const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(source)

    return {
      slug,
      frontmatter: data as ProjectFrontmatter,
      content,
    }
  } catch {
    return null
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    const files = fs.readdirSync(PROJECTS_PATH)
    return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace('.mdx', ''))
  } catch {
    return []
  }
}
