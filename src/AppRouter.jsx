import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavUp from './components/NavUp'
import {NavbarWithMegaMenu} from './components/NavbarWithMegaMenu'
import Footer from './components/Footer'
import Home from './components/Home'
import HealyGoldEdition from './components/healy-details/HealyGoldEdition'
import HealyHolisticEdition from './components/healy-details/HealyHolisticEdition'
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
import BlogList from './components/blog/BlogList'
import Blog1 from './components/blogs_details/Blog1'
import Blog2 from './components/blogs_details/Blog2'
import Blog3 from './components/blogs_details/Blog3'


const AppRouter = () => (
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
      <Route path="/healy-coil" element={<Coil />} />
      <Route path="/hakkımızda" element={<AboutUs />} />
      <Route path="/healy-nedir?" element={<WhatIsHealy />} />
      <Route path="/kampanyalar" element={<Campains />} />
      <Route path="/iletişim" element={<ContactUs />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog1" element={<Blog1 />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="/blog3" element={<Blog3 />} />
    </Routes>
    <Footer />
  </>
)

export default AppRouter
