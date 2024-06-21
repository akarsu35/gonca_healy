import { useEffect, useState } from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'

export default function SocialMediaLeft() {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      // console.log(offset)
      if (offset > 125) {
        // Adjust the value as per your requirement
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
      {isFixed && (
        <div className=" flex flex-col z-10 fixed justify-between top-[50%]">
          {/* socials icons */}

          {/* phone & email */}
          <div className="w-[4rem] bg-[#B756A0] rounded-e-md flex justify-center items-center h-12">
            <a href="https://wa.me/905510141450">
              <FaWhatsapp className="text-white text-[2.25rem]" />
            </a>
            <a
              href="https://wa.me/905510141450"
              className="text-white hidden md:block"
            ></a>
          </div>
          <div className="w-[3.5rem] bg-[#5297C8] rounded-e-md flex justify-center items-center h-12">
            <a
              href="https://www.instagram.com/numeroloji_gonca" // Instagram profilinizin URL'sini buraya ekleyin
              target="_blank" // Bağlantının yeni bir sekmede açılması için
              rel="noopener noreferrer" // Güvenlik için
              aria-label="Instagram"
            >
              <FaInstagram className="text-white text-[2rem]" />
            </a>
          </div>
          <div className="w-[3rem] bg-[#BFA55E] rounded-e-md flex justify-center items-center h-12">
            <a href="mailto:goncaakarsu35@gmail.com">
              <FaEnvelope className="text-white text-[1.75rem]" />
            </a>
            <a href="mailto:goncaakarsu35@gmail.com"></a>
          </div>
        </div>
      )}
    </div>
  )
}
