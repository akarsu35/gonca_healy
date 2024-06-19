import { useState } from 'react'
import { NavbarWithMegaMenu } from './components/NavbarWithMegaMenu'
import NavUp from './components/NavUp'
import Hero from './components/Hero'
import Home from './components/Home'
import HealyList from './components/HealyList'

function App() {
  return (
    <>
      <NavUp />

      <NavbarWithMegaMenu />

      <Hero />
      <Home />
      <HealyList/>
      <Hero />
      <Hero />
      <Hero />
    </>
  )
}

export default App
