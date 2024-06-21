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
        <a
          href="#"
          className="bg-white rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          <FaFacebook className="text-[#B756A0] text-lg" />
        </a>
        <a
          href="#"
          className="bg-white rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          <FaTwitter className="text-[#B756A0] text-lg" />
        </a>
        <a
          href="https://www.instagram.com/numeroloji_gonca" // Instagram profilinizin URL'sini buraya ekleyin
          target="_blank" // Bağlantının yeni bir sekmede açılması için
          rel="noopener noreferrer" // Güvenlik için
          className="bg-white rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          aria-label="Instagram"
        >
          <FaInstagram className="text-[#B756A0] text-lg" />
        </a>
        <a
          href="#"
          className="bg-white rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          <FaYoutube className="text-[#B756A0] text-lg" />
        </a>
      </div>

      {/* phone & email */}
      <div className="text-white flex gap-4 md:gap-8 items-center">
        <div className="flex gap-2 items-center">
          <a
            href="https://wa.me/905510141450"
            className="bg-white rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            <FaWhatsapp className="text-[#B756A0] text-lg" />
          </a>
          <a
            href="https://wa.me/905510141450"
            className="text-white hidden md:block"
          >
            0551 014 14 50
          </a>
        </div>

        <div className="flex gap-2 items-center">
          <a
            href="mailto:goncaakarsu35@gmail.com"
            className="bg-white rounded-full p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          >
            <FaEnvelope className="text-[#B756A0] text-lg" />
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
  )
}
