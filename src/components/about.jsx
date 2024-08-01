import { motion } from "framer-motion";
import { partenership } from "../assets/assest";
import Lottie from "lottie-react";
import { Button, Card } from "flowbite-react";


export default function About(){
  const partnerData = [
    {
      partnertitle : 'BoNgo',
      btn: 'visit Bongo',
      partContent: 'BoNgo p lays a crucial role in supporting our organization through specialized teacher-training programs, enriching the skills and capabilities of our educators. Additionally, they contribute significantly b providing essential learning materials, enhancing the educational experience for our beneficiaries.',
    },
    {
      partnertitle : 'Montessori',
      btn: 'visit Montessori',
      partContent: 'Montessori stand s as a valuab le strategic partner, actively engaging in our mission of child spiritual emp owerment. Through seminars organized for our teachers, Montessori not only equips them spiritually but also ensures the transfer of this valuable knowledge to the children under our care. Their collaboration enhances our holistic approach to nurturing the spiritual well-being of the children we serve.',
    }
  ]
  return(
      <div className="  mt-9 h-3xl flex  flex-col items-center">
        <div className="grid lg:flex justify-between lg:gap-16">
            <motion.h1
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 0.6,
                  },
                }}
                viewport={{ once: true, direction: "down" }} 
                    className=' text-4xl lg:text-6xl font-bold lg:mt-20 text-blue-900 text-center'>Strategic <br/> Partners</motion.h1>
     
              <Lottie animationData={partenership} loop={true} className="w-96 h-80" />
           
        </div>
        <motion.div 
         initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            delay: 0.8,
          },
        }}
        viewport={{ once: true, direction: "down" }} 
        className="grid lg:grid-cols-2 gap-32 place-content-center">
          {partnerData.map((activi, index) =>(

              <Card key={index} className="max-w-96 lg:max-w-sm shadow-lg">
              {/* {activi.btnIcon} */}
                <h5 className="text-md top-5 text-center  lg:text-3xl font-bold tracking-tight text-blue-900 dark:text-white">
                {activi.partnertitle}
                </h5>
                <p className="font-normal t dark:text-gray-400">
                {activi.partContent}
                </p>
                <Button color="failure">
                  {activi.btn}

                </Button>
              </Card>
              ))}

        </motion.div>
          
          

           
      </div>
  )
}
