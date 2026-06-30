import { useMemo, useState } from 'react'
import { courses } from '../../data/courses'
import { sectionEyebrows } from '../../data/siteContent'
import { getCourseTitle } from '../../utils/courseHelpers'
import { centeredLastGridItem } from '../../utils/gridHelpers'
import { useInView } from '../../hooks/useInView'
import Button from '../ui/Button'
import CourseCard from '../ui/CourseCard'
import SearchInput from '../ui/SearchInput'
import SectionHeader from '../ui/SectionHeader'

const INITIAL_COUNT = 6

// Catálogo completo con buscador ancho y cards compactas
export default function AllCourses() {
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState(false)
  const [ref, isInView] = useInView()

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return courses
    return courses.filter((course) =>
      getCourseTitle(course).toLowerCase().includes(q),
    )
  }, [query])

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT)
  const canToggle = filtered.length > INITIAL_COUNT

  return (
    <section id="cursos" className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={sectionEyebrows.courses}
          title="Todos los cursos"
          subtitle="Explora nuestro catálogo completo de formación médica continua."
        />

        <SearchInput
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setExpanded(false)
          }}
          placeholder="Buscar curso por nombre…"
          ariaLabel="Buscar curso por nombre"
          className="mb-10"
        />

        <div
          ref={ref}
          className={`fade-in-section grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${isInView ? 'is-visible' : ''}`}
        >
          {visible.map((course, index) => (
            <div
              key={course.id}
              className={centeredLastGridItem(index, visible.length, { sm: 2, lg: 3 })}
            >
              <CourseCard course={course} variant="compact" />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-comefyr-muted">No se encontraron cursos.</p>
        )}

        {canToggle && (
          <div className="mt-10 text-center">
            <Button size="lg" onClick={() => setExpanded((value) => !value)}>
              {expanded ? 'Ver menos' : 'Ver más cursos'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
