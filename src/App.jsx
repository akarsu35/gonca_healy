import { useState } from 'react'
import { NavbarWithMegaMenu } from './components/NavbarWithMegaMenu'
import NavUp from './components/NavUp'
import Hero from './components/Hero'
import Home from './components/Home'
import HealyList from './components/HealyList'
import CarouselFromYou from './components/CarouselFromYou'
import FactFigures from './components/FactFigures'
import Footer from './components/Footer'
import SocialMediaLeft from './components/SocialMediaLeft'

function App() {
  return (
    <>
    <SocialMediaLeft/>
      <NavUp />
      <NavbarWithMegaMenu />
      <Hero />
      <Home />
      <HealyList/>
      <CarouselFromYou/>
      <FactFigures/>
      <Footer/>
    </>
  )
}

export default App
