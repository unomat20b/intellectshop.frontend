const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')

const sitemap = new SitemapStream({ hostname: 'https://intellectshop.net' })

// Добавь сюда все важные страницы сайта
const pages = [
  '/',
  '/catalog',
  '/about',
  '/services',
  '/services/apple',
  '/services/ai',
  '/services/audit',
  '/projects',
  // ...добавь остальные важные страницы по необходимости
]

pages.forEach(page => sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 }))
sitemap.end()

streamToPromise(sitemap).then(sm => {
  createWriteStream('./public/sitemap.xml').write(sm)
  console.log('sitemap.xml создан!')
}) 