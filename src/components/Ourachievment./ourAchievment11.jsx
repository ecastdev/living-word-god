"use client";

import { Card, Button } from "flowbite-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { OurachievmentData } from "./ourAchievment";

export default function OurAchievment11(){
  // button 
  const [visibleItems, setVisibleItems] = useState(6);

  // Function to load more items
  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  }

 
    return(
        <div>
            <div className="grid place-content-center">
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
            className='text-center text-4xl  lg:text-7xl font-extrabold text-blue-900 '>Our achievment </motion.h1>
            {/* our achievment data */}
            <div className="grid grid-cols-1 mt-6 lg:mt-16 gap-8 lg:grid-cols-3">
              {OurachievmentData.slice(0, visibleItems).map((ourData, index) => (
                <div key={index}
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
                // viewport={{ once: true, direction: "down" }} 
                 >
                 <Card
                    className="max-w-80 lg:max-w-sm "
                    imgAlt={ourData.title}
                    imgSrc={ourData.imgTitle}
                    
                  >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {ourData.title} <p className="font-bold text-rose-800">{ourData.year}</p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {ourData.descript}
                    </p>
                    <Link to='volunteer' className="w-full">
                      <Button color="failure">
                            Read More
                        </Button>
                    </Link>
                      
                    
                  </Card>

                </div>
              ))}

            </div>
            {visibleItems < OurachievmentData.length && (
              
                <Button color="blue" onClick={loadMoreItems}>
                    LOAD MORE OF OUR ACHIEVMENT
                </Button>
              
             
        // <button onClick={loadMoreItems} style={buttonStyle}>
        //   Load More
        // </button>
      )}
           
           
        </div>

        </div>
    )

}