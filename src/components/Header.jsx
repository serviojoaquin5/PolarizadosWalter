import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Logo from './Logo'
import WhatsAppButton from './WhatsAppButton'

const links = [
  ['Quiénes somos', '#quienes-somos'],
  ['Servicios', '#servicios'],
  ['Opiniones', '#resenas'],
  ['Ubicación', '#ubicacion'],
  ['Contacto', '#contacto'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return <header className="sticky top-0 z-40 border-b border-white/10 bg-carbon/95 backdrop-blur">
    <div className="section flex h-18 items-center justify-between"><a href="#inicio"><Logo small /></a>
      <nav className="hidden gap-6 text-sm font-semibold text-white/75 md:flex">{links.map(([name, href]) => <a className="hover:text-gold" href={href} key={href}>{name}</a>)}</nav>
      <div className="hidden md:block"><WhatsAppButton>Reservar turno</WhatsAppButton></div>
      <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="section flex flex-col gap-4 border-t border-white/10 py-5 text-sm font-semibold md:hidden">{links.map(([name, href]) => <a onClick={() => setOpen(false)} href={href} key={href}>{name}</a>)}<WhatsAppButton /></nav>}
  </header>
}
