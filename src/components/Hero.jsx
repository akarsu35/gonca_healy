export default function Hero() {
  return (
    <div className="relative w-full h-[100vh] flex items-center  ">
      <div className="w-72 absolute ml-8 top-0 ">
        <img
          src="./images/healy-banner1.png"
          alt=""
          className="rounded-full w-[20rem] "
        />
      </div>
<div></div>
      <img
        src="./images/hero.jpg"
        alt=""
        className="h-[100vh] object-cover overflow-hidden"
      />
    </div>
  )
}
