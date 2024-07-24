// sitemap-builder.mjs
import sitemapMaker from 'react-router-sitemap-maker'
import AppRoutes from './src/AppRouter'

const { createSitemap } = sitemapMaker // createSitemap fonksiyonunu al

const sitemap = createSitemap({
  baseUrl: 'https://www.healyhayat.com.tr',
})(AppRoutes())

sitemap.save('./public/sitemap.xml')
