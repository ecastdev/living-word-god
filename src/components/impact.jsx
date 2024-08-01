import { motion } from "framer-motion";
import attachImg from './ourGallery/orp333.jpeg';
import { CommuteTwoTone,} from "@mui/icons-material"

export default function Impact(){
    return(
        // <div className="">
             <div className="grid place-content-center w-full lg:w-screen bg-rose-900 h-3/5 gap-20 lg:gap-60 mt-96 lg:mt-2 lg:pt-4 pt-10   lg:grid-flow-col">
                  <div className="max-w-96">
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
                          delay: 1.6,
                        },
                      }}
                      viewport={{ once: true, direction: "down" }} 

                      className="text-blue-700  text-center text-3xl lg:text-7xl font-bold">
                        <CommuteTwoTone fontSize="large" color="primary"/>  Community Impact
                      </motion.h1>
                      <motion.p
                      initial={{
                        opacity: 0,
                        x: 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 1,
                          delay: 1.7,
                        },
                      }}
                      viewport={{ once: true, direction: "down" }} 
                      className=" mt-10 text-xl font-light text-blue-200 text-center">
                      Currently, free education and
                        food is still being provided at
                        our center to 76 children.
                        our efforts have expanded to
                        benefit over 1 0 0 0
                        beneficiaries across 7
                        surrounding villages.
                        These villages include
                        Chakana, Matope, Mtambalika,
                        Mlanga, and more.
                        Most of our activities have
                        received coverage from various
                        local media outlets, including
                        television stations, radio
                        stations, and newspapers,
                        highlighting the impact and
                        reach of our initiatives.
                      </motion.p>


                  </div>
                  <motion.img
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                      delay: 1.7,
                    },
                  }}
                  viewport={{ once: true, direction: "down" }} 
                  src={attachImg} alt="attachments" className="rounded-lg h-full w-3xl "/>

            </div>

        // </div>
       
    )
}