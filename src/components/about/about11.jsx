import OurGallery from '../ourGallery/ourgallery';
import './about.css';
import About22 from './about2';
// import { orphanage } from "../assests/assest";
import { motion } from "framer-motion";

export default function About1(){
    return(
        <div className="flex  flex-col items-center">
          <OurGallery/>
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
              className="text-white text-3xl  ml-5 lg:text-6xl uppercase ">
                            About
                        </motion.h1>
            {/* <div className='  items-center justify-center p-72 w-screen h-screen'>
                <div className="relative top-14  items-center justify-center">
                    <div className=" gap-12 flex items-center ">
                        <h1 className=" text-3xl  lg:text-6xl uppercase ">
                            our orphanage is here to bring happiness to the community
                        </h1>
                    </div>
                </div>
            </div> */}
            <ul className='w-3/5 grid gap-8 place-content-center'>
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
                          delay: 0.8,
                        },
                      }}
                    //   viewport={{ once: true, direction: "down" }} 
                    className='text-center text-5xl font-extrabold text-blue-900 '>Introduction</motion.h1>
                    <motion.p
                     initial={{
                        opacity: 0,
                        y: 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 1,
                          delay: 0.7,
                        },
                      }}
                      viewport={{ once: true, direction: "down" }} 
                     className='text-center text-xl text-blue-900'>
                                    Living Word of God Faith-Based Organization was
                        established on March 4, 2008. The organization's primary
                        objective is to assist orphans, vulnerable children, widows,
                        the elderly, people with disabilities, and those living with
                        HIV/AIDS in their day-to-day socio-economic lives.

                    </motion.p>
                    <motion.p
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
                     className='text-center text-xl text-blue-900'>
                    Pastor James, the founder, is driven by a deep sense of
                    compassion an d a fervent desire to make a positive impact
                    on the lives of those in need. His personal journey began
                    when he lost both parents at a youn g age, a circu mstan ce
                    that occurred before he embraced Jesus Christ as his Lord
                    and Savior. This tragic event left him in a state of stagnation,
                    facing the harsh realities of life. The absence of parental
                    support plunged him into the challenging life of an orphan, a
                    truly miserable existence.

                    </motion.p>
                    <motion.p
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
                     className='text-center text-xl text-blue-900'>
                    As the saying goes, experience is the best teacher, and
                    pastor James learned a bitter lesson from the hardships he
                    endured. His firsthand experience fueledh is empathy for
                    fellow children who, like him, were living without the love
                    and care of parents. James recognized the gravity of their
                    situation, acknowledging it as a tough an d seemin gly
                    hopeless one.

                    </motion.p>
                    <motion.p
                     initial={{
                        opacity: 0,
                        y: 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 1,
                          delay: 1.0,
                        },
                      }}
                      viewport={{ once: true, direction: "down" }} 
                     className='text-center text-xl text-blue-900'>
                    Motivated by his own struggles, pastor James initiated
                    efforts to uplift needy and vulnerable ch ldren b y providing
                    part-time lessons to enhance their education. All these
                    endeavors were voluntary, reflecting h is gradual progression
                    towards realizing h is dream of bein g there to help those in
                    need. It's important to note that at this point, Pastor James
                    had not yet become a born-again Christian.

                    </motion.p>
                    <motion.p 
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
                    className='text-center text-xl text-blue-900'>
                    Years later, after embracing Jesus Christ as his Lord and
                    Savior, Pastor James established a ministry alongside the
                    orphanage. Over 2 0 children were already benefiting from
                    h is compassion ate endeavors. Subsequntly, widows, the
                    elderly, people with disabilities, an d those living with
                    HIV/AIDS were also introduced to the organization's support
                    network. The outreach expanded, reflecting the
                    organization's commitment to making a positive impact on
                    the lives of the less fortunate. and its still expanding to this
                    date.

                    </motion.p>
            </ul>
           
            <About22/>

       </div>
    )
}
