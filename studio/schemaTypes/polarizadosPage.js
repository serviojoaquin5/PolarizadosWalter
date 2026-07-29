export const polarizadosPage = {
  name: 'polarizadosPage', title: 'Página de Polarizados', type: 'document',
  fields: [
    { name: 'title', title: 'Título principal', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'subtitle', title: 'Subtítulo', type: 'string' },
    { name: 'introduction', title: 'Descripción introductoria', type: 'text', rows: 4 },
    { name: 'heroImage', title: 'Imagen de portada', type: 'image', options: { hotspot: true } },
    { name: 'ctaText', title: 'Texto del llamado a la acción', type: 'string' },
    { name: 'whatsappNumber', title: 'Número de WhatsApp', type: 'string' },
    { name: 'whatsappButtonText', title: 'Texto del botón de WhatsApp', type: 'string' },
    { name: 'seoTitle', title: 'Título SEO', type: 'string' },
    { name: 'seoDescription', title: 'Descripción SEO', type: 'text', rows: 3 },
  ],
}
