// import orphanage from './assests/assest';
import { studentgiving } from '../assets/assest';
import './components.css';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import header from './bg1.png';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { Facebook, Google } from '@mui/icons-material';



export default function Header(){
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);
    return(
        <div className="flex  flex-col">

         <div className='header flex  p-6 lg:p-12 w-screen h-screen'>
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
                 className=" mt-72 lg:mt-44 text-white text-center font-bigfont text-4xl lg:text-6xl w-full uppercase  ">
                  
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
                        <Button
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
                         onClick={() => setOpenModal(true)}
                         className="bg-rose-900 rounded-lg lg:mt-7 p-3 w-full  text-rose-400 hover:bg-white hover:text-rose-900"
                         >Join Community</Button>
                          <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
                            <Modal.Header />
                            <Modal.Body>
                              <div className="space-y-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Join to our Community</h3>
                                <div>
                                  <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" />
                                  </div>
                                  <TextInput id="email" ref={emailInputRef} placeholder="name@company.com" required />
                                </div>
                                <div>
                                  <div className="mb-2 block">
                                    <Label htmlFor="password" value="Your password" />
                                  </div>
                                  <TextInput id="password" type="password" required />
                                </div>
                                <div className="flex justify-between">
                                  <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Remember me</Label>
                                  </div>
                                  <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                                    Lost Password?
                                  </a>
                                </div>
                                <div className="w-full">
                                  <Button>Log in to your account</Button>
                                </div>
                                <p className='text-center font-bold'>Instead join using</p>
                                <div className="flex justify-center text-sm font-extrabold text-gray-500 dark:text-gray-300">
                                      <Facebook fontSize='large' color='primary'/> 
                                      <Google fontSize='large'/>
                                </div>

                              </div>
                            </Modal.Body>
                          </Modal>
                      
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
                            <p className=' text-white  text-center font-extrabold'>
                            Since 2008
                            </p>
                            <p className=' text-white  lg:text-center '>
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
                       src={header} alt='header' className=' lg:mt-14 h-screen hidden lg:block '/>

                    </div>
                    
               
            

                </div>
         </div>
        </div>
    )
}
