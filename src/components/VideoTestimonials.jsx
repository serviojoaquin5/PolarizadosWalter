const videos = [
  { src: '/videos/testimonio-1.mp4', label: 'Testimonio de cliente' },
  { src: '/videos/testimonio-2.mp4', label: 'Una experiencia con Walter' },
]

export default function VideoTestimonials() {
  return <section id="videos" className="border-b border-white/10 bg-carbon py-20 sm:py-24">
    <div className="section fade-up">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow justify-center">Clientes reales</p>
        <h2 className="font-body text-4xl font-bold leading-[.98] tracking-tight text-white sm:text-6xl">¿SEGUÍS DUDANDO? <span className="text-gold">ESCUCHÁ ESTO.</span></h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">Silvina Escudero comparte su experiencia con Polarizados Walter. Si ella lo recomienda, escuchala.</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
        {videos.map((video) => <article key={video.src} className="overflow-hidden rounded-[2rem] border border-white/10 bg-panel shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-gold/60">
          <video className="aspect-[9/16] w-full bg-black object-cover" controls preload="metadata" playsInline aria-label={video.label}>
            <source src={video.src} type="video/mp4" />
            Tu navegador no permite reproducir este video.
          </video>
        </article>)}
      </div>
    </div>
  </section>
}
