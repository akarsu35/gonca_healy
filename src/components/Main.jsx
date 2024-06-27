
import React, { useState } from 'react'
import InstagramEmbed from './InstagramEmbed'

import VideoComponent from './VideoComponent'
import YouTubeEmbed from './YoutubeEmbed'


export default function Home() {

  const videoUrl ='./images/myvideo.mp4'

  const handleVideoClick = () => {
    setVideoLoaded(true)
  }
  // const videoUrl =
  //   'https://drive.google.com/file/d/1DNiIpVHgcLda_JRUa1Jt5Zz2QAGlzHvL/view?usp=sharing' // Google Drive'dan aldığınız video linki
  return (
    <div className="flex justify-center items-center flex-col mt-8 ">
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">Healy Nedir ?</h1>
      <div className="w-[22rem] bg-[#63A486] h-2 mb-4 rounded-md"></div>
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2">
        <div className="m-4 shadow-customl sm:h-96 md:h-[35rem] lg:h-[60rem] rounded-xl ">
          {/* <YouTubeEmbed embedId="dQw4w9WgXcQ" /> */}
          {/* <HealyDeviceInfo /> */}
          <img
            src="./images/healy.jpeg"
            alt="healy"
            className="rounded-xl w-full sm:h-96 md:h-[35rem] lg:h-[60rem]"
          />
        </div>
        <div className=" p-4 md:mr-2 ">
          <VideoComponent videoUrl={videoUrl} />
          {/* <InstagramEmbed url="https://www.instagram.com/reel/C3kGW7KNTzY/?igsh=a3oxaDE0c3R6OXBy" /> */}
          {/* <GoogleDriveVideo videoUrl={videoUrl} /> */}
        </div>
      </div>
    </div>
  )
}
