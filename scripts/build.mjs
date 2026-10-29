import { build } from 'vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

// Render the real components: crawlers and visitors receive the same content.
await build()
const serverDirectory = resolve('node_modules/.cache/seo-server')
await build({ build: { ssr: 'src/entry-server.jsx', outDir: serverDirectory, emptyOutDir: true } })
const { render, loadCatalog } = await import(pathToFileURL(resolve(serverDirectory, 'entry-server.js')).href)
let catalog = null
try { catalog = await loadCatalog() }
catch (error) { console.warn('Sanity no disponible durante el build; el navegador actualizará el catálogo:', error.message) }

const origin = 'https://www.polarizadoswalter.com'
const businessId = `${origin}/#negocio`
const services = ['Polarizado', 'Láminas de seguridad', 'Saca bollos', 'Oscurecido de ópticas', 'Pulido de ópticas', 'Ploteos vehiculares', 'Limpieza de interiores', 'Grabado de cristales', 'Control solar', 'Autoradio', 'Lustrados y tratamientos', 'Llaves codificadas']
const business = {
  '@type': 'AutomotiveBusiness', '@id': businessId,
  name: 'Polarizados Walter', url: `${origin}/`,
  description: 'Polarizado de autos, láminas de seguridad y cuidado vehicular en Castelar, Provincia de Buenos Aires. Atención con turno.',
  telephone: '+54-11-5524-1350',
  image: `${origin}/og-image.jpg`, logo: `${origin}/favicon.png`,
  sameAs: ['https://www.instagram.com/polarizadoswalter/'],
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Polarizados+Walter+Italia+2600+Castelar',
  address: { '@type': 'PostalAddress', streetAddress: 'Italia 2600', addressLocality: 'Castelar', addressRegion: 'Buenos Aires', postalCode: 'B1712', addressCountry: 'AR' },
  areaServed: { '@type': 'City', name: 'Castelar', containedInPlace: { '@type': 'AdministrativeArea', name: 'Provincia de Buenos Aires, Argentina' } },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '14:00' },
  ],
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Servicios de Polarizados Walter', itemListElement: services.map(name => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, provider: { '@id': businessId }, areaServed: 'Castelar', url: `${origin}/#servicios` } })) },
}
// Do not emit self-serving rating markup, invented prices or coordinates.
const routes = [
  { path: '/', title: 'Polarizados en Castelar | Polarizados Walter', description: 'Polarizado de autos y láminas de seguridad en Castelar. Italia 2600. Atención con turno, lunes a viernes de 9 a 18 y sábados de 8 a 14. Consultanos.' },
  { path: '/polarizados', title: 'Polarizados: opciones y precios en Castelar | Walter', description: 'Conocé las opciones y precios de polarizado de Polarizados Walter en Castelar. Tonos claro, intermedio y oscuro. Consultá garantía y turno por WhatsApp.' },
]
const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])
const json = value => JSON.stringify(value).replace(/</g, '\\u003c')
const template = await readFile('dist/index.html', 'utf8')
for (const route of routes) {
  const url = `${origin}${route.path}`
  const data = route.path === '/polarizados' ? catalog : null
  const graph = [business,
    { '@type': 'WebSite', '@id': `${origin}/#website`, url: `${origin}/`, name: 'Polarizados Walter', inLanguage: 'es-AR', publisher: { '@id': businessId } },
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: route.title, description: route.description, inLanguage: 'es-AR', isPartOf: { '@id': `${origin}/#website` }, about: { '@id': businessId }, ...(route.path !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}) },
  ]
  if (route.path !== '/') graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${origin}/` }, { '@type': 'ListItem', position: 2, name: 'Polarizados', item: url } ] })
  const head = `<title>${escape(route.title)}</title>
    <meta name="description" content="${escape(route.description)}" />
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Polarizados Walter" />
    <meta property="og:locale" content="es_AR" />
    <meta property="og:title" content="${escape(route.title)}" />
    <meta property="og:description" content="${escape(route.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${origin}/og-image.jpg" />
    <meta property="og:image:width" content="1600" />
    <meta property="og:image:height" content="686" />
    <meta property="og:image:alt" content="Auto con vidrios polarizados en un taller" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(route.title)}" />
    <meta name="twitter:description" content="${escape(route.description)}" />
    <meta name="twitter:image" content="${origin}/og-image.jpg" />
    <script type="application/ld+json">${json({ '@context': 'https://schema.org', '@graph': graph })}</script>`
  const html = template.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, head)
    .replace('<div id="root"></div>', () => `<div id="root">${render(route.path, data)}</div><script type="application/json" id="page-data">${json(data)}</script>`)
  const destination = route.path === '/' ? 'dist/index.html' : 'dist/polarizados/index.html'
  if (route.path !== '/') await mkdir('dist/polarizados', { recursive: true })
  await writeFile(destination, html)
  console.log(`HTML indexable generado: ${route.path}`)
}
