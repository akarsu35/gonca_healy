
import { Helmet } from 'react-helmet'
import CarouselFromYou from "./CarouselFromYou"
import FactFigures from "./FactFigures"
import HealyList from "./HealyList"
import Hero from "./Hero"
import Main from './Main'
import SocialMediaLeft from "./SocialMediaLeft"

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Ana Sayfa | Gonca Akarsu - Healy ve Numeroloji Uzmanı</title>
        <meta
          name="description"
          content="Gonca Akarsu ile Healy cihazı ve numeroloji hizmetleri. Kişisel gelişiminiz için uzman danışmanlık ve destek alın."
        />
        <meta
          name="keywords"
          content="healy, numeroloji, kişisel gelişim, enerji terapisi, ana sayfa"
        />
      </Helmet>
      <SocialMediaLeft />
      <Hero />
      <Main />
      <HealyList />
      <CarouselFromYou />
      <FactFigures />
    </div>
  )
}