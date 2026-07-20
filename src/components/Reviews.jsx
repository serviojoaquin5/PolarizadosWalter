import { Quote, Star } from 'lucide-react'
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
      <div>
        <p className="eyebrow">La confianza se gana</p>
        <div className="flex items-end gap-3"><strong className="font-display text-8xl leading-none text-gold">4.9</strong><div className="pb-2"><div className="flex text-gold">{[1, 2, 3, 4, 5].map((item) => <Star key={item} size={18} fill="currentColor" />)}</div><p className="mt-1 text-sm text-white/60">325 reseñas en Google</p></div></div>
        <a className="mt-6 inline-block text-sm font-bold text-gold underline underline-offset-4 hover:text-white" target="_blank" rel="noreferrer" href="https://www.google.com/search?q=Polarizados+Walter+Castelar">Ver todas las reseñas en Google</a>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">{reviews.map(({ name, text, avatar }) => <article key={name} className="rounded-sm border border-white/10 bg-carbon p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/60">
        <Quote size={20} className="text-red" />
        <p className="mt-3 text-sm leading-relaxed text-white/75">“{text}”</p><div className="mt-4 flex items-center gap-2"><img src={avatar} alt={`Foto de perfil de ${name}`} loading="lazy" className="h-7 w-7 rounded-full border border-gold/70 object-cover" /><p className="text-sm font-bold text-gold">— {name}</p></div>
      </article>)}</div>
    </div>
    <p className="mt-5 text-xs text-white/35">Testimonios breves para validar con el perfil de Google antes de publicar.</p>
  </div></section>
}
