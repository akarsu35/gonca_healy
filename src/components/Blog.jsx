import { Link } from 'react-router-dom'
import blogs from '../data/blogData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import UnderConstruction from './UnderConstruction'

function Blog() {
  const handleClick = (e) => {
    console.log('Button clicked', e.target.id)
  }

  const [open,setOpen]=useState(true)//blog tamamlanmadığı için öncesinde "sayfa yapım aşamasında" kısmı çıkacak
  return (
    <div className="min-h-[63vh]">
      {open ? <UnderConstruction/> : (
        <div className="flex gap-12 flex-wrap justify-center items-center my-10">
          {blogs.map((blog, index) => {
            const { id, title, content, author, date, path } = blog

            return (
              <div
                className="relative group" // Add 'group' class for handling hover effects
                key={index}
              >
                <div className="absolute bottom-[45%] left-[25%] text-white font-semibold text-xl z-10 w-48 h-12 bg-blue-900 flex justify-center items-center rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button id={id} onClick={(e) => handleClick(e)}>
                    <Link to={path}>
                      <p className="flex justify-center items-center gap-2">
                        Devam Et <FontAwesomeIcon icon={faArrowRight} />{' '}
                      </p>
                    </Link>
                  </button>
                </div>

                <div className="relative max-w-96 h-[28rem] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <div>
                  <div className="absolute bottom-16 flex gap-10 ml-4 justify-center items-center">
                    <div className="text-gray-400">
                      <p>{date}</p>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-gray-400">
                      <img
                        src="./images/avatar.png"
                        alt="avatar"
                        className="w-12 rounded-full"
                      />

                      <p>{author}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-8 ml-4 text-gray-200 text-xl font-semibold">
                    <p>{content}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default Blog
