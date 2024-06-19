import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
export default function Healy({ id, name, img }) {
  return (
    
      <Card className="flex p-2 md:p-0 justify-center items-center mt-6 w-[21rem] hover:shadow-2xl">
        <CardHeader color="blue-gray" className="relative">
         
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>ÜRÜNÜ İNCELE</Button>
        </CardFooter>
      </Card>
    
  )
}
