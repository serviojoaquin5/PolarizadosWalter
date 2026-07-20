import { Check } from 'lucide-react'
import aboutImage from '../assets/quienes-somos.webp'

export default function About() {
  return <section id="quienes-somos" className="section py-20"><div className="fade-up grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
    <div className="relative overflow-hidden rounded-sm border border-gold/30 bg-panel"><img src={aboutImage} alt="Equipo de Polarizados Walter trabajando en un vehículo" loading="lazy" className="aspect-square w-full object-cover transition duration-700 hover:scale-105" /><div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" /></div>
    <div>
      <p className="eyebrow">Quiénes somos</p>
      <h2 className="font-display text-5xl leading-[.92] tracking-wide sm:text-6xl">PASIÓN POR EL <span className="text-red">DETALLE,</span><br />COMPROMISO CON LA <span className="text-gold">CALIDAD</span></h2>
      {/* Reemplazá este texto por la historia o presentación definitiva del negocio. */}
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base"><p>En Polarizados Walter trabajamos cada vehículo con la misma dedicación que si fuera propio. Combinamos experiencia, materiales de calidad y una terminación prolija en cada detalle.</p><p>Atendemos con turno para respetar tu tiempo y asesorarte en la opción que mejor se adapta a tu auto.</p></div>
      <div className="mt-6 grid gap-2 text-sm font-semibold text-white/85 sm:grid-cols-2"><p className="flex items-center gap-2"><Check size={17} className="text-gold" /> Atención personalizada</p><p className="flex items-center gap-2"><Check size={17} className="text-gold" /> Trabajos garantizados</p></div>
    </div>
  </div></section>
}
