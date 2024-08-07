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
import { Helmet } from 'react-helmet'
export default function Coil() {
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <>
      <Helmet>
        <title>
          Healy Coil: Healy Frekans Terapinizi Güçlendirin | Gonca Akarsu
        </title>

        <meta
          name="description"
          content="Healy Coil ile Healy frekans terapinizi yeni bir seviyeye taşıyın. Etkili frekans iletimi, kolay kullanım ve rahatlık için tasarlandı. Şimdi keşfedin!"
        />

        <meta
          name="keywords"
          content="healy coil, frekans terapisi aksesuarı, healy eklentisi"
        />
      </Helmet>
      <div
        key={healy[7].id}
        className="flex w-[90%] min-h-[70vh] justify-center mt-10"
      >
        <div className="flex flex-col w-[90%] lg:flex-row">
          <div className="md:mt-12">
            <img src={healy[7].img} alt="healy coil" className="w-[30rem]" />
          </div>
          <div>
            <div className="text-center">
              <h1 className="text-4xl font-bold my-2">{healy[7].name}</h1>
            </div>
            <Accordion
              open={open === 1}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(1)}>
                Açıklama
              </AccordionHeader>
              <AccordionBody>{healy[7].desc}</AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(2)}>
                Kutu İçeriği
              </AccordionHeader>
              <AccordionBody>{healy[7].delivery}</AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(3)}>
                <h3>Teknik Özellikler</h3>
              </AccordionHeader>
              <AccordionBody>{healy[7].tech}</AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(4)}>
                Riskler & Uyarılar
              </AccordionHeader>
              <AccordionBody>{healy[7].risk}</AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}
