import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'

import { Link } from 'react-router-dom'

export default function Healy({ id, name, img,path }) {
  // const [showGold, setShowGold] = useState(false)
  // const [showHolistic, setShowHolistic] = useState(false)
  // const [showResonance, setShowResonance] = useState(false)
  // const [showResonancePlus, setShowResonancePlus] = useState(false)
  // const [showProfessional,setProfessional]=useState(false)
  // const [showMagHealyClassic, setShowMagHealyClassic] = useState(false)
  // const [showMagHealyProfessional, setShowMagHealyProfessional] = useState(false)
  // const [showCoil, setShowCoil] = useState(false)


  // const handleClick = (e) => {
  //   id = e.target.id
  //   console.log(id)
  //   if (id == 1) {
  //     setShowGold(!showGold)
  //     console.log('gold')
  //   } else if (id == 2) {
  //     setShowHolistic(!showHolistic)
  //     console.log('holistic')
  //   } else if (id == 3) {
  //     console.log('resonance')
  //     setShowResonance(!showResonance)
  //   } else if (id == 4) {
  //     console.log('resonance plus')
  //     setShowResonancePlus(!showResonancePlus)
  //   }else if(id==5){
  //     console.log('professional')
  //     setProfessional(!showProfessional)
  //   }else if(id==6){
  //     console.log('maghealyclassic')
  //     setShowMagHealyClassic(!showMagHealyClassic)
  //   }else if(id==7){
  //     console.log('maghealyprofessional')
  //     setShowMagHealyProfessional(!showMagHealyProfessional)
  //     }else if(id==8){
  //       console.log('coil')
  //       setShowCoil(!showCoil)
  //     }
  //   }

  return (
    <Card className="flex p-2 md:p-0 justify-center items-center mt-6 w-[21rem] hover:shadow-2xl">
      <CardHeader color="blue-gray" className="relative h-72">
        <img src={img} alt={name} />
      </CardHeader>
      <CardBody>
        <Typography variant="h1" color="blue-gray" className="mb-2 text-center text-xl">
          {name}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        
          <Button>
            <Link to={path}>ÜRÜNÜ İNCELE</Link>
          </Button>
     
      </CardFooter>
      {/* {showGold && <HealyGoldEdition />}
      {showHolistic && <HealyHolisticEdition />}
      {showResonance && <HealyResonanceEdition />}
      {showResonancePlus && <HealyResonancePlusEdition />}
      {showProfessional && <HealyProfessionalEdition/>}
      {showMagHealyClassic && <MagHealyClassic/>}
      {showMagHealyProfessional && <MagHealyProfessional/>}
      {showCoil && <Coil/>} */}
    </Card>
  )
}
