import { ContactMail, ContactMailTwoTone, DesignServicesTwoTone, EmailTwoTone,Facebook,FollowTheSignsTwoTone , Key, LocationSearchingTwoTone, SocialDistance, WhatsApp } from "@mui/icons-material"
import { Button, Checkbox, TextInput, Label, Select } from "flowbite-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Contact(){
  const fbUrl = 'https://www.facebook.com/profile.php?id=100080190607869'
    // whatsapp button
 
    const phoneNumber = "+265885177192"; // Use international format
    const message = "Hello, Am interested in participating and donating into your organization";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    // whatsappp group 
    const grouplink = "https://chat.whatsapp.com/LYjEVoX0ZMM1qwaDTbcgea";
    const whatsappgroup = `https://wa.me/${grouplink}`;

  
    
  
    // email intergrating 
    const recipient = "lwgministriesmalawi@gmail.com";
  const subject = "Hello from living word of God faith organisation";
  const body = "Hello, Am interested in participating and donating into your organization.";

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`
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
            emailLink : mailtoLink ,
            wapLink: whatsappUrl ,
            icons2:  <ContactMailTwoTone  color="primary"/>, 
            icons3:  <EmailTwoTone  color="primary"/>, 
        }, 
        {
            // icons:  <FollowTheSignsTwoTone fontSize="large"/>, 
            titleIcons: "Follow us",
            description: <Facebook fontSize="large" color="primary" /> ,
            moreContent: <WhatsApp fontSize="large" color="primary"/>,
            wapLink: fbUrl ,
            emailLink : whatsappgroup ,
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
                                
                                  <Link to={Cdata.wapLink} className="font-normal   dark:text-gray-400">
                                    <span>{ Cdata.icons2}</span>
                                    { Cdata.description}
                                  </Link>
                                 
                               
                                <p className="font-normal mt-6   dark:text-gray-400">
                                  <Link  to={Cdata.emailLink}>
                                    <span>{ Cdata.icons3}</span>
                                    {Cdata.moreContent}
                                  </Link>
                               
                                </p>
                        </div>
                   </motion.div>
                ))}
            </div>
            
            <h1 className="text-rose-950 text-center text-3xl mt-20 font-medium">Get a straight contact to us</h1>

            <div className='flex flex-col lg:flex-row mt-7  lg:mt-6 items-center gap-20 justify-space-between'>

                    <form className="flex  max-w-80 lg:w-2/5 flex-col gap-4">
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
