import { ContactPhoneTwoTone, EmailTwoTone} from "@mui/icons-material";
import Lottie from "lottie-react";
import { team } from "../../assets/assest";
import { motion } from "framer-motion";

export default function Team(){
    const TeamData1 = [
        {
            heading: 'Mr.W.Chagona',
            role: 'Role: Chairman',
            contactIcon: '0888955335',
            email: 'Wchagona@mra.mw',
        },
        {
            heading: 'Hon. Minister Moses Kunkuyu',
            role: 'Role: Vice Chairman',
            contactIcon: '0997946627',
            email: '',
        },
        {
            heading: 'Mrs.J.Vokhiwa',
            role: 'Role: Secretary',
            contactIcon: '0999435792',
            email: 'shadvokhiwa@yahoo.com',
        },
        {
            heading: 'Mrs.S.Mukambo Jere',
            role: 'Role: Treasurer',
            contactIcon: '0884768 001',
            email: 'smu skambo@mra.mw',
        },
        {
            heading: 'Mr. Rainnie Vokhiwa',
            role: 'Role: Advisor',
            contactIcon: '0999373000/ 0888954304',
            email: ' rvokhiwa@mra.mw',
        },
        {
            heading: 'Mrs.E.Huwa',
            role: 'Role: Member',
            contactIcon: ' 0999955503',
            email: 'ehuwa@gmail.com',
        },
        {
            heading: 'Rev E DisiMbewe',
            role: 'Role: Project & Partnership Director',
            contactIcon: '0995811793',
            email: '',
        },
        {
            heading: 'Dr.D.HLan jesi',
            role: 'Role: Board Member',
            contactIcon: '',
            email: '',
        },
        
    ]
    const TeamData2 = [
        {
            heading: 'Pastor James Genesis',
            role: 'Role: Executive Director',
            contactIcon: '0881402 277',
            email: 'jamesgenesis307@yah oo.com',
        },
        {
            heading: 'James Guduza',
            role: 'Role: Chairman',
            contactIcon: '0991000089',
            email: 'jamesgudua@gmail.com',
        },
        {
            heading: 'Mr. Jones Chikazunga',
            role: 'Role: General Secretary',
            contactIcon: ' 0888984507',
            email: 'joneschikazunga@yahoo.com',
        },
        {
            heading: 'Mrs. Eliza Kalele Burton',
            role: 'Role: Treasurer',
            contactIcon: '0999231215',
            email: 'burtonelizabeth430@gmail.com',
        },
        {
            heading: 'Pastor Symon F.Phiri',
            role: 'Role: Member',
            contactIcon: '0888861226',
            email: '',
        },
        {
            heading: 'Mr. Yosefe Khaniwa',
            role: 'Role: Member',
            contactIcon: '0993220746',
            email: 'chikumbutsokhaniwa@gmail.com',
        },
        {
            heading: 'Mrs. Agness Ndamela',
            role: 'Role: Member',
            contactIcon: '',
            email: '',
        },
        {
            heading: 'Mrs. Vanessa Wezulo',
            role: 'Role: Member',
            contactIcon: '',
            email: '',
        },
      
    ]
    return(
       <div>
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
         className="text-center mt-60 text-blue-900 text-4xl lg:text-6xl">
           Meet Our Teams
        </motion.h1>
        <Lottie animationData={team} loop={true} className="w-96 h-80 hidden lg:block absolute left-4" />
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
              delay: 0.9,
            },
          }}
          viewport={{ once: true, direction: "down" }} 
         className="flex flex-col lg:flex-row  pt-10 lg:flex justify-between lg:gap-32">
        {/* BOARD OF TRUSTEES */}
            <div className="grid">
                <h2 className="text-center text-blue-900 text-xl lg:text-2xl" >
                   BOARD OF TRUSTEES
                </h2>
                <div className="grid">
                    {TeamData1.map((teamd, index) => (
                        <ul key={index}>
                              <h2 className="text-center text-xl text-blue-800" >
                                {teamd.heading}
                            </h2>
                            <p className="">
                                {/* <RollerShadesTwoTone  color='secondary'/> */}
                                {teamd.role}
                            </p>
                            <p className="t">
                                <ContactPhoneTwoTone  color='secondary'/>
                                {teamd.contactIcon}
                            </p>
                            <p className="">
                                <EmailTwoTone  color='secondary'/>
                                {teamd.email}
                            </p>
                        </ul>
                        
                    ))}

                </div>

            </div>
            {/* EXECUTIVE LEADERSHIP TEAM: */}
                <div className="grid"> 
                <h2 className="text-center text-blue-900 text-xl lg:text-2xl" >
                           EXECUTIVE LEADERSHIP TEAM
                    </h2>
                    <div className="grid">
                    {TeamData2.map((teamd, index) => (
                         <ul className="mt-8" key={index}>
                         <h2 className="text-center text-xl text-blue-800" >
                           {teamd.heading}
                       </h2>
                       <p className="">
                          
                           {teamd.role}
                       </p>
                       <p className="">
                           <ContactPhoneTwoTone  color='secondary'/>
                           {teamd.contactIcon}
                       </p>
                       <p className="">
                           <EmailTwoTone  color='secondary'/>
                           {teamd.email}
                       </p>
                   </ul>
                        
                    ))}


                   </div>
                    


            </div>

        </motion.div>

       </div>
    )
}