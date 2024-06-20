// InstagramEmbed.js
import React, { useEffect } from 'react'

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.instagram.com/embed.js'
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])

  return (
    <div className="flex justify-center items-center shadow-customr">
      <blockquote
        className="instagram-media "
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          width: '100%',
          height: '550px',
        }}
      ></blockquote>
    </div>
  )
}

export default InstagramEmbed
