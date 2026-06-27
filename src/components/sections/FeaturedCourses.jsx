import { useMemo, useState } from 'react'
import { featuredCourses } from '../../data/courses'
import { getCourseTitle } from '../../utils/courseHelpers'
import { ANCHORS } from '../../utils/links'
import Button from '../ui/Button'
import CourseCard from '../ui/CourseCard'
import SearchInput from '../ui/SearchInput'
import SectionHeader from '../ui/SectionHeader'

// Cursos destacados — grid 3 en desktop, scroll horizontal en móvil
export default function FeaturedCourses() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return featuredCourses
    return featuredCourses.filter((course) =>
      getCourseTitle(course).toLowerCase().includes(q),
    )
  }, [query])

  return (
    <section id="cursos" className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="left"
          title="Cursos destacados COMEFYR"
          subtitle="Programas de formación con respaldo académico COMEFYR."
        >
          <SearchInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar curso..."
            ariaLabel="Buscar curso destacado"
            size="sm"
            variant="soft"
            className="w-full sm:max-w-xs"
          />
        </SectionHeader>

        <div className="scrollbar-hide -mx-4 flex gap-5 overflow-x-auto px-4 pb-2 scroll-snap-x lg:hidden">
          {filtered.map((course) => (
            <div key={course.id} className="w-[80vw] max-w-sm shrink-0 scroll-snap-item">
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-comefyr-muted">No se encontraron cursos.</p>
        )}

        <div className="mt-10 text-center">
          <Button href={ANCHORS.todosCursos} variant="secondary" size="lg">
            Ver todos los cursos
          </Button>
        </div>
      </div>
    </section>
  )
}
