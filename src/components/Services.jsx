import { ArrowLeft, ArrowLeftRight, ArrowRight, CarFront, Check, CircleDotDashed, Eye, KeyRound, Paintbrush, Radio, ShieldCheck, Stamp, SunMedium, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { whatsappUrl } from './WhatsAppButton'
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

const additionalServices = [
  { id: 'grabado', title: 'Grabado de cristales', copy: 'Sistema arenado para identificar y proteger tu vehículo.', Icon: Stamp },
  { id: 'control-solar', title: 'Control solar', copy: 'Opciones espejadas y degradé para mayor confort y estilo.', Icon: SunMedium },
  { id: 'ploteos', title: 'Ploteos vehiculares', copy: 'Ploteos y gráficas para todo tipo de vehículos.', Icon: Paintbrush },
  { id: 'autoradio', title: 'Autoradio y abrillantados', copy: 'Autoradio, pulido de ópticas y abrillantado exterior.', Icon: Radio },
  { id: 'tapizados', title: 'Tapizados y llaves', copy: 'Limpieza de tapizados y llaves codificadas.', Icon: KeyRound },
]

const serviceDetails = {
  polarizado: { title: 'Polarizado', text: 'Elegí la terminación ideal para tu vehículo con asesoramiento sobre el tono y la garantía.', bullets: ['Tonos claro, intermedio y negro', 'Opciones según garantía del producto', 'Instalación prolija con turno previo'] },
  laminas: { title: 'Láminas de seguridad', text: 'Protegé los vidrios del auto con láminas de primera calidad e instalación profesional.', bullets: ['Mayor resistencia ante impactos', 'Materiales certificados', 'Terminación cuidada y asesoramiento personalizado'] },
  sacabollos: { title: 'Saca bollos', text: 'Reparación de bollos sin dañar la pintura original del vehículo.', bullets: ['Técnica sin repintado cuando el caso lo permite', 'Evaluación previa del daño', 'Trabajo prolijo sobre la chapa original'] },
  opticas: { title: 'Ópticas: pulido y oscurecido', text: 'Mejoramos el aspecto de las ópticas para una terminación renovada o más deportiva.', bullets: ['Pulido de ópticas', 'Oscurecido de ópticas', 'Terminación cuidada para tu vehículo'] },
  grabado: { title: 'Grabado de cristales', text: 'Grabado de cristales mediante sistema arenado para identificar tu vehículo.', bullets: ['Sistema arenado', 'Aplicación sobre cristales', 'Consulta según tipo de vehículo'] },
  'control-solar': { title: 'Control solar', text: 'Opciones para mejorar el confort y darle personalidad a tus vidrios.', bullets: ['Control solar', 'Terminaciones espejadas', 'Opciones degradé'] },
  ploteos: { title: 'Ploteos vehiculares', text: 'Ploteos y gráfica para personalizar vehículos de todo tipo.', bullets: ['Diseños personalizados', 'Gráfica vehicular', 'Opciones para autos, utilitarios y más'] },
  autoradio: { title: 'Autoradio y abrillantados', text: 'Servicios complementarios para renovar y equipar tu vehículo.', bullets: ['Autoradio', 'Pulido de ópticas', 'Abrillantado exterior'] },
  tapizados: { title: 'Tapizados y llaves', text: 'Detalles para el interior y soluciones prácticas para tu vehículo.', bullets: ['Limpieza profunda de tapizados', 'Llaves codificadas', 'Consulta según necesidad'] },
}

function ServiceButton({ onClick }) {
  return <button type="button" onClick={onClick} className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/75 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gold transition hover:bg-gold hover:text-carbon">Ver servicio <ArrowRight size={15} /></button>
}

function BeforeAfter({ before, after, service, focus = '50% 50%' }) {
  const [position, setPosition] = useState(50)
  return <div className="relative mt-5 h-52 select-none overflow-hidden rounded-sm border border-white/15 bg-black sm:h-64" aria-label="Comparativa antes y después">
    <img className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: focus }} src={after} alt={`Después: ${service}`} loading="lazy" />
    <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}><img className="h-full max-w-none object-cover" style={{ width: `${10000 / position}%`, objectPosition: focus }} src={before} alt={`Antes: ${service}`} loading="lazy" /></div>
    <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Antes</span><span className="absolute right-2 top-2 rounded bg-gold px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-carbon">Después</span>
    <div className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-gold" style={{ left: `${position}%` }} /><div className="pointer-events-none absolute top-1/2 z-10 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-gold bg-carbon text-gold shadow-lg" style={{ left: `${position}%` }}><ArrowLeftRight size={18} /></div>
    <input aria-label="Deslizar para comparar antes y después" className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0" type="range" min="5" max="95" value={position} onChange={(event) => setPosition(Number(event.target.value))} />
  </div>
}

