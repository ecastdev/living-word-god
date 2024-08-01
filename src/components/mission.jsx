import { CommuteTwoTone, EmojiPeopleTwoTone, MotionPhotosOffSharp, PushPinRounded, ViewSidebarTwoTone } from "@mui/icons-material"
import { motion } from "framer-motion";
import attachImg from './ourGallery/orp333.jpeg';
import Lottie from "lottie-react";
import { lovegiving } from "../assets/assest";

export default function OurMission(){
    const missionData = [
        {
            title : 'Small Business Empowerment: ',
            content: 'Empowering entrepreneurs through support and resources to enhance smallbusiness ventures.',
            icon: <EmojiPeopleTwoTone fontSize="large" color='primary'/>
        },
        {
            title : 'Home Based care',
            content: 'Extending care and support within the comfort of individual homes',
            icon: <MotionPhotosOffSharp color='primary' fontSize="large"/>
        },
        {
            title : 'Support Group',
            content: 'Facilitating a supportive community for individuals facing various challenges.',
            icon: <PushPinRounded color='primary' fontSize="large"/>
        },
        {
            title : 'Vision ',
            content: 'o provide a safe and loving home for orphaned and abandoned children',
            icon: <ViewSidebarTwoTone color='primary' fontSize="large"/>
        },
        {
            title : 'HIV/AIDS Awareness',
            content: 'Conducting awareness programs to promote education and prevention',
            icon: <EmojiPeopleTwoTone color='primary' fontSize="large"/>
        },
        {
            title : 'Motivating ',
            content: 'o provide a safe and loving home for orphaned and abandoned children',
            icon: <MotionPhotosOffSharp color='primary' fontSize="large"/>
        },
    ]
    return(
        <div className="flex flex-col items-centh-screen pt-60 lg:pt-10 mt-96 lg:mt-16">
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
             className="text-blue-950 text-center text-3xl lg:text-7xl font-bold">
                Our Activity
            </motion.h1>
            <Lottie  animationData={lovegiving} loop={true}
             className="w-full h-32 ml-4  lg:w-96 lg:h-full lg:absolute lg:mt-3 lg:left-4" />
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
                 delay: 0.7,
               },
             }}
             viewport={{ once: true, direction: "down" }} 
             
              className="mt-2 lg:mt-9 grid grid-cols-2 max-w-3xl place-content-center   lg:grid-cols-3 lg:gap-9">
                        {missionData.map((activi, index) => (
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
                               delay: 1.3,
                             },
                           }} 
                           viewport={{ once: true, direction: "down" }}
                            key={index} className="grid mt-10 lg:mt-20">
                                <h1>
                                    {activi.icon || "Default Icon"}
                                </h1>
                                <h2 className="text-xl lg:text-3xl text-blue-950 text-center">
                                    {activi.title || "Default Title"}
                                </h2>
                                <p className="text-xl font-light text-center">
                                    {activi.content || "Default Content"}
                                </p>
                          </motion.div>
            ))}
            </motion.div>
            
          
            
        </div>
    )
}
