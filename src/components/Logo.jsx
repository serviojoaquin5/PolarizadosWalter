import logoWalter from '../assets/logo-polarizados-walter.webp'

export default function Logo({ small = false }) {
  return <img src={logoWalter} alt="Polarizados Walter" className={small ? 'h-10 w-auto object-contain' : 'h-auto w-56 max-w-full object-contain sm:w-64'} />
}
