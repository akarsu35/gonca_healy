export default function Hero() {
  return (
    <div className="w-full min-h-[600px] flex items-center ">
      <div className="w-72 absolute ml-8 top-36 ">
        <img
          src="./images/healy-banner1.png"
          alt=""
          className="rounded-full w-[20rem] "
        />
      </div>

      <img
        src="./images/hero.jpg"
        alt=""
        className="min-h-[600px] object-cover overflow-hidden"
      />
    </div>
  )
}