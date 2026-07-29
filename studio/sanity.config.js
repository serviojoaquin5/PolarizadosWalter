import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'polarizados-walter',
  title: 'Polarizados Walter',
  projectId: 'o9rmoj6k',
  dataset: 'production',
  plugins: [structureTool({ name: 'contenido', title: 'Productos y páginas' }), visionTool()],
  schema: { types: schemaTypes },
})
