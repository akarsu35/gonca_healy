// YouTubeEmbed.js
import React from 'react'

const YouTubeEmbed = ({ embedId }) => {
  return (
    <div className="relative overflow-hidden pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 h-[600px] w-96 "
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube Video"
      />
    </div>
  )
}

export default YouTubeEmbed
