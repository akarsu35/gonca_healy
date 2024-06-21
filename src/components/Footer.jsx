import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Bizi Takip Edin</h2>
        </div>
        <div className="flex  justify-center space-x-6">
          <div className="flex gap-2 mx-4">
            <a
              href="#"
              className="bg-[#B756A0] rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <FaFacebook className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="bg-[#B756A0] rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <FaTwitter className="text-white text-lg" />
            </a>
            <a
              href="#"
              className="bg-[#B756A0] rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="#"
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
              className="text-white hidden md:block"
            >
              0551 014 14 50
            </a>
            <a
              href="mailto:goncaakarsu35@gmail.com"
              className="bg-[#B756A0] rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <FaEnvelope className="text-white text-lg" />
            </a>
            <a
              href="mailto:goncaakarsu35@gmail.com"
              className="text-white hidden md:block"
            >
              goncaakarsu35@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
