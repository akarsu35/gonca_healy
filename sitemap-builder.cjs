const { createSitemap } = require('react-router-sitemap-maker')

// Kodu burada devam ettirin

import AppRoutes from './src/AppRouter'

// Sadece route'ların URL'lerini ve diğer sitemap bilgilerini içeren bir dizi oluşturun
const routesConfig = AppRoutes().props.children.map((route) => ({
  path: route.props.path,
  lastmod: new Date().toISOString(), // İsteğe bağlı: Son değişiklik tarihi
  changefreq: 'weekly', // İsteğe bağlı: Değişim sıklığı
  priority: 0.7, // İsteğe bağlı: Öncelik
}))

const sitemap = createSitemap({
  baseUrl: 'https://www.healyhayat.com.tr',
})(routesConfig) // Oluşturduğunuz route konfigürasyonunu kullanın

console.log('sitemap:', sitemap.toString())

sitemap.save('./public/sitemap.xml')
