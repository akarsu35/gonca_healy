import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
}
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

import healy from '../../data/healy'
export default function HealyGoldEdition() {
  //   return (
  //     <div>
  //       {healy.map((h) => {
  //         const {id,img,name,desc,delivery,tech,risk}=h
  //         return (
  //           <div key={id} className="flex">
  //             <div>
  //               <img src={img} alt={name} />
  //             </div>
  //             <div className="flex">
  //               <h2>{name}</h2>
  //               <p>Açıklama: {desc}</p>
  //               <p>Kutu İçeriği: {delivery}</p>
  //               <p>Teknik Bilgiler: {tech}</p>
  //               <p>Riskler & Uyarılar: {risk}</p>
  //             </div>
  //           </div>
  //         )
  //       })}
  //       <div key={healy[0].id} className="flex w-[90%]">
  //         <div>
  //           <img src={healy[0].img} alt={healy[0].name} className="w-[280rem]" />
  //         </div>
  //         <div className="flex">
  //           <h2>{healy[0].name}</h2>
  //           <p>Açıklama: {healy[0].desc}</p>
  //           <p>Kutu İçeriği: {healy[0].delivery}</p>
  //           <p>Teknik Bilgiler: {healy[0].tech}</p>
  //           <p>Riskler & Uyarılar: {healy[0].risk}</p>
  //         </div>
  //       </div>
  //     </div>

  //   )
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <>
      <div key={healy[0].id} className="flex w-[90%] min-h-[70vh] mt-10 justify-center">
        <div className="flex w-[90%] flex-col lg:flex-row">
          <div className=' mr-10'>
            <img src={healy[0].img} alt={healy[0].name} className="w-[90rem] rounded-xl " />
          </div>
          <div>
            <Accordion
              open={open === 1}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(1)}>
                Açıklama
              </AccordionHeader>
              <AccordionBody>{healy[0].desc}</AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(2)}>
                Kutu İçeriği
              </AccordionHeader>
              <AccordionBody>{healy[0].delivery}</AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(3)}>
                Teknik Bilgiler
              </AccordionHeader>
              <AccordionBody>{healy[0].tech}</AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(4)}>
                Riskler & Uyarılar
              </AccordionHeader>
              <AccordionBody>{healy[0].risk}</AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}
