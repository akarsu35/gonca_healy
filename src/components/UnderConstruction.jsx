import React from 'react'

function UnderConstruction() {
  return (
    <div className="flex items-center justify-center min-h-[66vh]">
      <div className="text-center p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          Bu Sayfa Yapım Aşamasında
        </h1>
        <p className="text-gray-600 mb-6 ">Çok kısa sürede içeriklerimizle sizinle olacağız.</p>
        <div className="bg-[#B756A0] w-40 h-8 rounded-md flex justify-center items-center hover:bg-[#5297C8] transition duration-500">
          <a href="/" className="text-white font-semibold">
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </div>
  )
}

export default UnderConstruction
