import { useEffect } from 'react'

export default function PageEffects() {
  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', `${scrollable ? window.scrollY / scrollable : 0}`)
    }
    const updatePointer = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('pointermove', updatePointer, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('pointermove', updatePointer)
    }
  }, [])

  return <><div className="scroll-progress" aria-hidden="true" /><div className="pointer-glow" aria-hidden="true" /></>
}
