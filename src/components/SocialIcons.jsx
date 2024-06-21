import React from 'react'
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { CiFacebook } from 'react-icons/ci'
import { FaXTwitter } from 'react-icons/fa6'
import { CiYoutube } from 'react-icons/ci'
import { CiLinkedin } from 'react-icons/ci'

const SocialIcons = () => {
  return (
    <div className="flex w-full justify-around items-center">
      {/* <FaTelegram
        className="icon text-blue-400 telegram
                           swing-animation"
      />
      <FaXTwitter
        className="icon text-white twitter 
                           pulse-animation"
      /> */}
      {/* <FaInstagram
        className="icon text-[#B756A0] insta
                           rotate-animation"
      /> */}
      <div className="flex justify-center items-center bg-[#5297C8] bg-opacity-90 w-12 h-12 rounded-full">
        <a
          href="https://www.instagram.com/numeroloji_gonca"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="icon text-[#B756A0] insta swing-animation w-8 h-8 " />
        </a>
      </div>

      {/* <CiFacebook
        className="icon text-blue-500 fb 
                           bounce-animation"
      /> */}
      {/* <FaWhatsapp
        className="icon text-[#5297C8] whatsapp 
                           flash-animation"
      /> */}
      <div className="flex justify-center items-center bg-[#B756A0] bg-opacity-90 w-12 h-12 rounded-full">
        <a href="https://wa.me/905510141450" target="_blank">
          <FaWhatsapp className="icon text-[#5297C8] whatsapp swing-animation w-8 h-8" />
        </a>
      </div>

      {/* <CiYoutube
        className="icon text-red-400 youtube 
                           shake-animation"
      />
      <CiLinkedin
        className="icon text-indigo-400 linkedin 
                           flip-animation"
      /> */}
    </div>
  )
}
export default SocialIcons
