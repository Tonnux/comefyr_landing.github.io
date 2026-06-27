import { ChevronRight, Monitor } from 'lucide-react'
import { topicIcons } from '../../utils/icons'
import { getWhatsAppCourseUrl } from '../../utils/whatsapp'
import Button from './Button'

// Card de temática — acordeón integrado con cursos relacionados
export default function TopicCard({ topic, isExpanded, onToggle }) {
  const Icon = topicIcons[topic.icon] || topicIcons.brain

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-card-lg border bg-white shadow-card transition-all duration-250 ${
        isExpanded
          ? 'border-comefyr-olive/40 shadow-card-hover ring-1 ring-comefyr-olive/20'
          : 'border-gray-100/90 hover:border-comefyr-olive/30 hover:shadow-card-hover'
      }`}
    >
      <button
        type="button"
        onClick={() => onToggle(topic)}
        aria-expanded={isExpanded}
        aria-controls={`topic-courses-${topic.id}`}
        className="flex w-full flex-col text-left"
      >
        <div
          className={`flex flex-1 flex-col border-l-4 p-6 transition-colors duration-250 ${
            isExpanded ? 'border-l-comefyr-olive bg-comefyr-ice/20' : 'border-l-transparent'
          }`}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-comefyr-ice transition-colors duration-250 group-hover:bg-white">
            <Icon className="h-6 w-6 text-comefyr-blue" aria-hidden="true" />
          </div>

          <h3 className="font-display text-lg font-bold text-comefyr-blue">{topic.title}</h3>
          <p className="mt-2 text-sm text-comefyr-muted">
            {topic.courseCount} {topic.countLabel}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-comefyr-blue/5 bg-comefyr-ice/50 px-6 py-3 transition-colors duration-250 group-hover:bg-comefyr-ice/80">
          <span className="text-xs font-semibold uppercase tracking-wide text-comefyr-green">
            {isExpanded ? 'Ocultar cursos' : 'Explorar'}
          </span>
          <ChevronRight
            className={`h-4 w-4 text-comefyr-muted transition-transform duration-250 group-hover:text-comefyr-olive ${
              isExpanded ? 'rotate-90' : 'group-hover:translate-x-0.5'
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
        <div className="border-t border-comefyr-olive/15 bg-comefyr-ice/40 px-4 py-4 sm:px-5 sm:py-5">
          <ul className="space-y-3">
            {topic.courses.map((course) => (
              <li
                key={course.id}
                className="rounded-xl border border-white/80 bg-white p-4 shadow-sm transition-shadow duration-250 hover:shadow-md"
              >
                <h4 className="text-sm font-bold text-comefyr-blue">{course.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-comefyr-muted">
                  {course.description}
                </p>
                <p className="chip-institutional mt-2.5">
                  <Monitor className="mr-1 h-3 w-3" aria-hidden="true" />
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
