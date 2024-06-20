import HealyDeviceInfo from './HealyDeviceInfo'
import InstagramEmbed from './InstagramEmbed'
import YouTubeEmbed from './YoutubeEmbed'

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col mt-8">
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">Healy Nedir ?</h1>
      <div className="w-[22rem] bg-[#63A486] h-2 mb-4 rounded-md"></div>
      <div className="w-[95%] min-h-[600px] mt-4 flex flex-col md:flex-row items-center justify-center">
        <div className="flex w-[20rem] md:w-[60rem] items-center justify-center m-4 shadow-customl">
          {/* <YouTubeEmbed embedId="dQw4w9WgXcQ" /> */}
          {/* <HealyDeviceInfo /> */}
          <img
            src="./images/healy.jpeg"
            alt="healy"
            className="rounded-xl w-full"
          />
        </div>
        <div className="flex p-4 md:mr-2 items-center justify-center bg-opacity-90 w-[20rem] md:w-[50rem] rounded-xl">
          <InstagramEmbed url="https://www.instagram.com/reel/C55uy34tOQ8/?igsh=MThwbzM1OXdjZG85ag==" />
        </div>
      </div>
    </div>
  )
}
