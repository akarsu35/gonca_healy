import React from 'react'
import {
  FaBuilding,
  FaThumbsUp,
  FaSmile,
  FaGlobe,
  FaUsers,
  FaMobileAlt,
} from 'react-icons/fa'
import { FaHandHoldingHeart } from 'react-icons/fa6'

const FactsAndFigures = () => {
  return (
    <div className="container mx-auto p-6">
      {/* <!-- Başlık --> */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Gerçekler ve Rakamlar</h1>
        <p className="text-lg text-gray-600">
          Şirketimizin büyüklüğünü ve başarılarını gösteren bazı önemli rakamlar
          ve gerçekler.
        </p>
      </div>
      
      {/* <!-- Fakt Kartları --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white flex flex-col justify-center items-center p-6 rounded-lg text-center shadow-factCarts ">
          <div className="text-6xl mb-4 text-[#B756A0]">
            <FaThumbsUp />
          </div>
          <div className="text-4xl font-bold mb-2">92%</div>
          <div className="text-2xl text-gray-800">Öneri</div>
          <div className="text-lg text-center text-gray-700">
            Kullanıcıların 92%'si Healy'yi Başkalarına Tavsiye Ediyor*
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center p-6 rounded-lg  text-center shadow-factCarts ">
          <div className="text-[#5297C8] text-6xl mb-4">
            <FaSmile />
          </div>
          <div className="text-4xl font-bold mb-2">80%</div>
          <div className="text-2xl text-gray-800">Memnuniyet</div>
          <div className="text-lg text-center text-gray-700">
            Kullanıcıların %80'i Healy ile "çok memnun" *
          </div>
        </div>

        <div className="bg-white flex flex-col justify-center items-center p-6 rounded-lg  text-center shadow-factCarts ">
          <div className="text-[#63A486] text-6xl mb-4">
            <FaHandHoldingHeart />
          </div>
          <div className="text-4xl font-bold mb-2">70%</div>
          <div className="text-2xl text-gray-800">Olumlu etki</div>
          <div className="text-lg text-center text-gray-700">
            Kullanıcıların %70'i 6 uygulamadan sonra bile olumlu etkiler
            görüyor**
          </div>
        </div>

        <div className="bg-white flex flex-col justify-center items-center p-6 rounded-lg text-center shadow-factCarts ">
          <div className="text-[#BFA55E] text-6xl mb-4">
            <FaGlobe />
          </div>
          <div className="text-4xl font-bold mb-2">50</div>
          <div className="text-2xl text-gray-800">Ülke</div>
          <div className="text-lg text-center text-gray-700">
            Healy™ teknolojisi 50'den fazla ülkede kullanılıyor.
          </div>
        </div>

        <div className="bg-white flex flex-col justify-center items-center p-6 rounded-lg  text-center shadow-factCarts ">
          <div className="text-[#95B4C5] text-6xl mb-4">
            <FaUsers />
          </div>
          <div className="text-4xl font-bold mb-2">2,500</div>
          <div className="text-2xl text-gray-800">Uygulayıcılar</div>
          <div className="text-lg text-center text-gray-600">
            Her gün 2.500'den fazla uygulayıcı Healy teknolojisini kullanıyor.
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center p-6 rounded-lg text-center shadow-factCarts ">
          <div className="text-[#425275] text-6xl mb-4">
            <FaMobileAlt />
          </div>
          <div className="text-4xl font-bold mb-2">100,000,000</div>
          <div className="text-2xl text-gray-800">Uygulamalar</div>
          <div className="text-lg text-center text-gray-700">
            Healy teknolojisi ve teknik bilgisinin 100 milyondan fazla
            uygulaması.
          </div>
        </div>
      </div>
    </div>
  )
}

export default FactsAndFigures
