import { useState } from 'react'
import { topics } from '../../data/topics'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import TopicCard from '../ui/TopicCard'

const INITIAL_COUNT = 6

// Temáticas académicas — acordeón de cursos dentro de cada card
export default function TopicsSection() {
  const [showAll, setShowAll] = useState(false)
  const [expandedTopicId, setExpandedTopicId] = useState(null)

  const visibleTopics = showAll ? topics : topics.slice(0, INITIAL_COUNT)

  const handleToggleTopic = (topic) => {
    setExpandedTopicId((current) => (current === topic.id ? null : topic.id))
  }

  return (
    <section id="tematicas" className="bg-comefyr-soft section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title="Temáticas académicas COMEFYR"
          subtitle="Encuentra cursos organizados por área de formación médica."
        />

        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTopics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              isExpanded={expandedTopicId === topic.id}
              onToggle={handleToggleTopic}
            />
          ))}
        </div>

        {topics.length > INITIAL_COUNT && (
          <div className="mt-8 text-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                setShowAll((value) => !value)
                if (showAll) setExpandedTopicId(null)
              }}
            >
              {showAll ? 'Ver menos' : 'Ver más temáticas'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
