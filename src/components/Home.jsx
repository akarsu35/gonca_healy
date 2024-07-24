
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
        <title>Gonca Akarsu | Healy Frekans Terapisi ve Enerji Dengeleme</title>
        <meta
          name="description"
          content="Gonca Akarsu, Healy frekans terapisi ve enerji dengeleme hizmetleri sunan bir sağlık danışmanıdır. Bütünsel sağlık yaklaşımıyla kişiye özel çözümler sunar."
        />
        <meta
          name="keywords"
          content="gonca akarsu, healy, frekans terapisi, enerji dengeleme, sağlık danışmanı, bütünsel sağlık, biorezonans, enerji tıbbı, aura analizi, çakra dengeleme"
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