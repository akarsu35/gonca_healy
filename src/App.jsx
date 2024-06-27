import { useState } from 'react'
import { NavbarWithMegaMenu } from './components/NavbarWithMegaMenu'
import NavUp from './components/NavUp'
import Hero from './components/Hero'
import Main from './components/Main'
import HealyList from './components/HealyList'
import CarouselFromYou from './components/CarouselFromYou'
import FactFigures from './components/FactFigures'
import Footer from './components/Footer'
import SocialMediaLeft from './components/SocialMediaLeft'
import HealyDetails from './components/HealyDetails'
import { Routes,Route } from 'react-router-dom'
import HealyHolisticEdition from './components/healy-details/HealyHolisticEdition'
import Healy from './components/Healy'
import HealyGoldEdition from './components/healy-details/HealyGoldEdition'
import Home from './components/Home'
import HealyResonanceEdition from './components/healy-details/HealyResonanceEdition'
import HealyResonancePlusEdition from './components/healy-details/HealyResonancePlusEdition'
import HealyProfessionalEdition from './components/healy-details/HealyProfessionalEdition'
import MagHealyClassic from './components/healy-details/MagHealyClassic'
import MagHealyProfessional from './components/healy-details/MagHealyProfessional'
import Coil from './components/healy-details/Coil'
import AboutUs from './components/AboutUs'
import WhatIsHealy from './components/WhatIsHealy'
import Campains from './components/Campaigns'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      
      <NavUp />
      <NavbarWithMegaMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healy-gold-edition" element={<HealyGoldEdition />} />
        <Route
          path="/healy-holistic-edition"
          element={<HealyHolisticEdition />}
        />
        <Route
          path="/healy-resonance-edition"
          element={<HealyResonanceEdition />}
        />
        <Route
          path="/healy-resonance-plus-edition"
          element={<HealyResonancePlusEdition />}
        />
        <Route
          path="/healy-professional-edition"
          element={<HealyProfessionalEdition />}
        />
        <Route path="/maghealy-classic-edition" element={<MagHealyClassic />} />
        <Route
          path="/maghealy-professional-edition"
          element={<MagHealyProfessional />}
        />
        <Route path="/coil" element={<Coil />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="whatis-healy" element={<WhatIsHealy />} />
        <Route path="/campaigns" element={<Campains />} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>

      {/* <Routes>
      
        <Route
          path="/healy-holistic-edition"
          element={<HealyHolisticEdition />}
        />
        <Route path="/healy-gold-edition" element={<HealyGoldEdition />} />
        <Route path="/" element={<Hero/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/healylist" element={<HealyList/>} />
        <Route path="/fromyou" element={<CarouselFromYou/>} />
        <Route path="/factfigures" element={<FactFigures/>} />
    
    
      </Routes> */}
      {/* <Hero />
      <Main />
      <HealyList />
      <CarouselFromYou />
      <FactFigures /> */}
      <Footer />
      {/* <HealyDetails /> */}
    </>
  )
}
export default App

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {NavbarWithMegaMenu} from './components/NavbarWithMegaMenu'
// import NavUp from './components/NavUp'
// import Hero from './components/Hero'
// import Home from './components/Home'
// import HealyList from './components/HealyList'
// import CarouselFromYou from './components/CarouselFromYou'
// import FactFigures from './components/FactFigures'
// import Footer from './components/Footer'
// import SocialMediaLeft from './components/SocialMediaLeft'
// import HealyDetails from './components/HealyDetails'
// import HealyGoldEdition from '../src/components/healy-details/HealyGoldEdition'
// import HealyHolisticEdition from '../src/components/healy-details/HealyHolisticEdition'


// function App() {
//   return (
//     <>
//       <SocialMediaLeft />
//       <NavUp />
//       <NavbarWithMegaMenu />
//       <Hero />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/healy-gold-edition" element={<HealyGoldEdition />} />
//         <Route
//           path="/healy-holistic-edition"
//           element={<HealyHolisticEdition />}
//         />
//         {/* Add routes for other products */}
//         <Route path="/healy-list" element={<HealyList />} />
//         <Route path="/carousel-from-you" element={<CarouselFromYou />} />
//         <Route path="/fact-figures" element={<FactFigures />} />
//         <Route path="/healy-details" element={<HealyDetails />} />
//       </Routes>
//       <Footer />
//     </>
//   )
// }

// export default App

