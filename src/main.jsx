import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root')
const initialData = JSON.parse(document.getElementById('page-data')?.textContent || 'null')
const app = <React.StrictMode><App pathname={window.location.pathname} initialData={initialData} /></React.StrictMode>
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
