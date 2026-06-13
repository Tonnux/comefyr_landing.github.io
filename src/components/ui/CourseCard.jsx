import { Award, Calendar, Monitor } from 'lucide-react'
import {
  getCourseDate,
  getCourseDetailUrl,
  getCourseEndorsementLabel,
  getCourseImage,
  getCourseTitle,
  hasCourseEndorsement,
} from '../../utils/courseHelpers'
import Button from './Button'

// Card de curso — variant: default | compact
export default function CourseCard({ course, variant = 'default' }) {
  const isCompact = variant === 'compact'
  const title = getCourseTitle(course)
  const image = getCourseImage(course)
  const date = getCourseDate(course)
  const endorsed = hasCourseEndorsement(course)

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-card-lg border border-gray-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-comefyr-gold/40 hover:shadow-lg ${
        isCompact ? 'min-w-[260px] sm:min-w-0' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${isCompact ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {endorsed && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-comefyr-gold px-3 py-1 text-xs font-semibold text-white shadow-sm">
            <Award className="h-3.5 w-3.5" aria-hidden="true" />
            {getCourseEndorsementLabel(course)}
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${isCompact ? 'p-4' : 'p-5'}`}>
        <h3 className={`font-bold text-comefyr-blue ${isCompact ? 'text-base' : 'text-lg'}`}>
          {title}
        </h3>

        <div className="mt-2 flex flex-wrap gap-3 text-sm text-comefyr-muted">
          <span className="inline-flex items-center gap-1">
            <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
            {course.modality}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {date}
          </span>
        </div>

        <div className="mt-auto pt-4">
          <Button href={getCourseDetailUrl(course)} size="sm" className="w-full">
            Ver detalles
          </Button>
        </div>
      </div>
    </article>
  )
}
