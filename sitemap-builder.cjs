// sitemap-builder.cjs
import { createSitemap } from 'react-router-sitemap-maker'
import routes from './routes' // React Router route'larınızı içeren dosya

const sitemap = createSitemap({
  baseUrl: 'https://www.healyhayat.com.tr',
  // Eğer isterseniz, burada route'lara özel öncelikler veya diğer sitemap özellikleri ekleyebilirsiniz
})(routes)

sitemap.save('./public/sitemap.xml')
