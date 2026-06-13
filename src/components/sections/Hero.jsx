import Button from '../ui/Button'
import { siteConfig } from '../../data/siteConfig'
import { ANCHORS } from '../../utils/links'

// Hero institucional — portada médica con bloque visual
export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white section-padding pt-8 sm:pt-12">
      {/* Bloque decorativo azul hielo */}
      <div className="pointer-events-none absolute -right-32 top-20 hidden h-[500px] w-[500px] rounded-full bg-comefyr-ice/60 blur-3xl lg:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-comefyr-green/20 bg-comefyr-ice px-4 py-1.5 text-sm font-semibold text-comefyr-green">
            <span className="h-1.5 w-1.5 rounded-full bg-comefyr-olive" />
            Formación médica continua
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-comefyr-blue sm:text-5xl lg:text-[3.25rem]">
            <span className="text-comefyr-olive">Formación médica continua</span>
            {' '}con{' '}
            <span className="underline decoration-comefyr-gold decoration-4 underline-offset-4">
              respaldo profesional
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-comefyr-muted">
            Cursos, diplomados, simposios, membresías y avales académicos para
            médicos especialistas, residentes y profesionales de la salud.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={ANCHORS.cursos} size="lg">
              Ver cursos
            </Button>
            <Button href={ANCHORS.avales} variant="secondary" size="lg">
              Solicitar aval
            </Button>
          </div>
        </div>

        {/* Imagen con marco institucional */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-comefyr-ice sm:-inset-4" />
          <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-[0_20px_60px_rgba(0,59,113,0.15)]">
            <img
              src={siteConfig.heroImage}
              alt="Profesionales de la salud en capacitación médica"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-comefyr-gold/30 bg-white px-5 py-3 shadow-lg sm:-left-5">
            <p className="text-2xl font-extrabold text-comefyr-olive">+500</p>
            <p className="text-xs font-medium text-comefyr-muted">médicos capacitados</p>
          </div>
        </div>
      </div>
    </section>
  )
}
