interface TimelineItem {
  year: string
  role: string
}

interface TimelineProps {
  items: readonly TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-200" />

      <ul className="space-y-6">
        {items.map((item, index) => (
          <li key={index} className="relative pl-8">
            {/* Dot */}
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-blue-500 border-2 border-white shadow-sm" />

            {/* Content */}
            <div>
              <span className="text-caption text-gray-400 font-medium">
                {item.year}
              </span>
              <p className="text-body text-gray-700">{item.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
