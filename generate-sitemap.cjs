const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')
const { resolve } = require('path')

const hostname = 'https://intellectshop.net'
const outputPath = resolve(__dirname, 'public/sitemap.xml')

function normalizeSitemapPath(path) {
  if (!path || path === '/') return '/'
  if (path.endsWith('/')) return path
  if (path.includes('.')) return path
  return `${path}/`
}

async function generateSitemap() {
  const { sitemapRoutes } = await import('./src/router/routes.js')

  const sitemap = new SitemapStream({ hostname })

  sitemapRoutes.forEach((route) => {
    sitemap.write({
      url: normalizeSitemapPath(route.path),
      changefreq: route.changefreq,
      priority: route.priority
    })
  })

  sitemap.end()

  const xml = await streamToPromise(sitemap)
  createWriteStream(outputPath).write(xml)
  console.log('sitemap.xml создан на основе src/router/routes.js')
}

generateSitemap().catch((error) => {
  console.error('Не удалось сгенерировать sitemap.xml', error)
  process.exitCode = 1
})
