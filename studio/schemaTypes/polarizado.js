export const polarizado = {
  name: 'polarizado', title: 'Polarizado', type: 'document',
  fields: [
    { name: 'name', title: 'Nombre', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'price', title: 'Precio', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'description', title: 'Descripción', type: 'text', rows: 5, validation: (Rule) => Rule.required() },
    {
      name: 'photos', title: 'Fotos (opcional, máximo 2)', type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(2),
    },
  ],
}
