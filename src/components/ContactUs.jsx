
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
export default function ContactUs() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_42891ip',
        'template_wrvbani',
        form.current,
        'tC1TW-Wv2iQYsTp_j'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('E-posta başarıyla gönderildi!')
        },
        (error) => {
          console.log(error.text)
          alert('E-posta gönderilirken bir hata oluştu.')
        }
      )
  }

  return (
    <div className="min-h-[72.7vh] bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">İletişim</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Adınız
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-200"
          >
            Gönder
          </button>
        </form>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">
            İletişim Bilgileri
          </h3>
          <p className="text-gray-600 mt-2">
            WhatsApp:{' '}
            <a
              href="https://wa.me/05510141450"
              className="text-blue-500"
              target="_blank"
            >
              05510141450
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            Instagram:{' '}
            <a
              href="https://instagram.com/numeroloji_gonca"
              className="text-blue-500"
              target="_blank"
            >
              @numeroloji_gonca
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            Email:{' '}
            <a
              href="mailto:goncaakarsu35@gmail.com"
              className="text-blue-500"
              target="_blank"
            >
              goncaakarsu35@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}