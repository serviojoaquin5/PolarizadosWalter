const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'o9rmoj6k'
const dataset = import.meta.env.VITE_SANITY_DATASET || import.meta.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || import.meta.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-01'

const apiUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`

export const polarizadosQuery = `{
  "page": *[_type == "polarizadosPage"][0]{
    title, subtitle, introduction, heroImage, ctaText, whatsappNumber, whatsappButtonText, seoTitle, seoDescription
  },
  "products": *[_type == "polarizado"] | order(_createdAt desc){
    _id, name, price, description, photos[]{"url": asset->url, "ref": asset._ref}
  }
}`

export async function fetchPolarizados() {
  const response = await fetch(`${apiUrl}?query=${encodeURIComponent(polarizadosQuery)}`)
  if (!response.ok) throw new Error('No se pudo consultar Sanity')
  const payload = await response.json()
  return payload.result || { page: null, products: [] }
}

export function sanityImageUrl(image, width = 1200) {
  const ref = image?.ref || image?.asset?._ref
  if (ref) {
    const file = ref.replace(/^image-/, '').replace(/-(\d+x\d+)-(\w+)$/, '.$2')
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${file}?w=${width}&auto=format`
  }
  if (image?.url) return `${image.url}?w=${width}&auto=format`
  if (image?.asset?.url) return `${image.asset.url}?w=${width}&auto=format`
  return null
}
