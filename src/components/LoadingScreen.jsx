import { useEffect, useState } from 'react'
import Logo from './Logo'

export default function LoadingScreen() {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const finish = () => window.setTimeout(() => setLeaving(true), 1450)
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })
    return () => window.removeEventListener('load', finish)
  }, [])

  return <div className={`loading-screen ${leaving ? 'loading-screen-out' : ''}`} aria-hidden={leaving}>
    <div className="loading-logo"><Logo /></div>
    <div className="loading-track"><span /></div>
    <p>PREPARANDO TU AUTO</p>
  </div>
}
