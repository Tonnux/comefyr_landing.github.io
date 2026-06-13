import { topics } from '../../data/topics'
import SectionHeader from '../ui/SectionHeader'
import TopicCard from '../ui/TopicCard'

// Temáticas académicas estilo EDteam — fondo gris clínico
export default function TopicsSection() {
  return (
    <section id="tematicas" className="bg-comefyr-soft section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Temáticas académicas COMEFYR"
          subtitle="Encuentra cursos organizados por área de formación médica."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  )
}
