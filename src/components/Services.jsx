import { ArrowLeft, ArrowLeftRight, ArrowRight, CarFront, CircleDotDashed, Eye, ShieldCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import polarizadoAntes from '../assets/polarizado-antes.webp'
import polarizadoDespues from '../assets/polarizado-despues.webp'
import sacabolllosAntes from '../assets/sacabolllos-antes.webp'
import sacabolllosDespues from '../assets/sacabolllos-despues.webp'
import opticasAntes from '../assets/opticas-antes.webp'
import opticasDespues from '../assets/opticas-despues.webp'
import laminasCertificado from '../assets/laminas-certificado.webp'
import laminasFrente from '../assets/laminas-frente.webp'
import laminasLateral from '../assets/laminas-lateral.webp'

const tintOptions = [
  { name: 'Claro', price: '$85.000', warranty: 'Garantía de 1 año', swatch: 'bg-white text-carbon border-white' },
  { name: 'Intermedio', price: '$105.000', warranty: 'Garantía de 3 años', swatch: 'bg-zinc-500 text-white border-white/30' },
  { name: 'Negro', price: '$125.000', warranty: 'Garantía de 5 años', swatch: 'bg-black text-gold border-gold' },
]

const securitySlides = [
  { image: laminasCertificado, alt: 'Certificado de lámina de seguridad', caption: 'Materiales certificados' },
  { image: laminasFrente, alt: 'Auto con lámina de seguridad instalada', caption: 'Instalación profesional' },
  { image: laminasLateral, alt: 'Vidrios laterales protegidos con lámina de seguridad', caption: 'Protección para tus vidrios' },
]

function BeforeAfter({ before, after, service, focus = '50% 50%' }) {
  const [position, setPosition] = useState(50)

  return <div className="relative mt-5 h-52 select-none overflow-hidden rounded-sm border border-white/15 bg-black sm:h-64" aria-label="Comparativa antes y después">
    <img className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: focus }} src={after} alt={`Después: ${service}`} loading="lazy" />
    <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
      <img className="h-full max-w-none object-cover" style={{ width: `${10000 / position}%`, objectPosition: focus }} src={before} alt={`Antes: ${service}`} loading="lazy" />
    </div>
    <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Antes</span>
    <span className="absolute right-2 top-2 rounded bg-gold px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-carbon">Después</span>
    <div className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-gold" style={{ left: `${position}%` }} />
    <div className="pointer-events-none absolute top-1/2 z-10 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-gold bg-carbon text-gold shadow-lg" style={{ left: `${position}%` }}><ArrowLeftRight size={18} /></div>
    <input aria-label="Deslizar para comparar antes y después" className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0" type="range" min="5" max="95" value={position} onChange={(event) => setPosition(Number(event.target.value))} />
  </div>
}

function TintSelector() {
  const [selected, setSelected] = useState(tintOptions[0])

  return <>
    <div className="mt-4 grid grid-cols-3 gap-2" aria-label="Elegí un tono de polarizado">
      {tintOptions.map((option) => <button
        key={option.name}
        type="button"
        onClick={() => setSelected(option)}
        aria-pressed={selected.name === option.name}
        className={`rounded-sm border px-2 py-2 text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-gold ${option.swatch} ${selected.name === option.name ? 'scale-[1.03] ring-2 ring-gold ring-offset-2 ring-offset-red/10' : 'opacity-70 hover:opacity-100'}`}
      >{option.name}</button>)}
    </div>
    <div className="mt-3 flex items-center justify-between gap-3 rounded-sm border border-gold/40 bg-black/40 px-3 py-2" aria-live="polite">
      <div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold">{selected.warranty}</p><p className="text-xs text-white/70">Polarizado {selected.name.toLowerCase()}</p></div>
      <p className="text-right"><span className="block text-[10px] uppercase tracking-wide text-white/45">Desde</span><strong className="font-display text-2xl tracking-wide text-white">{selected.price}</strong></p>
    </div>
    <p className="mt-2 text-[11px] leading-relaxed text-gold/85">Valores orientativos: el precio final puede variar según el vehículo y la garantía elegida.</p>
  </>
}

