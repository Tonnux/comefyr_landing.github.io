import { ChevronRight, Monitor } from 'lucide-react'
import { topicIcons } from '../../utils/icons'
import { getWhatsAppCourseUrl } from '../../utils/whatsapp'
import Button from './Button'

// Card de temática — acordeón integrado con cursos relacionados
export default function TopicCard({ topic, isExpanded, onToggle }) {
  const Icon = topicIcons[topic.icon] || topicIcons.brain

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-card-lg border bg-white shadow-card transition-all duration-300 hover:shadow-lg ${
        isExpanded
          ? 'border-comefyr-olive ring-2 ring-comefyr-olive/30'
          : 'border-gray-100 hover:border-comefyr-olive hover:-translate-y-1'
      }`}
    >
      <button
        type="button"
        onClick={() => onToggle(topic)}
        aria-expanded={isExpanded}
        aria-controls={`topic-courses-${topic.id}`}
        className="flex w-full flex-col text-left"
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
            {isExpanded ? 'Ocultar cursos' : 'Explorar'}
          </span>
          <ChevronRight
            className={`h-4 w-4 text-comefyr-muted transition-transform duration-300 group-hover:text-comefyr-olive ${
              isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
            }`}
            aria-hidden="true"
          />
        </div>
      </button>

      <div
        id={`topic-courses-${topic.id}`}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isExpanded}
      >
        <div className="border-t border-comefyr-olive/15 bg-comefyr-ice/50 px-4 py-4 sm:px-5 sm:py-5">
          <ul className="space-y-3">
            {topic.courses.map((course) => (
              <li
                key={course.id}
                className="rounded-xl border border-gray-100/80 bg-comefyr-soft p-4"
              >
                <h4 className="text-sm font-bold text-comefyr-blue">{course.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-comefyr-muted">
                  {course.description}
                </p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-comefyr-green">
                  <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
                  {course.modality}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button href={course.detail_url} size="sm">
                    Ver curso
                  </Button>
                  <Button
                    href={getWhatsAppCourseUrl(course.title)}
                    variant="secondary"
                    size="sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preguntar sobre este curso
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
