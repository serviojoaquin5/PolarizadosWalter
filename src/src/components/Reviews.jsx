import { ArrowRight, Quote, Star } from 'lucide-react'
import { whatsappUrl } from './WhatsAppButton'
import gastonAvatar from '../assets/review-gaston.webp'
import lauraAvatar from '../assets/review-laura.webp'
import dianaAvatar from '../assets/review-diana.webp'

const reviews = [
  { name: 'Gastón', avatar: gastonAvatar, text: 'Excelente atención, rápido y muy prolijo. Quedó impecable.' },
  { name: 'Laura', avatar: lauraAvatar, text: 'Muy buena atención y materiales de primera calidad. Súper recomendable.' },
  { name: 'Diana', avatar: dianaAvatar, text: 'Cumplieron con el horario y el trabajo quedó perfecto. Volvería sin dudarlo.' },
]

export default function Reviews() {
  return <section id="resenas" className="border-y border-white/10 bg-panel py-20"><div className="section">
    <div className="fade-up grid gap-10 md:grid-cols-[.75fr_1.25fr]">
      <div><p className="eyebrow">La confianza se gana</p><div className="flex items-end gap-3"><strong className="font-display text-8xl leading-none text-gold">4.9</strong><div className="pb-2"><div className="flex text-gold">{[1, 2, 3, 4, 5].map((item) => <Star key={item} size={18} fill="currentColor" />)}</div><p className="mt-1 text-sm text-white/60">325 reseñas en Google</p></div></div><a className="mt-6 inline-block text-sm font-bold text-gold underline underline-offset-4 hover:text-white" target="_blank" rel="noreferrer" href="https://www.google.com/search?q=Polarizados+Walter+Castelar">Ver todas las reseñas en Google</a></div>
      <div className="grid gap-3 sm:grid-cols-3">{reviews.map(({ name, text, avatar }) => <article key={name} className="rounded-sm border border-white/10 bg-carbon p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/60"><Quote size={20} className="text-red" /><p className="mt-3 text-sm leading-relaxed text-white/75">“{text}”</p><div className="mt-4 flex items-center gap-2"><img src={avatar} alt={`Foto de perfil de ${name}`} loading="lazy" className="h-7 w-7 rounded-full border border-gold/70 object-cover" /><p className="text-sm font-bold text-gold">— {name}</p></div></article>)}</div>
    </div>
    <div className="mt-10 overflow-hidden rounded-[3rem] border border-red/60 bg-gradient-to-r from-red/20 via-carbon to-carbon p-7 shadow-red sm:p-10 lg:p-11"><div className="relative grid items-center gap-9 lg:grid-cols-[1.45fr_.55fr]"><div className="pointer-events-none absolute -left-28 -top-32 h-72 w-72 rounded-full bg-red/20 blur-3xl" /><div className="relative"><p className="text-xs font-bold uppercase tracking-[.26em] text-red">Contactanos</p><h3 className="mt-5 max-w-3xl font-body text-4xl font-bold leading-[.98] tracking-tight text-white sm:text-6xl">No dudes en consultar, <span className="block">la atención también es uno de nuestros fuertes.</span></h3></div><a href={whatsappUrl} target="_blank" rel="noreferrer" className="relative flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-red px-8 py-5 text-center text-white shadow-red transition hover:-translate-y-1 hover:bg-gold hover:text-carbon lg:max-w-sm"><span><span className="block text-sm font-bold uppercase">Contactanos</span><span className="mt-1 block text-xs font-medium opacity-85">Asesoramiento por WhatsApp</span></span><ArrowRight size={22} /></a></div></div>
  </div></section>
}
