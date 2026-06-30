import Button from '../ui/Button'
import { heroContent } from '../../data/siteContent'
import { siteConfig } from '../../data/siteConfig'
import { ANCHORS } from '../../utils/links'

// Hero institucional — portada médica con tipografía editorial
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white bg-hero-pattern section-padding pt-10 sm:pt-14"
    >
      <div className="pointer-events-none absolute -left-24 top-32 hidden h-72 w-72 rounded-full bg-comefyr-ice/80 blur-3xl lg:block" />
      <div className="pointer-events-none absolute -right-32 top-16 hidden h-[480px] w-[480px] rounded-full bg-comefyr-blue/[0.04] blur-3xl lg:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-comefyr-blue/15 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-comefyr-blue shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-comefyr-gold" aria-hidden="true" />
            {heroContent.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight text-comefyr-blue sm:text-5xl lg:text-[3.15rem]">
            {heroContent.title}
          </h1>

          <div className="mt-5 h-1 w-14 rounded-full bg-comefyr-gold" aria-hidden="true" />

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-comefyr-muted">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={ANCHORS.cursos} size="lg">
              {heroContent.primaryCta}
            </Button>
            <Button href={ANCHORS.avales} variant="secondary" size="lg">
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-comefyr-ice to-comefyr-soft sm:-inset-4" />

          <div className="relative overflow-hidden rounded-3xl border border-white/80 shadow-institutional">
            <img
              src={siteConfig.heroImage}
              alt="Profesional de la salud en contexto de atención médica"
              className="aspect-[4/3] w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-comefyr-blue/25 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="absolute -bottom-4 -left-2 max-w-[220px] rounded-2xl border border-comefyr-gold/40 bg-white/95 px-5 py-4 shadow-card backdrop-blur-sm sm:-left-4">
            <p className="font-display text-base font-bold leading-snug text-comefyr-blue">
              {heroContent.badgeTitle}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-comefyr-muted">
              {heroContent.badgeSubtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
