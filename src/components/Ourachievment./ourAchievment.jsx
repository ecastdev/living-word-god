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
                      Edu cation al Su pport for Orph an s (On goin g):
Su ccessfu lly secured funding for orphans in government secondary
and primary schools.
Provided essential basic necessities, including school uniforms,
fees, funds, and learning materials.

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
          Ch ristmas Get-Togeth er (December 2015):
Hosted a heartwarming get-together for widows, the elderly, those
living with HIV/AIDS, and the disabled.
Provided festive meals and Christmas presents, including pieces of
zitenje, with the event presided over by Village Headwoman
Chakana.

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
            Ch ristmas Get-Togeth er & Sh oe Donation (May, 2016):
Some funds for the event were generously provided by Professor
Joh n Chisi, President, and Founder of Umodzi Party (UP).
Siku Transport Company supported u s with 2 0 0 bottles of water.
Distributed shoes to twenty widows and the elderly, courtesy of
Divine Sports Outreach Ministry.
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
              Sch ool Materials Distribu tion (September, 2016):
Dispensed school materials, including pens, pencils, and exercise
books, to over eighty needy children and orphans.
Part of the assistan ce was facilitated through the efforts of
Councilor Gertrude Chirambo.

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
Graveyard Tools Distribu tion an d Ou treach (December, 2016):
Organized a significant function distributing graveyard tools to
Chakana village, including buckets, hoes, shovels, cups, and plates.
Treated widows, the elderly, the disabled, and orphans with food

            </motion.p>
           
           
        </div>

        </div>
    )
}