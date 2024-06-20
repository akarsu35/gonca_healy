import healy from '../data/healy'
import Healy from './Healy'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">Healy Ürünleri</h1>
      <div className="w-[22rem] bg-[#B86BA0] h-2 mb-6 rounded-md"></div>
      <div className="md:ml-5 w-[90%] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:mx-auto">
          {healy.map((h, index) => {
            const { id, name, img } = h
            return (
              <div key={index}>
                <Healy id={id} name={name} img={img} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
