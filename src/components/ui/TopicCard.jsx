import { ArrowRight } from 'lucide-react'
import { topicIcons } from '../../utils/icons'

// Card de temática estilo EDteam — franja inferior suave
export default function TopicCard({ topic }) {
  const Icon = topicIcons[topic.icon] || topicIcons.brain

  return (
    <a
      href={topic.href}
      className="group flex h-full flex-col overflow-hidden rounded-card-lg border border-gray-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-comefyr-olive hover:shadow-lg"
    >
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-comefyr-ice transition-colors group-hover:bg-white">
          <Icon className="h-7 w-7 text-comefyr-blue" aria-hidden="true" />
        </div>

        <h3 className="text-lg font-bold text-comefyr-blue">{topic.title}</h3>
        <p className="mt-2 text-sm text-comefyr-muted">
          {topic.courseCount} {topic.countLabel}
        </p>
      </div>

      <div className="flex items-center justify-between bg-comefyr-ice/70 px-6 py-3 transition-colors group-hover:bg-comefyr-ice">
        <span className="text-xs font-semibold uppercase tracking-wide text-comefyr-green">
          Explorar
        </span>
        <ArrowRight
          className="h-4 w-4 text-comefyr-muted transition-transform group-hover:translate-x-1 group-hover:text-comefyr-olive"
          aria-hidden="true"
        />
      </div>
    </a>
  )
}
