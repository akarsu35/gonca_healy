const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')
const fs = require('fs')

// URL'leri güncelle
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

// Sitemap stream'ini oluştur
const stream = new SitemapStream({ hostname: 'https://www.healyhayat.com.tr' })

// Sitemap verisini oluştur
streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    // Sitemap XML verisini dosyaya yaz
    fs.writeFileSync('./dist/sitemap.xml', data.toString())
    console.log('Sitemap başarıyla oluşturuldu!')
  })
  .catch((err) => {
    console.error('Sitemap oluşturulurken hata oluştu:', err)
  })
