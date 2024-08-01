
import './App.css';
import Header from './components/header.jsx';
import Ouractivity from './components/ouractivity.jsx';
import OurMission from './components/mission.jsx';
import OurGallery from './components/ourGallery/ourgallery.jsx';
import About from './components/about.jsx';
import Impact from './components/impact.jsx';
import Team from './components/team/team.jsx';
import StayConnected from './components/stayconnected.jsx';
import {  studentgiving } from './assets/assest.jsx';
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { ref, storage, getDownloadURL } from './firebase/firebase.jsx';
// import { Spinner } from "flowbite-react";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

function App2() {
  const [fileUrl, setFileUrl] = useState("");
  useEffect(() => {
    const fetchFile = async () => {
      try {
        // Reference to the file in Firebase Storage
        const fileRef = ref(storage, "assests/living.mp4");

        // Get the download URL
        const url = await getDownloadURL(fileRef);

        // Set the file URL in state
        setFileUrl(url);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    fetchFile();
  }, []);
  return (

      <div className='flex flex-col items-center lg:flex'>

              <Header/>
              <div className=''> 
                <Ouractivity/>

              </div>
             
              <div className='h-screen mt-96'> 
                <OurMission/>

              </div>
              
              {/* <OurGallery/> */}
              <div className='pt-96 lg:pt-24 h-full relative'>
               <Impact/>

              </div>
              
              <div className='mt-9'>
                <About/>
              </div>
              <StayConnected/>
              <div className=' mt-20 flex items-center justify-center flex-col lg:flex-row lg:gap-6   w-screen'> 
                <ul className='w-full grid place-content-center lg:ml-40'>
                    {fileUrl ? (
                      <video src={fileUrl} alt="Firebase file" controls className='w-full' />
                    ) : (
                      <Box
                          sx={{
                            bgcolor: '#121212',
                            p: 8,
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <Skeleton
                            sx={{ bgcolor: 'grey.900' }}
                            variant="rectangular"
                            width={400}
                            height={118}
                          />
                      </Box>
                      // <Spinner aria-label="Extra large spinner example" size="xl" />
                    )}
                </ul>
               
                <Lottie animationData={studentgiving} loop={true} className="w-full  " />
              </div>
              <Team/>
              


          
      </div>





  );
}
export default App2;
