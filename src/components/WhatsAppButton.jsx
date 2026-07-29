import { MessageCircle } from 'lucide-react'
export const whatsappUrl = 'https://wa.me/5491155241350?text=' + encodeURIComponent('Hola! Quiero sacar un turno para polarizado.')
export const whatsappUrlForService = (service) => 'https://wa.me/5491155241350?text=' + encodeURIComponent(`Hola! Quiero consultar por el servicio de ${service}.`)
export default function WhatsAppButton({ floating = false, children = 'Reservar turno por WhatsApp' }) {
  return <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp" className={floating ? 'fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gold text-carbon shadow-lg shadow-gold/30 transition hover:scale-110' : 'inline-flex items-center justify-center gap-2 rounded-sm bg-red px-5 py-3 font-bold text-white shadow-red transition hover:bg-gold hover:text-carbon'}><MessageCircle size={floating ? 27 : 20} fill="currentColor" />{!floating && children}</a>
}
