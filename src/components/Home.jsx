import { Route, Routes } from "react-router-dom"
import CarouselFromYou from "./CarouselFromYou"
import FactFigures from "./FactFigures"
import HealyList from "./HealyList"
import Hero from "./Hero"
import Main from './Main'
import SocialMediaLeft from "./SocialMediaLeft"

Hero

export default function Home() {
  return (
    <div>
      <SocialMediaLeft />
      <Hero />
      <Main />
      <HealyList />
      <CarouselFromYou />
      <FactFigures />
    </div>
  )
}