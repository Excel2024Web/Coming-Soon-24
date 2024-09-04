'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import VideoDialog from './video';
import Loader from './loader';  // Import the Loader component
import LinkedInIcon from '@/public/icons/svg/linkedin'; 
import FacebookIcon from '@/public/icons/svg/facebook';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@/public/icons/svg/instagram';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Function to wrap text in spans with flicker animation
  const applyFlickerEffect = (text, delays) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="flicker-animation"
        style={{ animationDelay: `${delays[index] || 0}s`, animationIterationCount: '1' }}
      >
        {char}
      </span>
    ));
  };

  const flickerDelays = [0, 0.3, 0.2, 0.6, 0.3, 0.5, 0.1, 0.2, 0.5, 0.3, 0.7, 0.4, 0.2, 0.8, 0.6, 0.7, 0.2, 0.0, 0.9];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {loading && <Loader />} {/* Show the loader while loading */}
      <VideoDialog open={open} handleClose={handleClose} />
      
      <div className="absolute flex w-screen h-screen bg-center bg-cover bg-no-repeat bg-[url('/mobile3.png')] sm:bg-[url('/bgdark.png')]"></div>

      <div className="stars"></div>
      <div className=" z-10 flex flex-col transform scale-75 mb-20 mt-2 sm: sm:-mt-14  items-center justify-center relative">
      <div id="evolution_in_progress" className=" text-center mb-0.25 mt-2  sm:mb-1  text-white tracking-[0.1rem] sm:tracking-[0.3rem]   text-md sm:text-2xl">
          {applyFlickerEffect("evolution", flickerDelays)}
          <span>&nbsp;</span> {/* Space between words */}
          {applyFlickerEffect("in", flickerDelays)}
          <span>&nbsp;</span> {/* Space between words */}
          {applyFlickerEffect("progress", flickerDelays)}
        </div>
        <div id="excel_2024 " className="transform scale-90   expand mb-32 mt-1.5 sm:mt-2 ">
          <Image
          width={170}
          height={200}
            src="/Group_2111.svg"  // Corrected path to the image in public folder
            alt="Excel 2024"
            className="bigger sm:w-[390px] sm:h-[180px]" // Adjust dimensions as needed
            // border-0.125rem border-[#339DDC] shadow-[0_0_0.5rem_#3696CF]
          />
        </div>
        {/* video button */}
        <div className=" transform scale-50 ml-2  sm:h-30 sm:w-30 sm:top-62   cursor-pointer video_btn absolute top-60 right-0.25 left-0.25 -mt-24 sm:mt-12 sm:-mb-2 flex items-center justify-center  transition-shadow duration-300 ">
          <div
            className={` bg-glassmorphism w-20 h-20   rounded-lg pop-up play ml-4 mb-12 mr-5 sm:ml-4 sm:mt-6 sm:mb-24 sm:w-24 sm:h-24  relative  bg-gradient-radial from-[rgb(133,102,255)] via-[#250662] to-[#590662] flex items-center justify-center shadow-[0px_0.94rem_1.56rem_#8e9b9e66] transition-all duration-500 ${open ? 'shadow-[0px_0px_0px_150vh_var(--themeColour)] ' : ''}`}
            onClick={handleClick}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div  className="relative w-0 h-0 border-l-[1.62rem] border-l-white border-t-[0.98rem] border-t-transparent border-b-[0.98rem] border-b-transparent transform translate-x-[4px]"></div>
            </div>
          </div>
        </div>
    
      </div>

      <div
        id="logos"
        className=" translate-x-0 sm:translate-x-0 -translate-y-1 z-10 px-4 transform scale-100 absolute bottom-4 flex flex-col sm:flex-row gap-y-2 items-center justify-between w-full "
      >
        <div id="social_logos" className="mt-4 flex gap-1.5 justify-center">
        <a 
        href="https://www.facebook.com/excelmec" 
        target="_blank" 
       rel="noopener noreferrer"
        className="w-10 h-10 circle-border bg-glass rounded-full flex items-center justify-center  bg-gray-800    hover:bg-red-50 transition-colors"
      >
         <Image
          src='/icons/icons8-facebook.svg'
          alt="Twitter"
          width={20} // Adjust size as needed
          height={20} // Adjust size as needed
          
        />
      </a>

      <a
        href="https://twitter.com/excelmec"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-glass circle-border  rounded-full flex items-center justify-center  bg-gray-800    hover:bg-red-50 transition-colors"
      >
        <Image
          src='/icons/icons8-twitterx.svg'
          alt="Twitter"
          width={20} // Adjust size as needed
          height={20} // Adjust size as needed
          
        />
      </a>

      <a
        href="https://www.instagram.com/excelmec/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-glass circle-border  rounded-full flex items-center justify-center  bg-gray-800    hover:bg-red-50 transition-colors"
      ><Image
      src='/icons/icons8-instagram.svg'
      alt="Twitter"
      width={20} // Adjust size as needed
      height={20} // Adjust size as needed
      />
    
      </a>

      <a
        href="https://www.linkedin.com/company/excelmec/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-glass circle-border  rounded-full flex items-center justify-center  bg-gray-800    hover:bg-red-50 transition-colors"
      >
        {/* <Image
      src='/icons/icons8-linkedin.svg'
      alt="Twitter"
      width={20} // Adjust size as needed
      height={20} // Adjust size as needed
      /> */}
        <div className="flex gap-1.5 justify-center">
            <IconButton
                target="_blank"
                rel="noopener noreferrer"
                color="primary">
                <LinkedInIcon />
            </IconButton>
         
         </div>
  

      </a>
    </div>
    <div id="legend_logos" className="flex">
          <a href="https://2018.excelmec.org/" target="_blank"
          className='mt-3 mr-2'>
            <Image
              src='/legacy/excel2018.png'
              alt="Excel 2018"
              width={40}
              height={30}
              
            />
          </a>
          <a href="https://2019.excelmec.org/" target="_blank"
          className='mt-3 mr-1'>
            <Image
               src='/legacy/excel2019.png'
              alt="Excel 2019"
              width={50}
              height={45}
             
            />
          </a>
          <a href="https://2020.excelmec.org/" target="_blank"
          className='mt-3 mr-3'>
            <Image
             width={50}
             height={45}
               src='/legacy/excel2020.png'
              alt="Excel 2020"
            
            />
          </a>
       
               <a 
  href="https://2021.excelmec.org/"
  target="_blank" 
  className='mt-3 mr-3'
   // Adjust padding
>
  <Image
     src='/legacy/excel2021.svg'
              alt="Excel 2021"
    width={32}
    height={30}
   
  />
</a>
          <a 
  href="https://2022.excelmec.org/" 
  target="_blank" 
  className='mt-3 -mr-1'
   // Adjust padding
>
  <Image
    src="/legacy/excel2022.svg"
    alt="Excel 2022"
    width={42}
    height={40}
    lassName=" mt-2 object-contain w-12 h-12 sm:w-16 sm:h-16"
  />
</a>

<a 
  href="https://2023.excelmec.org/" 
  target="_blank" 
  className='mt-1.5'
  // Adjust padding
>
  <Image
    src="/legacy/excellogo-2023.png"
    alt="Excel 2023"
    width={61}
    height={50}
  />
</a>


        </div>
      </div>
    </main>
  );
}