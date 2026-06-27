import { aboutIcons } from '../../utils/icons'
import { aboutContent } from '../../data/about'

// Acerca de — layout 2 columnas institucional
export default function AboutSection() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-comefyr-blue sm:text-4xl">
              {aboutContent.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-comefyr-muted">
              {aboutContent.description}
            </p>
            <p className="mt-6 border-l-4 border-comefyr-olive pl-4 text-lg font-semibold italic text-comefyr-green">
              {aboutContent.motto}
            </p>
          </div>

          <div className="space-y-4">
            {aboutContent.pillars.map((pillar) => {
              const Icon = aboutIcons[pillar.icon] || aboutIcons['book-open']
              return (
                <div
                  key={pillar.id}
                  className="flex items-start gap-4 rounded-card-lg border border-gray-100 bg-comefyr-ice/50 p-5 shadow-card transition-all hover:border-comefyr-olive/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
                    <Icon className="h-6 w-6 text-comefyr-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-comefyr-blue">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-comefyr-muted">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
