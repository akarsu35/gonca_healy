import HealyDeviceInfo from './HealyDeviceInfo'
import InstagramEmbed from './InstagramEmbed'
import YouTubeEmbed from './YoutubeEmbed'

export default function Home() {
  return (
    <div className="w-full min-h-[600px] mt-4 flex flex-col md:flex-row">
      <div className="flex p-4 w-[22rem] md:w-[60rem] items-center justify-center">
        {/* <YouTubeEmbed embedId="dQw4w9WgXcQ" /> */}
        <HealyDeviceInfo />
      </div>
      <div className="flex justify-end mr-2 items-center w-[22rem] md:w-[40rem] h-[650px]">
        <InstagramEmbed url="https://www.instagram.com/reel/C55uy34tOQ8/?igsh=MThwbzM1OXdjZG85ag==" />
      </div>
    </div>
  )
}
