import { motion } from "framer-motion";

export default function About22 (){
    return(
        <div className="grid place-content-center gap-8 pt-20 lg:w-3/5">
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
            className='text-center text-5xl font-extrabold text-blue-900 '>More About us</motion.h1>
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
            className='text-center text-xl  text-blue-950 '>
                        Living Word of God International Assembly Ch u rch and Faith-Based Organization has
            evolved into a beacon of hope and positive change, impacting the lives of over 1 0 0 0
            beneficiaries.

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
             className='text-center text-xl  text-blue-950 '>
            Over the years, our efforts have borne fruit as many children have su ccessfu lly
            graduated to government primary schools. Adding to our initiatives, Pastor James
            Genesis, the driving force behind our organization, initiated a impactful "Back to
            School" campaign. This campaign specifically targeted youth who had dropped out of
            school due to various challenges su ch as pregnancy and poverty. Through this
            campaign, we aimed to break the barriers hindering their education and offer them a
            chance for a brighter future.

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
              viewport={{ once: true, direction: "down" }} className='text-center text-xl  text-blue-950 '>
            Recognizing the need for formal recognition and accountability, the orphanage
            affiliated with our organization took the significant step of registering with the Blantyre
            City Council. This move reflects our commitment to operating with transparency and
            aligning with regulatory standards.

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
              viewport={{ once: true, direction: "down" }} className='text-center text-xl  text-blue-950 '>
            Our story is one of transformation, compassion, and empowerment. With each passing
            day, Living Word of God International Assembly Chu rch and Faith-Based Organization
            strives to make a positive impact, bringing hope and opportunities to those who need
            it most. Join us in our journey as we continue to grow, adapt, and uplift communities in
            need.

            </motion.p>
           
        </div>
    )
}