function TintSelector() {
  const [selected, setSelected] = useState(tintOptions[0])
  return <><div className="mt-4 grid grid-cols-3 gap-2" aria-label="Elegí un tono de polarizado">{tintOptions.map((option) => <button key={option.name} type="button" onClick={() => setSelected(option)} aria-pressed={selected.name === option.name} className={`rounded-sm border px-2 py-2 text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-gold ${option.swatch} ${selected.name === option.name ? 'scale-[1.03] ring-2 ring-gold ring-offset-2 ring-offset-red/10' : 'opacity-70 hover:opacity-100'}`}>{option.name}</button>)}</div>
    <div className="mt-3 flex items-center justify-between gap-3 rounded-sm border border-gold/40 bg-black/40 px-3 py-2" aria-live="polite"><div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold">{selected.warranty}</p><p className="text-xs text-white/70">Polarizado {selected.name.toLowerCase()}</p></div><p className="text-right"><span className="block text-[10px] uppercase tracking-wide text-white/45">Desde</span><strong className="font-display text-2xl tracking-wide text-white">{selected.price}</strong></p></div>
    <p className="mt-2 text-[11px] leading-relaxed text-gold/85">Valores orientativos: el precio final puede variar según el vehículo y la garantía elegida.</p></>
}

function SecurityCarousel() {
  const [active, setActive] = useState(0)
  const previous = () => setActive((current) => (current - 1 + securitySlides.length) % securitySlides.length)
  const next = () => setActive((current) => (current + 1) % securitySlides.length)
  useEffect(() => { const timer = window.setInterval(next, 3500); return () => window.clearInterval(timer) }, [])
  const slide = securitySlides[active]
  return <div className="relative mt-5 h-56 overflow-hidden rounded-sm border border-white/15 bg-black sm:h-64" aria-roledescription="carrusel" aria-label="Trabajos de láminas de seguridad"><img key={slide.image} src={slide.image} alt={slide.alt} loading="lazy" className="h-full w-full object-cover" />
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 via-black/35 to-transparent px-3 pb-3 pt-12"><p className="text-xs font-bold uppercase tracking-[.13em] text-white">{slide.caption}</p><div className="flex gap-1.5">{securitySlides.map((item, index) => <button key={item.caption} type="button" aria-label={`Ver imagen ${index + 1}`} aria-current={index === active} onClick={() => setActive(index)} className={`h-2 w-2 rounded-full transition ${index === active ? 'w-5 bg-gold' : 'bg-white/55 hover:bg-white'}`} />)}</div></div>
    <button type="button" onClick={previous} aria-label="Imagen anterior" className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/65 text-white transition hover:bg-red"><ArrowLeft size={16} /></button><button type="button" onClick={next} aria-label="Imagen siguiente" className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/65 text-white transition hover:bg-red"><ArrowRight size={16} /></button>
  </div>
}

