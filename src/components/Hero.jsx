import { ArrowDown, ArrowRight, ShieldCheck, Star } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import heroGarage from '../assets/hero-garage.jpg'

export default function Hero() {
  return <section id="inicio" className="carbon-grid hero-motion relative isolate overflow-hidden">
    <div className="hero-orb hero-orb-red" /><div className="hero-orb hero-orb-gold" />
    <img src={heroGarage} alt="Audi con vidrios polarizados en un taller" width="1600" height="686" fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover object-[65%_center] lg:object-center" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-carbon/95 via-carbon/65 to-carbon/10 lg:from-carbon/80 lg:via-carbon/25 lg:to-transparent" />
    <div className="section relative flex min-h-[calc(100svh-72px)] max-w-6xl items-center py-16 sm:py-24"><div className="max-w-xl hero-copy">
      <h1 className="relative z-10 font-display text-6xl leading-[.83] tracking-wide drop-shadow-[0_3px_2px_rgba(0,0,0,.7)] sm:text-8xl">TU AUTO.<br /><span className="text-red">OTRA PRESENCIA.</span></h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">Polarizados, láminas de seguridad y cuidado vehicular con terminaciones prolijas y tiempos que se cumplen.</p>
      <div className="mt-8 flex flex-wrap items-center gap-3"><WhatsAppButton /><a href="/polarizados" className="inline-flex items-center gap-2 rounded-full border border-gold bg-gold px-6 py-3 font-bold tracking-wide text-carbon transition hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-carbon">VER PRECIOS <ArrowRight size={18} /></a></div>
      <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80"><span className="trust-chip flex items-center gap-2"><Star className="text-gold" fill="currentColor" size={18} /><b className="text-white">4.9</b> en Google</span><span className="trust-chip flex items-center gap-2"><ShieldCheck className="text-gold" size={19} />325 reseñas</span></div>
    </div></div>
    <a href="#resenas" className="hero-scroll absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center text-xs text-white/50"><span>Conocenos</span><ArrowDown size={18} /></a>
  </section>
}
