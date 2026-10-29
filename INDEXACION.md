# Indexar Polarizados Walter

1. Esperar a que el despliegue de Vercel figure como **Ready**.
2. En Google Search Console, agregar la propiedad de dominio `polarizadoswalter.com` y verificarla con el TXT que Google entregue.
3. En **Sitemaps**, enviar `https://www.polarizadoswalter.com/sitemap.xml`.
4. En **Inspección de URLs**, probar y solicitar indexación de `https://www.polarizadoswalter.com/` y `https://www.polarizadoswalter.com/polarizados`.
5. Validar la portada en Google Rich Results Test. No se incluyen estrellas propias en el schema: Google no admite ese uso para un negocio sobre sí mismo.
6. Actualizar el enlace del sitio en el Perfil de Empresa de Google e Instagram al dominio oficial con `www`. Mantener nombre, dirección, teléfono y horarios coincidentes.
7. Opcional: importar la propiedad en Bing Webmaster Tools y enviar el mismo sitemap.

## Verificaciones del despliegue
- Las dos URLs responden 200 y tienen canonical propio con `www`.
- `/robots.txt`, `/sitemap.xml` y `/og-image.jpg` responden 200.
- Una ruta inexistente responde 404, no la portada con estado 200.
- La portada contiene servicios, dirección y horarios al ver el código fuente, sin ejecutar JavaScript.
- `/polarizados` incluye productos publicados disponibles durante el build y luego sigue consultando Sanity en el navegador. Un nuevo build actualiza la copia HTML para rastreadores que no ejecuten JS; los visitantes siguen recibiendo cambios del CMS sin redeploy.

`llms.txt` es complementario; no es un requisito de Google ni garantiza citaciones. SEO y GEO no garantizan primeras posiciones ni un plazo de indexación.
