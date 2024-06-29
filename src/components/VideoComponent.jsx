// VideoComponent.jsx
import React from 'react'

const VideoComponent = ({ videoUrl }) => {
  return (
    <div className="flex justify-center items-center shadow-customr rounded-xl  aspect-w-4 aspect-h-3 ">
      <video controls className="rounded-xl saspect-w-4 aspect-h-3 ">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoComponent
