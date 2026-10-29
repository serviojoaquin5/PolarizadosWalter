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

export default function App({ pathname = '/', initialData }) {
  if (pathname.replace(/\/$/, '') === '/polarizados') return <PolarizadosPage initialData={initialData} />
  return <>
    <LoadingScreen /><PageEffects /><Header />
    <main><Hero /><About /><Reviews /><Services /><VideoTestimonials /><WhyUs /><Location /></main>
    <Footer /><WhatsAppButton floating />
  </>
}
