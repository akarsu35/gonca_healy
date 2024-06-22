import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import { useState } from 'react'
import HealyGoldEdition from './healy-details/HealyGoldEdition'
import { FlagIcon } from '@heroicons/react/24/outline'
import HealyHolisticEdition from './healy-details/HealyHolisticEdition'



export default function Healy({ id, name, img }) {
  const [showGold, setShowGold] = useState(false)
  const [showHolistic,setShowHolistic]=useState(false)
  const handleClick = (e) => {
    id = e.target.id
    console.log(id)
    if (id == 1) {
      setShowGold(!showGold)
      console.log('gold');
    }
    else if(id==2){
      setShowHolistic(!showHolistic)
      console.log('holistic');
    }
  }

  return (
    <Card className="flex p-2 md:p-0 justify-center items-center mt-6 w-[21rem] hover:shadow-2xl">
      <CardHeader color="blue-gray" className="relative h-72">
        <img src={img} alt={name} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
          {name}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button id={id} onClick={handleClick}>
          ÜRÜNÜ İNCELE
        </Button>
      </CardFooter>
    {
      showGold && <HealyGoldEdition /> 
    }
     {
      showHolistic && <HealyHolisticEdition />
     }
    </Card>
  )
}
