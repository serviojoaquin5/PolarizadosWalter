import { Camera, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import WhatsAppButton, { whatsappUrl } from './WhatsAppButton'

export default function Footer() {
  return <footer id="contacto" className="border-t border-red/40 bg-black py-14">
    <div className="section grid gap-10 md:grid-cols-3">
      <div><Logo /><p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">Tu auto, con otra presencia. Atención rápida, prolija y con turno.</p></div>
      <div><h3 className="font-display text-2xl text-gold">CONTACTO</h3><div className="mt-4 space-y-3 text-sm text-white/70">
        <a className="flex gap-2 hover:text-gold" href="tel:+541155241350"><Phone size={18} />011 15-5524-1350</a>
        <a className="flex gap-2 hover:text-gold" target="_blank" rel="noreferrer" href={whatsappUrl}><Phone size={18} />WhatsApp</a>
        <a className="flex gap-2 hover:text-gold" target="_blank" rel="noreferrer" href="https://instagram.com/polarizadoswalter"><Camera size={18} />@polarizadoswalter</a>
        <p className="flex gap-2"><MapPin size={18} />Italia 2600, Castelar</p>
      </div></div>
      <div><h3 className="font-display text-2xl text-gold">TU TURNO</h3><p className="mt-4 text-sm text-white/60">Lunes a viernes · 9 a 18 hs<br />Sábados · 8 a 14 hs<br />Confirmá disponibilidad por WhatsApp.</p><div className="mt-5"><WhatsAppButton>Consultar ahora</WhatsAppButton></div></div>
    </div>
    <div className="section mt-12 border-t border-white/10 pt-5 text-xs text-white/35">© {new Date().getFullYear()} Polarizados Walter. Todos los derechos reservados.</div>
  </footer>
}