function ServiceInfoCard({ service, onClose }) {
  if (!service) return null
  return <div className="fixed inset-0 z-[100] grid place-items-center bg-black/80 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="service-title"><article className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-red/70 bg-panel p-7 shadow-2xl shadow-red/20 sm:p-9"><div className="pointer-events-none absolute -right-20 -top-24 h-60 w-60 rounded-full bg-red/15 blur-3xl" /><button type="button" onClick={onClose} aria-label="Cerrar información del servicio" className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white transition hover:border-gold hover:text-gold"><X size={18} /></button><div className="relative"><p className="text-xs font-bold uppercase tracking-[.24em] text-red">Servicio</p><h3 id="service-title" className="mt-3 font-display text-4xl tracking-wide text-white">{service.title}</h3><p className="mt-4 leading-relaxed text-white/70">{service.text}</p><ul className="mt-6 space-y-3">{service.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm text-white/85"><Check size={18} className="mt-0.5 shrink-0 text-gold" />{bullet}</li>)}</ul><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-red px-5 py-3 text-sm font-bold text-white transition hover:bg-gold hover:text-carbon">Consultar por WhatsApp <ArrowRight size={17} /></a></div></article></div>
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  return <section id="servicios" className="section py-20"><div className="fade-up"><p className="eyebrow">Lo hacemos bien</p><h2 className="font-display text-5xl tracking-wide sm:text-6xl">SERVICIOS PARA <span className="text-red">DISFRUTAR MÁS</span> TU AUTO</h2>
    <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <article className="group min-h-56 rounded-sm border border-red bg-red/10 p-5 transition hover:-translate-y-1 hover:border-gold sm:col-span-2"><CarFront className="text-gold" size={30} /><h3 className="mt-4 font-display text-3xl tracking-wide">Polarizado</h3><p className="mt-1 text-sm leading-relaxed text-white/60">Variedad de tonos para elegir la terminación y garantía que mejor se adapten a tu auto.</p><TintSelector /><ServiceButton onClick={() => setSelectedService('polarizado')} /><BeforeAfter before={polarizadoAntes} after={polarizadoDespues} service="polarizado" /></article>
      <article className="group min-h-56 rounded-sm border border-gold/45 bg-panel p-5 transition hover:-translate-y-1 hover:border-gold sm:col-span-2"><ShieldCheck className="text-gold" size={30} /><h3 className="mt-4 font-display text-3xl tracking-wide">Láminas de seguridad</h3><p className="mt-1 text-sm leading-relaxed text-white/60">Especialistas en protección para vidrios, con instalación profesional y materiales de primera calidad.</p><ServiceButton onClick={() => setSelectedService('laminas')} /><SecurityCarousel /></article>
      <article className="group min-h-56 rounded-sm border border-red/50 bg-panel p-5 transition hover:-translate-y-1 hover:border-gold sm:col-span-2"><CircleDotDashed className="text-gold" size={30} /><h3 className="mt-4 font-display text-3xl tracking-wide">Saca bollos</h3><p className="mt-1 text-sm leading-relaxed text-white/60">Sacabollos sin dañar la pintura original del vehículo.</p><ServiceButton onClick={() => setSelectedService('sacabollos')} /><BeforeAfter before={sacabolllosDespues} after={sacabolllosAntes} service="saca bollos" /></article>
      <article className="group min-h-56 rounded-sm border border-white/10 bg-panel p-5 transition hover:-translate-y-1 hover:border-red sm:col-span-2"><Eye className="text-gold" size={30} /><h3 className="mt-4 font-display text-3xl tracking-wide">Ópticas: pulido y oscurecido</h3><p className="mt-1 text-sm leading-relaxed text-white/60">Pulido y oscurecido de ópticas para una terminación más deportiva.</p><ServiceButton onClick={() => setSelectedService('opticas')} /><BeforeAfter before={opticasDespues} after={opticasAntes} service="ópticas" focus="50% 64%" /></article>
    </div>
    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{additionalServices.map(({ id, title, copy, Icon }) => <article key={title} className="group rounded-sm border border-white/10 bg-panel p-5 transition hover:-translate-y-1 hover:border-gold"><Icon className="text-gold" size={27} /><h3 className="mt-4 font-display text-2xl leading-none tracking-wide">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/60">{copy}</p><ServiceButton onClick={() => setSelectedService(id)} /></article>)}</div>
  </div><ServiceInfoCard service={selectedService ? serviceDetails[selectedService] : null} onClose={() => setSelectedService(null)} /></section>
}
