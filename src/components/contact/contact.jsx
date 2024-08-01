import { ContactMail, ContactMailTwoTone, DesignServicesTwoTone, EmailTwoTone,Facebook,FollowTheSignsTwoTone , Key, LocationSearchingTwoTone, SocialDistance, WhatsApp } from "@mui/icons-material"
import { Button, Checkbox, TextInput, Label, Select } from "flowbite-react";
import { motion } from "framer-motion";


export default function Contact(){
    const contactData = [
        {
            // icons: <LocationSearchingTwoTone fontSize="large"/>,
            titleIcons: "Address",
            description: "P.O. Box 6042 2 , Blantyre Malawi",
            moreContent: " Ndirande, Behind Apostolic Faith Mission Church (Ndirande Market, next to PremierBet)",
        },
        {
            // icons: <ContactMail fontSize="large"/>,
            titleIcons: "Contact",
            description: "+265 998606176" ,  
            moreContent: "livingwordofgod@gmail.com",
            icons2:  <ContactMailTwoTone  color="primary"/>, 
            icons3:  <EmailTwoTone  color="primary"/>, 
        }, 
        {
            // icons:  <FollowTheSignsTwoTone fontSize="large"/>, 
            titleIcons: "Follow us",
            description: <Facebook fontSize="large" color="primary" /> ,
            moreContent: <WhatsApp fontSize="large" color="primary"/>
        }
    ]
    return(
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
                 delay: 0.6,
               },
             }} 
             viewport={{ once: true, direction: "down" }} 
              className="grid place-content-center mt-40  ">
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
              className=" text-5xl lg:text-7xl font-bigfont text-rose-900 mt-5  lg:mt-10 ml-3 lg:ml-8">
                G ET IN TOUCH
            </motion.h1>
            <div className="flex flex-col lg:flex-row gap-10 items-center mt-10 lg:mt-20 grid-flow-row place-content-center ">
            {contactData.map((Cdata , index) =>(
                     <motion.div
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
                        key={index} className="flex gap-2">
                        <div>{Cdata.icons}</div>
                        <div className="grid max-w-96">
                                <h5 className="text-3xl  lg:text-5xl font-bold tracking-tight text-blue-900 dark:text-white">
                                {Cdata.titleIcons}
                                </h5>
                                <p className="font-normal   dark:text-gray-400">
                                  <span>{ Cdata.icons2}</span>
                                { Cdata.description}
                                </p>
                                <p className="font-normal mt-6   dark:text-gray-400">
                                <span>{ Cdata.icons3}</span>
                                {Cdata.moreContent}
                                </p>
                        </div>
                   </motion.div>
                ))}
            </div>
            <h1 className="text-rose-950 text-3xl mt-20 font-medium">Get a straight contact to us</h1>

            <div className='flex flex-col lg:flex-row mt-7  lg:mt-6 items-center gap-20 justify-space-between'>

                    <form className="flex lg:w-2/5 flex-col gap-4">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                      </div>
                      <TextInput id="email1" type="email" placeholder="name@gmail.com" required />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="your opinion" value="Your opinion" />
                      </div>
                      <input id="opinion" type="text" required className="p-20" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
            </form>

                  <div className="max-w-96">
                            <div className="mb-2 block">
                            <Label htmlFor="countries" value="Select your country" className='text-2xl ' />
                            </div>
                            <Select id="countries" required>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Malawi</option>
                            </Select>
                 </div>
            </div>



    </motion.div>
    )
}
