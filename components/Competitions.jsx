"use client";
import React, {useState} from "react";
import CompetitionCard from "./CompetitionCard";
import Image from "next/image";

import Particles from "./particles/particles";
import {X} from "lucide-react";

const Competitions = () => {
  const [openCard, setOpenCard] = useState(false);
  const eventData = {
    name: "4*120",
    prize : "8000",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus",
    venue : "311",
    date: "12/12/2021",
    time: "12:00",
    format:[
      {
        name : "Round 1",
        description : [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus"
        ]
      },
        {
            name : "Round 2",
            description : [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus"
            ]
        }
    ],
    rules : [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat",
    ],
    contact : [
      {
        name : "John Doe",
        phone : "1234567890",
        role : "Organizer",
        email : ""
      },
      {
        name : "John Doe",
        phone : "1234567890",
        role : "Organizer",
        email : ""
      }
    ]
  };
  return (
    <>
      <div className="h-screen w-screen max-h-fit flex justify-center overflow-hidden flex-col items-center bg-[#0A0715]">
        <Image
          src="/bg/Group_4.png"
          alt="bg"
          width={500}
          height={500}
          quality={100}
          className="absolute bottom-0 left-0"
        />
        <Image
          src="/bg/Group_3.png"
          alt="bg"
          width={800}
          height={800}
          quality={100}
          className="absolute top-0 left-1/2 -translate-x-[50%]"
        />
        <Image
          src="/bg/Group_3_1.png"
          alt="bg"
          width={800}
          height={800}
          quality={100}
          className="absolute bottom-0 right-0"
        />
        {/* <Image
          src="/bg/BgImg.png"
          alt="bg"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute bottom-0 right-0"
        /> */}
        <Particles /> 
        <h1 className="comp-title text-8xl mt-[2rem] font-bold text-[#B549A7] font-Monomaniac_One">COMPETITIONS</h1>
        <div className="z-10 w-full h-full flex items-start justify-center gap-9 pt-5 pl-5" >
          <div className="h-[90%] w-1/6 flex items-center justify-center gap-5 flex-col ">
            <div className="bg-[#D9D9D9] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] opacity-15 rounded-br-[6rem]"></div>
            <h1 className="font-Michroma text-xl">ALL</h1>
            <div className="bg-[#D9D9D9] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] opacity-15 rounded-br-[6rem]"></div>
            <h1 className="font-Michroma text-xl">CS TECH</h1>
          </div>
          <div className="absolute lg:left-[23%] md:left-[30%] w-2 bg-[#D9D9D9] h-5/6 opacity-15"></div>
          <div className="w-3/4 h-full flex items-start justify-center flex-wrap gap-5 px- pb-10 overflow-y-auto">
            <div className="flex flex-col items-center justify-center gap-5">
              <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer"
                onClick={() => setOpenCard(true)}
              >
              </button>
                <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">
              </button>
                <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">
              </button>
                <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">
              </button>
                <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">
              </button>
                <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">
              </button>
                <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>
            </div>
            
          </div>
        </div>
      </div>
      <CompetitionCard openCard={openCard} setOpenCard={setOpenCard} eventData={eventData}/>
    </>
  );
};

export default Competitions;
