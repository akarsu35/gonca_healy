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
export default function MagHealyProfessional() {
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <>
      <Helmet>
        <title>MagHealy Professional Edition | Gonca Akarsu</title>
        <meta
          name="description"
          content="MagHealy Professional Edition ile ileri düzey manyetik alan terapisi. Profesyonel kullanım için tasarlanmış, güçlü manyetik terapi cihazı."
        />
        <meta
          name="keywords"
          content="maghealy professional edition, profesyonel manyetik terapi, ileri düzey maghealy"
        />
      </Helmet>
      <div
        key={healy[6].id}
        className="flex w-[90%] min-h-[70vh] mt-10 justify-center"
      >
        <div className="flex w-[90%] flex-col lg:flex-row">
          <div className=" md:mt-10">
            <img
              src={healy[6].img}
              alt={healy[6].name}
              className="w-[150rem] rounded-xl"
            />
          </div>
          <div className="ml-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold my-2">{healy[6].name}</h1>
            </div>
            <Accordion
              open={open === 1}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(1)}>
                Açıklama
              </AccordionHeader>
              <AccordionBody>{healy[6].desc}</AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(2)}>
                Kutu İçeriği
              </AccordionHeader>
              <AccordionBody>{healy[6].delivery}</AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(3)}>
                Teknik Bilgiler
              </AccordionHeader>
              <AccordionBody>{healy[6].tech}</AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              animate={CUSTOM_ANIMATION}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(4)}>
                Riskler & Uyarılar
              </AccordionHeader>
              <AccordionBody>{healy[6].risk}</AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}
