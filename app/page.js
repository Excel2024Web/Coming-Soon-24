'use client';
import React, { useState, useEffect } from 'react';

import Image from "next/image";
import excel2018 from "../assets/excel2018.png";
import excel2019 from "../assets/excel2019.png";
import excel2020 from "../assets/excel2020.png";
import excel2021 from "../assets/excel2021.svg";
import excel2022 from "../assets/excel2022.svg";
import excel2023 from "../assets/excellogo-2023.png";
import { faFacebookF, faTwitter,faXTwitter,faTimes, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {loading && <Loader />} {/* Show the loader while loading */}
      <VideoDialog open={open} handleClose={handleClose} />
      <div className="absolute flex w-screen h-screen bg-[url('/mob.png')] bg-center sm:bg-[url('/bg.svg')] bg-cover bg-no-repeat"></div>
      <div className="pl-10 z-10 flex flex-col -mt-36 sm:-mt-52 items-center justify-center relative">
        <div id="evolution_in_progress" >
          <p className="text-center text-white tracking-[0.1rem] sm:tracking-[0.5rem] scale-95 p-2 mb-2 text-base sm:text-lg">
            EVOLUTION IN PROGRESS
          </p>
        </div>
        <div id="excel_2024" className="">
          <p className="text-white oxygen-mono-regular text-2xl sm:text-2xl lg:text-3xl  border-0.125rem border-[#66cfff] shadow-[0_0_0.5rem_#66cfff] rounded-full p-3 tracking-custom-wide">
            EXCEL 2024
          </p>
        </div>
        {/* video button */}
        <div className="video_btn absolute top-48 right-0.25 mb-10 flex items-center justify-center">
          <div
            className={`
              play relative w-20 h-20 bg-gradient-radial from-[rgb(102,207,255)] via-[#065c62] to-[#065c62] rounded-full flex items-center justify-center shadow-[0px_0.94rem_1.56rem_#8e9b9e66] transition-all duration-500 ${open ? 'shadow-[0px_0px_0px_150vh_var(--themeColour)]' : ''}`}
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
            className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray-600 hover:bg-gray-400 transition-colors"
          >
            <FontAwesomeIcon
              className="h-5 w-5 text-white shadow-[8px_8px_8px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.5)] transition-shadow"
              icon={faFacebookF}
            />
          </a>
          <a
            href="https://x.com/excelmec"
            target="_blank"
            className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray-600 hover:bg-gray-400 transition-colors"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5 text-white shadow-[8px_8px_8px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.5)] transition-shadow" />
          </a>
          <a
            href="https://www.instagram.com/excelmec/"
            target="_blank"
            className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray-600 hover:bg-gray-400 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 text-white shadow-[8px_8px_8px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.5)] transition-shadow" style={{ textShadow: "6px 6px 4px rgb(0, 0, 0)"}}/>
          </a>
          <a
            href="https://www.linkedin.com/company/excelmec/"
            target="_blank"
            className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray-600 hover:bg-gray-400 transition-colors"
          >
            <FontAwesomeIcon className="h-5 w-5 text-white shadow-[8px_8px_8px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.5)] transition-shadow" icon={faLinkedin} />
          </a>
        </div>
        <div id="legend_logos" className="flex">
          <a href="https://2018.excelmec.org/" target="_blank">
            <Image
              src={excel2018}
              alt="Excel 2018"
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
          <a href="https://2019.excelmec.org/" target="_blank">
            <Image
              src={excel2019}
              alt="Excel 2019"
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
          <a href="https://2020.excelmec.org/" target="_blank">
            <Image
              src={excel2020}
              alt="Excel 2020"
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
          <a href="https://2021.excelmec.org/" target="_blank">
            <Image
              src={excel2021}
              alt="Excel 2021"
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
          <a href="https://2022.excelmec.org/" target="_blank">
            <Image
              src={excel2022}
              alt="Excel 2022"
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
          <a href="https://2022.excelmec.org/" target="_blank">
            <Image
              src={excel2023}
              alt="Excel 2023"
              className="object-contain w-12 h-12 sm:w-16 sm:h-16"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
