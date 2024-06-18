import { useState } from 'react'
import { NavbarWithMegaMenu } from './components/NavbarWithMegaMenu'
import NavUp from './components/NavUp'
import Hero from './components/Hero'
import Home from './components/Home'

function App() {
  return (
    <>
      <NavUp />

      <NavbarWithMegaMenu />

      <Hero />
      <Home />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </>
  )
}

export default App
