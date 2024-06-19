import { useState } from 'react'
import { NavbarWithMegaMenu } from './components/NavbarWithMegaMenu'
import NavUp from './components/NavUp'
import Hero from './components/Hero'
import Home from './components/Home'
import HealyList from './components/HealyList'
import CarouselFromYou from './components/CarouselFromYou'

function App() {
  return (
    <>
      <NavUp />

      <NavbarWithMegaMenu />

      <Hero />
      <Home />
      <HealyList/>
      <CarouselFromYou/>
      <Hero />
      <Hero />
    </>
  )
}

export default App
