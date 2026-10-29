import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { fetchPolarizados } from './lib/sanity'

export async function loadCatalog() {
  return fetchPolarizados({ signal: AbortSignal.timeout(15000) })
}

export function render(pathname, initialData) {
  return renderToString(<React.StrictMode><App pathname={pathname} initialData={initialData} /></React.StrictMode>)
}
