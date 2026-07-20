export default function Logo({ small = false }) {
  return <div className={'relative inline-flex flex-col leading-none ' + (small ? 'scale-75 origin-left' : '')} aria-label="Polarizados Walter">
    <span className="font-display text-[1.7rem] tracking-[.06em] text-white" style={{ WebkitTextStroke: '1px #e51b23' }}>POLARIZADOS</span>
    <span className="-mt-2 self-center font-[Yellowtail] text-3xl text-gold">Walter</span>
  </div>
}
