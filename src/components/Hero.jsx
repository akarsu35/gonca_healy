export default function Hero() {
  return (
    <div className="relative w-full h-[100vh] flex items-center  ">
      <div className="absolute top-0 ">
        <div className="relative bg-cover bg-center h-screen text-center flex flex-col justify-center items-center">
          <div className="relative inset-0 bg-black bg-opacity-40 ">
            <h1 className="text-4xl text-[#A78F4F] z-10">
              <span className="text-5xl md:text-6xl font-bold">
                Denge, güven ve rahatlıkla güçlenin; hayatınızı tatmin edici bir
                yolculuğa dönüştürün.
              </span>
            </h1>
          </div>
        </div>
        {/* <img
          src="./images/healy-banner1.png"
          alt=""
          className="rounded-full w-[20rem] "
        /> */}
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
