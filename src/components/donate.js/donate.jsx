import { airtelMoney, mpamba, paypal } from "../../assets/assest"
import Donate22 from "./donate22";
import { motion } from "framer-motion";

export default function Donate(){
    const DonateData = [
        {
            title:'Educational Sponsorsh ip',
            subt: 'Address the lack of learning and playing materials for the children by sponsoring educational resources, including books, stationery, and play equipment. Your support will contribute to a more enriching andconducive learning environment for the children.'
        },
        {
            title:'Operational Funding Support',
            subt: 'Help overcome the challenge of insufficient funds for running the organization by sponsoring operational costs. This support can cover expenses related to maintaining facilities, utilities, administrative needs, and other crucial aspects that keep the organization operational and effective.'
        },
        {
            title:'Kitchen and Cooking Supplies Sponsorship',
            subt: 'Alleviate the shortage of cooking materials by sponsoring kitchen supplies. This could include utensils, cookware, and ingredients, ensuring that the organization can provide nutritious meals to those it serves. Your sponsorship in this area directly impacts the overall well-being of the community.'
        },
        {
            title:'Teacher Training and Recruitment Sponsorship',
            subt: "Tackle the shortage of teachers by sponsoring teacher training programs and recruitment initiatives. Your support will enhance the organization's capacity to provide quality education and mentorship to the children, fostering their development and growth."
        }
    ]
    return(
        <div className="flex flex-col lg:flex-row mb-32">
                <div className="flex mt-52 items-center flex-col ">
                <ul className="grid place-content-center">
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
                     className="text-5xl lg:text-7xl text-rose-800  uppercase font-bigfont text-center">
                        Opportunities for Sponsoship
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
                          delay: 0.6,
                        },
                      }}
                      viewport={{ once: true, direction: "down" }} 
                    className=" text-center  w-3/4 mt-8">
                    In the journey of our organization, challenges emerge as
                    silent opportunities, beckoning you to lead your life in
                    alignment with the profound wisdom of James 1:27.
                    </motion.p>

                </ul>
                <div className="grid gap-10 mt-5 place-content-center lg:w-3/4 ">
                    {DonateData.map((doData) =>(
                        <motion.ul 
                        initial={{
                            opacity: 0,
                            y: 50,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 1,
                              delay: 0.8,
                            },
                          }}
                          viewport={{ once: true, direction: "down" }} 
                        className="bg-blue-600 rounded-lg lg:w-3/5  shadow-lg">
                                <h1 className="text-rose-950 text-3xl font-bigfont font-extrabold pt-9 text-center ">
                                    {doData.title}
                                </h1>
                                <p className="pt-6 text-white text-center">
                                    {doData.subt}
                                </p>
                                
                        </motion.ul>
                    
                    ))}
                    
                    

                </div>
              
                
            
            </div>
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
                  delay: 1.1,
                },
              }}
              viewport={{ once: true, direction: "down" }} 
            className=" mt-20 lg:mt-80 lg:absolute lg:right-72 mb-20">
              <Donate22/>
              <ul className=" mt-16 ml-10 lg:ml-0 lg:mt-5 flex gap-6">
                <img src={paypal} alt='logo' className="w-20 h-20"/>
                <img src={airtelMoney} alt='logo' className="w-20 h-20"/>
                <img src={mpamba} alt='logo' className="w-20 h-20"/>

              </ul>
              
             

            </motion.div>
            <motion.h2
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
             className="text-center mt-9 font-title">
                To gether!
            We can cast light
            on the Path to a
            Brighter
            Tomorrow
            </motion.h2>

            
            

        </div>
        
    )
}