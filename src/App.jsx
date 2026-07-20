import Header from './components/Header'
import Hero from './components/Hero'
import Reviews from './components/Reviews'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import PageEffects from './components/PageEffects'
import LoadingScreen from './components/LoadingScreen'
import About from './components/About'

const businessSchema = {
  '@context': 'https://schema.org', '@type': 'AutomotiveBusiness', name: 'Polarizados Walter',
  description: 'Polarizado vehicular, láminas de seguridad, limpieza de tapizado, tratamientos y plotters en Castelar.',
  telephone: '+541155241350', url: 'https://www.instagram.com/polarizadoswalter/',
  address: { '@type': 'PostalAddress', streetAddress: 'Italia 2600', addressLocality: 'Castelar', addressRegion: 'Provincia de Buenos Aires', postalCode: 'B1712', addressCountry: 'AR' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '325', bestRating: '5' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '14:00' }
  ]
}
export default function App(){return <><script type="application/ld+json">{JSON.stringify(businessSchema)}</script><LoadingScreen/><PageEffects/><Header/><main><Hero/><About/><Reviews/><Services/><WhyUs/><Location/></main><Footer/><WhatsAppButton floating /></>}
