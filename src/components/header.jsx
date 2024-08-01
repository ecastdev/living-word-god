// import orphanage from './assests/assest';
import { studentgiving } from '../assets/assest';
import './components.css';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Typewriter from 'typewriter-effect';


export default function Header(){
    return(
        <div className="flex  flex-col items-center">

         <div className='header  items-center justify-center p-32 lg:p-72 w-screen h-screen'>
                <div className="relative top-10 flex   items-center justify-between">
                    <div className="grid gap-12">
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
                 className="text-white text-2xl lg:text-6xl  font-title ">
                  
                           Together! We can cast light on <span className='text-center ml-20' >the Path to a </span> 
                        </motion.h1>

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
                           delay: 0.9,
                         },
                       }}
                       viewport={{ once: true, direction: "down" }} 
           className="text-blue-800 ml-16 lg:ml-32 font-bigfont text-4xl lg:text-8xl uppercase ">
                                        <Typewriter
                              options={{
                                strings: ['Brighter Tomorrow'],
                                autoStart: true,
                                loop: true,
                              }}
                            />
                              
                        </motion.h1>
                        <div className='w-screen  lg:w-3/5  lg:ml-32'>
                            <p className=' text-white text-center font-extrabold'>
                            Since 2008
                            </p>
                            <p className=' text-white text-center '>
                            Religion that God our Father
                            accepts as pure and faultless is
                            this: to look after orphans and
                            widows in their distress and to
                            keep oneself from being polluted
                            by the world. James 1:27 (NIV)
                            </p>

                    </div>

                        <motion.button
                        initial={{
                       opacity: 0,
                       y: 50,
                     }}
                     whileInView={{
                       opacity: 1,
                       y: 0,
                       transition: {
                         duration: 1,
                         delay: 1.2,
                       },
                     }}
                     viewport={{ once: true, direction: "down" }} 
                          className="bg-blue-900 rounded-lg p-2 text-rose-400 hover:bg-white hover:text-rose-900"> Join COMMUNITY</motion.button>
                    </div>
                    {/* <Lottie animationData={studentgiving} loop={true} className="w-full h-full " /> */}
                    {/* <div>
                      <p className=' text-white text-center font-extrabold'>
                      Since 2008
                      </p>
                      <p className=' text-white text-center '>
                      Religion that God our Father
                      accepts as pure and faultless is
                      this: to look after orphans and
                      widows in their distress and to
                      keep oneself from being polluted
                      by the world. James 1:27 (NIV)
                      </p>

                    </div> */}

                </div>
         </div>
        </div>
    )
}
