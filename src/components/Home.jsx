import HealyDeviceInfo from './HealyDeviceInfo'
import InstagramEmbed from './InstagramEmbed'
import YouTubeEmbed from './YoutubeEmbed'

export default function Home() {
  return (
    <div className="w-full min-h-[600px] flex flex-col md:flex-row">
      <div className="p-4 w-[60rem] h-64">
        {/* <YouTubeEmbed embedId="dQw4w9WgXcQ" /> */}
        <HealyDeviceInfo />
      </div>
      <div className="p-4 w-[60rem]">
        <InstagramEmbed url="https://www.instagram.com/reel/C55uy34tOQ8/?igsh=MThwbzM1OXdjZG85ag==" />
      </div>
    </div>
  )
}
