// sitemap-builder.cjs
const sitemap = require('sitemap')
const { Readable } = require('stream')
const path = require('path')
const fs = require('fs')

// Burada kullanmak için bir rotalar dizisi oluşturun
const links = [
  { url: '/', changefreq: 'daily', priority: 0.9 },
  { url: '/healy-gold-edition', changefreq: 'weekly', priority: 0.7 },
  { url: '/healy-holistic-edition', changefreq: 'weekly', priority: 0.7 },
  { url: '/healy-resonance-edition', changefreq: 'weekly', priority: 0.7 },
  { url: '/healy-resonance-plus-edition', changefreq: 'weekly', priority: 0.7 },
  { url: '/healy-professional-edition', changefreq: 'weekly', priority: 0.7 },
  { url: '/maghealy-classic-edition', changefreq: 'weekly', priority: 0.7 },
  {
    url: '/maghealy-professional-edition',
    changefreq: 'weekly',
    priority: 0.7,
  },
  { url: '/healy-coil', changefreq: 'weekly', priority: 0.7 },
  { url: '/hakkımızda', changefreq: 'monthly', priority: 0.5 },
  { url: '/healy-nedir?', changefreq: 'monthly', priority: 0.5 },
  { url: '/kampanyalar', changefreq: 'monthly', priority: 0.5 },
  { url: '/iletişim', changefreq: 'monthly', priority: 0.5 },
]

const generateSitemap = () => {
  // SitemapStream yerine sitemap.createSitemap kullanılır
  const sitemapContent = sitemap.createSitemap({
    hostname: 'https://www.healyhayat.com.tr',
    urls: links,
  })

  fs.writeFileSync(
    path.resolve('./public', 'sitemap.xml'),
    sitemapContent.toString()
  )
}

generateSitemap()
