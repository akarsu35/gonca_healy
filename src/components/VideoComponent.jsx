// VideoComponent.jsx
import React from 'react'

const VideoComponent = ({ videoUrl }) => {
  return (
    <div className="flex justify-center items-center shadow-customr rounded-xl  sm:h-96 md:h-[35rem] lg:h-[60rem] ">
      <video controls className="rounded-xl sm:h-96 md:h-[35rem] lg:h-[60rem] ">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoComponent
