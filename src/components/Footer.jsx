import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'
import Warning from './Warning'
import { Helmet } from 'react-helmet'

const Footer = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Gonca Akarsu, Healy frekans terapisi ve enerji dengeleme alanında uzmanlaşmış bir sağlık danışmanıdır."
        />
        <meta
          name="keywords"
          content="gonca akarsu, healy, frekans terapisi, enerji dengeleme, sağlık danışmanı"
        />
      </Helmet>
      <footer className="flex flex-col justify-center items-center bg-gray-900 text-white py-8">
        <div className="container text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Bizi Takip Edin</h2>
          </div>
          <div className="flex  justify-center space-x-6">
            <div className="flex gap-2 mx-4">
              <a
                href="#"
                aria-label="Facebook sayfamızı ziyaret et"
                className="bg-[#B756A0] rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <FaFacebook className="text-white text-lg" />
              </a>
              <a
                href="#"
                aria-label="Twitter sayfamızı ziyaret et"
                className="bg-[#B756A0] rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <FaTwitter className="text-white text-lg" />
              </a>
              <a
                href="https://www.instagram.com/numeroloji_gonca" // Instagram profilinizin URL'sini buraya ekleyin
                target="_blank" // Bağlantının yeni bir sekmede açılması için
                rel="noopener noreferrer" // Güvenlik için
                className="bg-[#B756A0] rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                aria-label="Instagram sayfamızı ziyaret et"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a
                href="#"
                aria-label="YouTube kanalımızı ziyaret et"
                className="bg-[#B756A0] rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <FaYoutube className="text-white text-lg" />
              </a>
            </div>
            <div className="flex gap-2">
              <a
                href="https://wa.me/905510141450"
                className="bg-[#B756A0] rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>
              <a
                href="https://wa.me/905510141450"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hidden md:block"
                aria-label="WhatsApp ile iletişime geç"
              >
                0551 014 14 50
              </a>
              <a
                href="mailto:goncaakarsu35@gmail.com"
                aria-label="E-posta gönder"
                className="bg-[#B756A0] rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <FaEnvelope className="text-white text-lg" />
              </a>
              <a
                href="mailto:goncaakarsu35@gmail.com"
                className="text-white hidden md:block"
                aria-label="E-posta gönder"
              >
                goncaakarsu35@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 text-center">
          <Warning />
        </div>
      </footer>
    </>
  )
}

export default Footer
