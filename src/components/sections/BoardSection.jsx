import logo from '../../assets/logos/logo_comefyr_2.png'
import { boardMembers, boardSection } from '../../data/board'
import { ANCHORS } from '../../utils/links'
import Button from '../ui/Button'

// Mesa directiva — fotos circulares, scroll horizontal en móvil
export default function BoardSection() {
  return (
    <section id="mesa-directiva" className="bg-comefyr-ice/50 section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="mx-auto mb-4 h-10 w-auto opacity-80"
          />
          <h2 className="text-3xl font-bold text-comefyr-blue sm:text-4xl">
            {boardSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-comefyr-muted">
            {boardSection.subtitle}
          </p>
        </div>

        {/* Scroll horizontal en móvil, grid en desktop */}
        <div className="scrollbar-hide -mx-4 flex gap-5 overflow-x-auto px-4 pb-4 scroll-snap-x lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
          {boardMembers.map((member) => (
            <article
              key={member.id}
              className="w-[280px] shrink-0 scroll-snap-item rounded-card-lg border border-gray-100 bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-lg lg:w-auto"
            >
              <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-comefyr-ice ring-2 ring-comefyr-gold/30">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-comefyr-blue">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-comefyr-olive">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-comefyr-muted">{member.bio}</p>
              <div className="mt-5">
                <Button href={ANCHORS.contacto} variant="secondary" size="sm">
                  Ver semblanza
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
