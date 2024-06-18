import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'

export default function NavUp() {
  return (
    <div className="bg-[#B756A0] h-16 flex justify-between px-12">
      {/* socials icons */}
      <div className="flex items-center my-auto text-white space-x-4">
        <div className="bg-white rounded-full p-1">
          <FaFacebook className="text-[#B756A0] text-lg" />
        </div>
        <div className="bg-white rounded-full p-1">
          <FaTwitter className="text-[#B756A0] text-lg" />
        </div>
        <div className="bg-white rounded-full p-1">
          <FaInstagram className="text-[#B756A0] text-lg" />
        </div>
        <div className="bg-white rounded-full p-1">
          <FaYoutube className="text-[#B756A0] text-lg" />
        </div>
      </div>

      {/* phone & email */}
      <div className="text-white flex gap-8 items-center">
        <div className="flex gap-2 items-center">
          <div className="bg-white rounded-full p-1">
            <FaWhatsapp className="text-[#B756A0] text-lg" />
          </div>
          <a href="https://wa.me/905510141450" className="text-white">
            0551 014 14 50
          </a>
        </div>

        <div className="flex gap-2 items-center">
          <div className="bg-white rounded-full p-1">
            <FaEnvelope className="text-[#B756A0] text-lg" />
          </div>
          <a href="mailto:goncaakarsu35@gmail.com" className="text-white">
            goncaakarsu35@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}
