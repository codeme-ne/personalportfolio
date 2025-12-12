import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => <h1 className="text-section mb-6">{children}</h1>,
  h2: ({ children }) => <h2 className="text-subheading mt-8 mb-4">{children}</h2>,
  h3: ({ children }) => <h3 className="text-lg font-semibold mt-6 mb-3">{children}</h3>,
  p: ({ children }) => <p className="text-body text-gray-700 mb-4">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
  li: ({ children }) => <li className="text-body text-gray-700">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
      {children}
    </blockquote>
  ),
}
