'use client';
import React, { useState, useEffect } from 'react';

import Image from "next/image";

import VideoDialog from './video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from './loader';  // Import the Loader component

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
      
      <div className="absolute flex w-screen h-screen bg-center bg-cover bg-no-repeat bg-[url('/mobnew.png')] sm:bg-[url('/lapnew.png')]"></div>

      <div className="stars"></div>
      <div className="pl-10 z-10 flex flex-col -mt-36 sm:-mt-52 items-center justify-center relative">
      <div id="evolution_in_progress" className="text-center text-white tracking-[0.1rem] sm:tracking-[0.5rem] scale-95 p-2 mb-2 text-base sm:text-lg">
          {applyFlickerEffect("EVOLUTION", flickerDelays)}
          <span>&nbsp;</span> {/* Space between words */}
          {applyFlickerEffect("IN", flickerDelays)}
          <span>&nbsp;</span> {/* Space between words */}
          {applyFlickerEffect("PROGRESS", flickerDelays)}
        </div>
        <div id="excel_2024" className="expand">
          <img
            src="/LOGONEW.png"  // Corrected path to the image in public folder
            alt="Excel 2024"
            className="bigger w-32 h-16 sm:w-32 sm:h-16 lg:w-52 lg:h-20 tracking-custom-wide" // Adjust dimensions as needed
            // border-0.125rem border-[#339DDC] shadow-[0_0_0.5rem_#3696CF]
          />
        </div>
        {/* video button */}
        <div className="cursor-pointer video_btn absolute top-48 right-0.25 mb-10 flex items-center justify-center rounded-full transition-shadow duration-300 hover:bg-sky-600 hover:shadow-[0_40px_80px_rgba(59,130,246,0.6)] hover:shadow-blue-500/30">
          <div
            className={`pop-up play relative w-20 h-20 bg-gradient-radial from-[rgb(102,207,255)] via-[#065c62] to-[#065c62] rounded-full flex items-center justify-center shadow-[0px_0.94rem_1.56rem_#8e9b9e66] transition-all duration-500 ${open ? 'shadow-[0px_0px_0px_150vh_var(--themeColour)]' : ''}`}
            onClick={handleClick}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-0 h-0 border-l-[1.56rem] border-l-white border-t-[0.94rem] border-t-transparent border-b-[0.94rem] border-b-transparent transform translate-x-[4px]"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="logos"
        className="z-10 px-4 absolute bottom-4 flex flex-col sm:flex-row gap-y-2 items-center justify-between w-full "
      >
        <div id="social_logos" className="flex gap-1.5 justify-center">
      <a
        href="https://www.facebook.com/excelmec"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800  hover:bg-red-50 transition-colors"
      >
        <Image
          src='/icons/icons8-facebook.svg'
          alt="Facebook"
          width={20} // Adjust size as needed
          height={20} // Adjust size as needed
          className=" shadow-[8px_8px_8px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.5)] transition-shadow"
        />
      </a>

      <a
        href="https://twitter.com/excelmec"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center  bg-gray-800    hover:bg-red-50 transition-colors"
      >
        <Image
          src='/icons/icons8-twitterx.svg'
          alt="Twitter"
          width={20} // Adjust size as needed
          height={20} // Adjust size as needed
          className=" shadow-[8px_8px_8px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.5)] transition-shadow"
        />
      </a>

      <a
        href="https://www.instagram.com/excelmec/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center  bg-gray-800    hover:bg-red-50 transition-colors"
      >
        <Image
          src='/icons/icons8-instagram.svg'
          alt="Instagram"
          width={20} // Adjust size as needed
          height={20} // Adjust size as needed
          className="text-[#3696CF] shadow-[8px_8px_8px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.5)] transition-shadow"
        />
      </a>

      <a
        href="https://www.linkedin.com/company/excelmec/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center  bg-gray-800    hover:bg-red-50 transition-colors"
      >
        <Image
          src='/icons/icons8-linkedin.svg'
          alt="LinkedIn"
          width={20} // Adjust size as needed
          height={20} // Adjust size as needed
          className=" shadow-[8px_8px_8px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.5)] transition-shadow "
        />
      </a>
    </div>
    <div id="legend_logos" className="flex">
          <a href="https://2018.excelmec.org/" target="_blank">
            <Image
              src='/legacy/excel2018.png'
              alt="Excel 2018"
              width={48}
              height={48}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
          <a href="https://2019.excelmec.org/" target="_blank">
            <Image
               src='/legacy/excel2019.png'
              alt="Excel 2019"
              width={48}
              height={48}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
          <a href="https://2020.excelmec.org/" target="_blank">
            <Image
             width={48}
             height={48}
               src='/legacy/excel2020.png'
              alt="Excel 2020"
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
          <a href="https://2021.excelmec.org/" target="_blank">
            <Image
              src='/legacy/excel2021.svg'
              alt="Excel 2021"
              width={48}
              height={48}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
          <a href="https://2022.excelmec.org/" target="_blank">
            <Image
              src='/legacy/excel2022.svg'
              alt="Excel 2022"
              width={48}
              height={48}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
          <a href="https://2023.excelmec.org/" target="_blank"> {/* Fixed link for 2023 */}
            <Image
              src='/legacy/excellogo-2023.png'
              alt="Excel 2023"
              width={48}
              height={48}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
