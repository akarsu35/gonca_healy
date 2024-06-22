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
import HealyDetails from './components/HealyDetails'
import { Routes,Route } from 'react-router-dom'
import HealyHolisticEdition from './components/healy-details/HealyHolisticEdition'
import Healy from './components/Healy'
import HealyGoldEdition from './components/healy-details/HealyGoldEdition'

function App() {
  return (
    <>
      <SocialMediaLeft />
      <NavUp />
      <NavbarWithMegaMenu />

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
      <Hero />
      <Home />
      <HealyList />
      <CarouselFromYou />
      <FactFigures />
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

