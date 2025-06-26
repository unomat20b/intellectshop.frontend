const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream, readdirSync, statSync } = require('fs')
const { join, relative, sep } = require('path')

const hostname = 'https://intellectshop.net'

// Папка, где лежат страницы
const pagesDir = join(__dirname, 'src/pages')

// Функция для рекурсивного обхода папки и поиска .vue файлов
function getVuePaths(dir, baseRoute = '') {
  let paths = []
  const files = readdirSync(dir)

  files.forEach(file => {
    const fullPath = join(dir, file)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      // Рекурсивно обходим подпапки
      const subRoute = baseRoute + '/' + file
      paths = paths.concat(getVuePaths(fullPath, subRoute))
    } else if (file.endsWith('.vue')) {
      let route = baseRoute + '/' + file.replace('.vue', '')
      // Преобразуем Home.vue → /
      if (route === '/Home') route = '/'
      // Преобразуем About.vue → /about
      else route = route.replace(/\/index$/i, '').toLowerCase()
      paths.push(route)
    }
  })

  return paths
}

// Получаем все пути
let pages = getVuePaths(pagesDir)

// Удаляем дубли и сортируем
pages = Array.from(new Set(pages)).sort()

// Генерируем sitemap
const sitemap = new SitemapStream({ hostname })

pages.forEach(page => sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 }))
sitemap.end()

streamToPromise(sitemap).then(sm => {
  createWriteStream('./public/sitemap.xml').write(sm)
  console.log('sitemap.xml создан автоматически!')
}) 