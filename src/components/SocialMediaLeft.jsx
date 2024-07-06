import { useEffect, useState } from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa'
import { SiBiolink } from 'react-icons/si'
import '../App.css'
import SocialIcons from './SocialIcons'
import './animate.css'

import { BsInfoCircleFill } from 'react-icons/bs'
export default function SocialMediaLeft() {
  const [isFixed, setIsFixed] = useState(true)
   const [open, setOpen] = useState(false)

   const handleClick = () => {
     setOpen((prev) => !prev)
     console.log(open)
   }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY
  //     // console.log(offset)
  //     if (offset >= -1) {
  //       // Adjust the value as per your requirement
  //       setIsFixed(true)
  //     } else {
  //       setIsFixed(false)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])
  return (
    <>
      {isFixed && (
        <div>
          <div className="flex flex-col z-10 fixed justify-between top-[55%]">
            {/* socials icons */}

            {/* phone & email & refferal link*/}
            {/* <div className="w-[4.5rem] bg-green-700 rounded-e-md flex justify-center items-center h-12 hover:w-[6rem] duration-300">
              <a
                href="https://eu.healy.shop/?partnername=6020-9879-1624"
                className="text-white swing-animation text-center"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Healy Referans Linki"
              >
                Referans Link
              </a>
            </div>
            <div className="w-[4rem] bg-[#B756A0] rounded-e-md flex justify-center items-center h-12 hover:w-[6rem] duration-300">
              <a
                href="https://wa.me/905510141450"
                target="_blank"
                aria-label="WhatsApp ile iltişime geçin"
              >
                <FaWhatsapp className="text-white text-[2.25rem] swing-animation" />
              </a>
            </div>
            <div className="w-[3.5rem] bg-[#5297C8] rounded-e-md flex justify-center items-center h-12 hover:w-[6rem] duration-300">
              <a
                href="https://www.instagram.com/numeroloji_gonca" // Instagram profilinizin URL'sini buraya ekleyin
                target="_blank" // Bağlantının yeni bir sekmede açılması için
                rel="noopener noreferrer" // Güvenlik için
                aria-label="Instagram sayfamızı ziyaret et"
              >
                <FaInstagram className="text-white text-[2rem] swing-animation" />
              </a>
            </div>

            <div className="w-[3rem] bg-[#BFA55E] rounded-e-md flex justify-center items-center h-12 hover:w-[6rem] duration-300">
              <a
                href="mailto:goncaakarsu35@gmail.com"
                aria-label="E-posta gönder"
              >
                <FaEnvelope className="text-white text-[1.75rem] swing-animation" />
              </a>
            </div> */}

            {/* social animated */}
            <div>
              <div className="flex justify-center items-center ml-4  ">
                <div className="relative animate-pings w-12 h-12 bg-red-500 rounded-full top-6"></div>
                <button
                  className="absolute bg-blue-500 text-white font-bold w-12 h-12 rounded-full top-6 focus:outline-none z-10 "
                  onClick={handleClick}
                >
                  İnfo
                </button>
              </div>

              <div
                className={`relative transition-all duration-500  ${
                  open ? 'scale-100 ' : 'scale-0'
                } transform origin-center absolute inset-0 flex justify-center items-center`}
              >
                <div className="absolute -top-20 left-2 animate-bounce bg-green-700 rounded-full w-12 h-12">
                  <a
                    href="https://eu.healy.shop/?partnername=6020-9879-1624"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Healy Referans Linki"
                  >
                    <SiBiolink className="text-white text-[2rem] m-2" />
                  </a>
                </div>
                <div className="absolute -top-14 left-16 rounded-full w-12 h-12 animate-bounce bg-[#B756A0]  ">
                  <a
                    href="https://wa.me/905510141450"
                    target="_blank"
                    aria-label="WhatsApp ile iletişime geçin"
                  >
                    <FaWhatsapp className="text-white text-[2.25rem] m-1.5 " />
                  </a>
                </div>
                <div className="absolute -right-14 top-3 w-12 h-12 animate-bounce bg-[#5297C8] rounded-full">
                  <a
                    href="https://www.instagram.com/numeroloji_gonca" // Instagram profilinizin URL'sini buraya ekleyin
                    target="_blank" // Bağlantının yeni bir sekmede açılması için
                    rel="noopener noreferrer" // Güvenlik için
                    aria-label="Instagram sayfamızı ziyaret et"
                  >
                    <FaInstagram className="text-white text-[2rem] m-2" />
                  </a>
                </div>
                <div className="absolute -bottom-24 left-2 w-12 h-12 animate-bounce bg-[#BFA55E] rounded-full">
                  <a
                    href="mailto:goncaakarsu35@gmail.com"
                    aria-label="E-posta gönder"
                  >
                    <FaEnvelope className="text-white text-[1.75rem]  m-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="fixed bottom-32 w-full flex justify-around z-20 space-y-2 lg:hidden"> */}
          {/* animation social icons */}

          {/* <SocialIcons /> */}

          {/* <div className="w-16 bg-[#B756A0] rounded-full flex justify-center items-center h-16">
              <a href="https://wa.me/905510141450">
                <FaWhatsapp className="text-white text-[2.25rem]" />
              </a>
              <a
                href="https://wa.me/905510141450"
                className="text-white hidden md:block"
              ></a>
            </div> */}

          {/* <div className="w-16 bg-[#5297C8] rounded-full flex justify-center items-center h-16">
              <a
                href="https://www.instagram.com/numeroloji_gonca" // Instagram profilinizin URL'sini buraya ekleyin
                target="_blank" // Bağlantının yeni bir sekmede açılması için
                rel="noopener noreferrer" // Güvenlik için
                aria-label="Instagram"
              >
                <FaInstagram className="text-white text-[2rem]" />
              </a>
            </div> */}
          {/* </div> */}
        </div>
      )}
    </>
  )
}