function SecurityCarousel() {
  const [active, setActive] = useState(0)
  const previous = () => setActive((current) => (current - 1 + securitySlides.length) % securitySlides.length)
  const next = () => setActive((current) => (current + 1) % securitySlides.length)

  useEffect(() => {
    const timer = window.setInterval(next, 3500)
    return () => window.clearInterval(timer)
  }, [])

  const slide = securitySlides[active]
  return <div className="relative mt-5 h-56 overflow-hidden rounded-sm border border-white/15 bg-black sm:h-64" aria-roledescription="carrusel" aria-label="Trabajos de láminas de seguridad">
    <img key={slide.image} src={slide.image} alt={slide.alt} loading="lazy" className="h-full w-full animate-[fade-in_.45s_ease-out] object-cover" />
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 via-black/35 to-transparent px-3 pb-3 pt-12">
      <p className="text-xs font-bold uppercase tracking-[.13em] text-white">{slide.caption}</p>
      <div className="flex gap-1.5">{securitySlides.map((item, index) => <button key={item.caption} type="button" aria-label={`Ver imagen ${index + 1}`} aria-current={index === active} onClick={() => setActive(index)} className={`h-2 w-2 rounded-full transition ${index === active ? 'w-5 bg-gold' : 'bg-white/55 hover:bg-white'}`} />)}</div>
    </div>
    <button type="button" onClick={previous} aria-label="Imagen anterior" className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/65 text-white transition hover:bg-red"><ArrowLeft size={16} /></button>
    <button type="button" onClick={next} aria-label="Imagen siguiente" className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/65 text-white transition hover:bg-red"><ArrowRight size={16} /></button>
  </div>
}

export default function Services() {
  return <section id="servicios" className="section py-20"><div className="fade-up">
    <p className="eyebrow">Lo hacemos bien</p>
    <h2 className="font-display text-5xl tracking-wide sm:text-6xl">SERVICIOS PARA <span className="text-red">DISFRUTAR MÁS</span> TU AUTO</h2>
    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <article className="group min-h-56 rounded-sm border border-red bg-red/10 p-5 transition hover:-translate-y-1 hover:border-gold sm:col-span-2">
        <CarFront className="text-gold" size={30} /><h3 className="mt-4 font-display text-3xl tracking-wide">Polarizado</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/60">Elegí el tono y la garantía que mejor se adapten a tu auto.</p>
        <TintSelector /><BeforeAfter before={polarizadoAntes} after={polarizadoDespues} service="polarizado" />
      </article>
      <article className="group min-h-56 rounded-sm border border-gold/45 bg-panel p-5 transition hover:-translate-y-1 hover:border-gold sm:col-span-2">
        <ShieldCheck className="text-gold" size={30} /><h3 className="mt-4 font-display text-3xl tracking-wide">Láminas de seguridad</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/60">Protección para los vidrios del auto, con instalación profesional y materiales de primera calidad.</p>
        <SecurityCarousel />
      </article>
      <article className="group min-h-56 rounded-sm border border-red/50 bg-panel p-5 transition hover:-translate-y-1 hover:border-gold sm:col-span-2">
        <CircleDotDashed className="text-gold" size={30} /><h3 className="mt-4 font-display text-3xl tracking-wide">Saca bollos</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/60">Reparación de bollos sin dañar la pintura original del vehículo.</p><BeforeAfter before={sacabolllosDespues} after={sacabolllosAntes} service="saca bollos" />
      </article>
      <article className="group min-h-56 rounded-sm border border-white/10 bg-panel p-5 transition hover:-translate-y-1 hover:border-red sm:col-span-2">
        <Eye className="text-gold" size={30} /><h3 className="mt-4 font-display text-3xl tracking-wide">Oscurecido de ópticas</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/60">Oscurecemos las ópticas para darle una terminación más deportiva a tu auto.</p><BeforeAfter before={opticasDespues} after={opticasAntes} service="oscurecido de ópticas" focus="50% 64%" />
      </article>
    </div>
  </div></section>
}
