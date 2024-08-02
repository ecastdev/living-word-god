// import orphanage from './assests/assest';
import { studentgiving } from '../assets/assest';
import './components.css';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import header from './bg1.png';


export default function Header(){
    return(
        <div className="flex  flex-col">

         <div className='header flex  p-32 lg:p-12 w-screen h-screen'>
                <div className=" relative  gap-10 flex flex-col lg:flex-row   items-center ">
                    <div className="flex flex-col w-3/4   ">
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
                 className="mt-44 text-center font-bigfont text-4xl lg:text-6xl w-full uppercase  ">
                  
                           Together! We can cast light on the Path to a 
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
           className="text-rose-800 lg:ml-16 lg:text-center font-bigfont text-3xl lg:text-6xl w-full uppercase ">
                                        <Typewriter
                              options={{
                                strings: ['Brighter Tomorrow'],
                                autoStart: true,
                                loop: true,
                              }}
                            />
                              
                        </motion.h1>
                        {/* button */}
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
                          className="bg-rose-900 rounded-lg lg:mt-7 p-3 w-full  text-rose-400 hover:bg-white hover:text-rose-900"> Join COMMUNITY</motion.button>
                    {/* <Lottie animationData={studentgiving} loop={true} className="w-full h-full " /> */}
                    <motion.div 
                    initial={{
                       opacity: 0,
                       y: 50,
                     }}
                     whileInView={{
                       opacity: 1,
                       y: 0,
                       transition: {
                         duration: 1,
                         delay: 1.3,
                       },
                     }}
                     viewport={{ once: true, direction: "down" }} 
                    className=' w-screen  lg:w-3/5 pt-7  '>
                            <p className=' text-center font-extrabold'>
                            Since 2008
                            </p>
                            <p className='  lg:text-center '>
                            Religion that God our Father
                            accepts as pure and faultless is
                            this: to look after orphans and
                            widows in their distress and to
                            keep oneself from being polluted
                            by the world. James 1:27 (NIV)
                            </p>

                    </motion.div>
                       

                       
                    </div>
                    <div>
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
                         delay: 1.4,
                       },
                     }}
                     viewport={{ once: true, direction: "down" }} 
                       src={header} alt='header' className=' h-screen '/>

                    </div>
                    
               
            

                </div>
         </div>
        </div>
    )
}
