import { AttributionTwoTone, MiscellaneousServices, VisibilityTwoTone, VisibilityOffTwoTone } from "@mui/icons-material";
import { Button, Card } from "flowbite-react";
import { motion } from "framer-motion";

export default function Ouractivity(){
    const our_activity_data = [
        {
            titlee : 'Mission',
            content : 'To provide holistic support through education, daily nutrition, and clothing, coupled with spiritual empowerment. Our mission extends to youth clu bs, support groups, bu sin ess empowerment, community events, adult literacy, and vocational skills training in welding, plumbing, tailoring/sewing, carpentry & joinery, and mechanics, uplifting communities for a sustainable future.',
            btn: 'explore',
            btnIcon: <MiscellaneousServices fontSize="large" color="primary"/>
        },
        {
            titlee : 'Vision',
            content : 'To uplift the underprivileged and vulnerable b y addressing their social, economic, moral and spiritual needs, embodying the teachings of compassion as inspired b y Matthew 15:31-35." ',
            btn: 'volunt',
            btnIcon: <VisibilityOffTwoTone fontSize="large" color="primary"/>
        },
        {
          titlee: 'Attributes',
          content: '1.Unity and Dedication 2. Transparency and Accountability 3. Born-Again Christian Values',
          btnIcon: <AttributionTwoTone fontSize="large" color="primary"/>
        }

    ]
    return(
        <div className="bg-blue-900  lg:mt-0 h-96 w-screen flex flex-col items-center ">
               <motion.h1
      initial={{
        opacity: 0,
        y: 50, // Start below the final position
      }}
      whileInView={{
        opacity: 1,
        y: 0, // Move to final position
        transition: {
          duration: 1, // Duration of animation
          delay: 0.6,  // Delay before starting animation
        },
      }}
      viewport={{ once: true, direction: "down" }} // Ensure it only animates once
      className="text-3xl lg:text-7xl text-center text-rose-100 mt-10 font-bold"
    >
      <VisibilityTwoTone color="secondary" fontSize="large" />
      Our mission and value
    </motion.h1>
            <motion.div i initial={{
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
              className="flex flex-col lg:flex-row justify-center  gap-2 lg:gap-8 mt-8 lg:mt-32">
                {our_activity_data.map((activi, index) =>(

                     <Card key={index} className="max-w-80 lg:max-w-sm">
                      {activi.btnIcon}
                        <h5 className="text-md top-5 text-center  lg:text-3xl font-bold tracking-tight text-blue-900 dark:text-white">
                        {activi.titlee}
                        </h5>
                        <p className="font-normal text-rose-700 dark:text-gray-400">
                        {activi.content}
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
