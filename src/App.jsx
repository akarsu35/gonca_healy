import React from 'react'

import { Helmet } from 'react-helmet'
import AppRouter from './AppRouter'

function App() {
  return (
    <>
      <Helmet>
        <title>Gonca Akarsu | Healy Sponsoru ve Numeroloji Uzmanı</title>
        <meta
          name="description"
          content="Healy cihazı ve numeroloji ile kişisel gelişiminizi destekleyen uzman danışmanlık hizmetleri."
        />
        <meta
          name="keywords"
          content="healy, numeroloji, kişisel gelişim, enerji terapisi"
        />
      </Helmet>
      
        <AppRouter />
     
    </>
  )
}

export default App
