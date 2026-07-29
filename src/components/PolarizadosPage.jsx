import { ArrowLeft, ArrowRight, Check, MessageCircle, ShieldCheck, SunMedium } from 'lucide-react'
import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import { fetchPolarizados, sanityImageUrl } from '../lib/sanity'

const fallbackPage = {
  title: 'Polarizados para tu auto',
  subtitle: 'Confort, privacidad y una terminación impecable.',
  introduction: 'Elegí el tono y la garantía que mejor acompañen a tu vehículo. Te asesoramos para encontrar una opción que se vea bien y funcione mejor todos los días.',
  ctaText: 'Consultanos por el tono ideal para tu auto.',
  whatsappNumber: '5491155241350',
  whatsappButtonText: 'Consultar por WhatsApp',
}

function whatsappLink(product, page) {
  if (product.whatsappLink) return product.whatsappLink
  const phone = (page.whatsappNumber || fallbackPage.whatsappNumber).replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(`Hola! Quiero consultar por ${product.name}.`)}`
}

function ProductCard({ product, page }) {
  const image = product.mainImage?.local || sanityImageUrl(product.mainImage)
  const features = product.features?.filter(Boolean) || []
  return <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel transition hover:-translate-y-1 hover:border-gold/75">
    <div className="relative h-56 bg-black">{image ? <img src={image} alt={product.name} className="h-full w-full object-cover" loading="lazy" /> : <div className="grid h-full place-items-center bg-gradient-to-br from-red/30 via-carbon to-black text-sm font-bold uppercase tracking-[.2em] text-gold">Polarizados Walter</div>}<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5"><span className="rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-carbon">{product.tones?.join(' · ') || 'Polarizado'}</span></div></div>
    <div className="p-6"><h2 className="font-display text-3xl tracking-wide text-white">{product.name}</h2><p className="mt-3 text-sm leading-relaxed text-white/65">{product.shortDescription || product.fullDescription}</p>
      <div className="mt-5 grid gap-2 text-xs text-white/75"><p className="flex items-center gap-2"><SunMedium size={15} className="text-gold" />{product.uvProtection || 'Protección UV'}</p><p className="flex items-center gap-2"><ShieldCheck size={15} className="text-gold" />{product.heatReduction || 'Reducción de calor'}</p><p className="flex items-center gap-2"><ShieldCheck size={15} className="text-gold" />{product.securityLevel || 'Mayor privacidad'}</p></div>
      {features.length > 0 && <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">{features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-white/70"><Check size={16} className="mt-0.5 shrink-0 text-gold" />{feature}</li>)}</ul>}
      <div className="mt-6 flex items-center justify-between gap-3"><p><span className="block text-[10px] font-bold uppercase tracking-wider text-white/45">Precio</span><strong className="text-lg text-white">{product.price || product.priceText || 'Consultar'}</strong></p><a href={whatsappLink(product, page)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-red px-4 py-3 text-xs font-bold text-white transition hover:bg-gold hover:text-carbon"><MessageCircle size={16} />{product.buttonText || 'Consultar'}</a></div>
    </div>
  </article>
}

export default function PolarizadosPage() {
  const [data, setData] = useState({ page: fallbackPage, products: [] })
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let subscribed = true
    fetchPolarizados().then((result) => {
      if (!subscribed) return
      setData({ page: { ...fallbackPage, ...(result.page || {}) }, products: result.products || [] })
      setStatus('ready')
    }).catch(() => subscribed && setStatus('fallback'))
    return () => { subscribed = false }
  }, [])

  const page = data.page
  const heroImage = sanityImageUrl(page.heroImage, 1800)
  const generalWhatsapp = `https://wa.me/${(page.whatsappNumber || fallbackPage.whatsappNumber).replace(/\D/g, '')}?text=${encodeURIComponent('Hola! Quiero asesoramiento sobre polarizados.')}`

  return <><Header /><main>
    <section className="relative overflow-hidden border-b border-white/10 bg-black py-20 sm:py-28"><div className="absolute inset-0 opacity-35" style={heroImage ? { backgroundImage: `linear-gradient(90deg, #090909 15%, rgba(9,9,9,.7) 47%, rgba(9,9,9,.32)), url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined} /><div className="section relative"><a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white focus:outline-none focus:ring-2 focus:ring-gold"><ArrowLeft size={18} />Volver al inicio</a><p className="mt-10 text-xs font-bold uppercase tracking-[.24em] text-red">Polarizados Walter</p><h1 className="mt-3 max-w-3xl font-display text-6xl leading-[.88] tracking-wide text-white sm:text-8xl">{page.title}</h1><p className="mt-6 max-w-2xl text-xl text-gold">{page.subtitle}</p><p className="mt-5 max-w-2xl leading-relaxed text-white/70">{page.introduction}</p><a href={generalWhatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-red px-6 py-4 font-bold text-white shadow-xl shadow-red/25 transition hover:-translate-y-1 hover:bg-gold hover:text-carbon"><MessageCircle size={19} />{page.whatsappButtonText}<ArrowRight size={18} /></a></div></section>
    <section className="section py-20"><div className="text-center"><p className="eyebrow justify-center">Elegí tu estilo</p><h2 className="font-display text-5xl tracking-wide sm:text-6xl">TIPOS DE <span className="text-red">POLARIZADO</span></h2><p className="mx-auto mt-4 max-w-xl text-white/60">Cada opción combina estética, confort y una garantía acorde al producto. Consultanos para cotizar según tu vehículo.</p></div>{data.products.length > 0 ? <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{data.products.map((product) => <ProductCard key={product._id} product={product} page={page} />)}</div> : <div className="mx-auto mt-10 max-w-2xl rounded-[1.75rem] border border-dashed border-gold/50 bg-panel px-7 py-12 text-center"><p className="font-display text-3xl tracking-wide text-white">PRÓXIMAMENTE</p><p className="mt-3 text-sm leading-relaxed text-white/60">Estamos preparando las opciones disponibles para tu vehículo. Consultanos por WhatsApp y te asesoramos.</p><a href={generalWhatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-red px-5 py-3 text-sm font-bold text-white transition hover:bg-gold hover:text-carbon"><MessageCircle size={17} />Consultar ahora</a></div>}</section>
    <section className="section pb-20"><div className="rounded-[2rem] border border-red/60 bg-gradient-to-r from-red/20 via-panel to-panel px-7 py-10 text-center sm:px-12"><p className="text-xs font-bold uppercase tracking-[.24em] text-gold">Tu próximo turno</p><h2 className="mx-auto mt-3 max-w-2xl font-display text-5xl leading-none tracking-wide">{page.ctaText}</h2><a href={generalWhatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-4 font-bold text-carbon transition hover:bg-white"><MessageCircle size={19} />{page.whatsappButtonText}</a></div></section>
  </main><Footer /><WhatsAppButton floating /></>
}
