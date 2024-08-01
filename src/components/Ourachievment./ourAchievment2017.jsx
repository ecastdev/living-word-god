export default function OurAchievment(){
    return(
        <div>
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
                    Ch ristmas Fu n ction with Broad Ou treach (December 23, 2017):
Reach ed out to over one h un dred vulnerable people, in cluding widows,
the disabled, the elderly, orph ans, an d th ose living with HIV/AIDS.
Beneficiaries received sugar, rice, salt, an d cash during th is special
event.

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
        Award an d Certificate Presentation (December 2017):
Presen ted Awards an d Certificates to some of the valuable partn ers of
the organization.
Recogn ized in dividu als su ch as Miss. Isabel Bwanamfumu, Mr. Gerald
Mpon da, Mrs. Hannah Ngulinga, Mrs. Egrita Ndala, Mr. Matours Nasawa,
Mr. Ch ipiliro Mpinganjira, Mr. Vin cen t Khonyongwa, Mr. Rainnie
Vokhiwa, Mrs. Hellen Limani, an d Mr. William Chagon a.
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
          Ongoing Free Edu cation an d Food Program (Cu rren t):
Con tin u ou sly providin g free edu cation an d food to 76 ch ildren at our
cen ter.
            </motion.p>
            
           
        </div>

        </div>
    )
}