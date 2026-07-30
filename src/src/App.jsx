import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Reviews from './components/Reviews'
import Services from './components/Services'
import VideoTestimonials from './components/VideoTestimonials'
import WhyUs from './components/WhyUs'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import PageEffects from './components/PageEffects'
import LoadingScreen from './components/LoadingScreen'
import PolarizadosPage from './components/PolarizadosPage'

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  name: 'Polarizados Walter',
  description: 'Polarizados en Castelar: polarizado de autos, láminas de seguridad, saca bollos y oscurecido de ópticas.',
  telephone: '+541155241350',
  url: 'https://www.instagram.com/polarizadoswalter/',
  priceRange: '$$',
  sameAs: ['https://www.instagram.com/polarizadoswalter/'],
  areaServed: { '@type': 'City', name: 'Castelar, Provincia de Buenos Aires' },
  address: { '@type': 'PostalAddress', streetAddress: 'Italia 2600', addressLocality: 'Castelar', addressRegion: 'Provincia de Buenos Aires', postalCode: 'B1712', addressCountry: 'AR' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '325', bestRating: '5' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '14:00' },
  ],
}

export default function App() {
  if (window.location.pathname === '/polarizados') return <PolarizadosPage />
  return <>
    <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
    <LoadingScreen /><PageEffects /><Header />
    <main><Hero /><About /><Reviews /><Services /><VideoTestimonials /><WhyUs /><Location /></main>
    <Footer /><WhatsAppButton floating />
  </>
}
