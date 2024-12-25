"use client";
import React, {useState} from "react";
import Image from "next/image";

import Particles from "./particles/particles";
import {X} from "lucide-react";

const Competitions = () => {
  const [openCard, setOpenCard] = useState(false);
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
            <div className="flex flex-col items-center justify-center gap-5">
              <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">
              </button>
                <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>
            </div>
            
          </div>
        </div>
      </div>
      {openCard && (
        <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center ">
          <div className=" relative h-3/4 w-3/4 bg-[#0c1b2b] rounded-xl flex items-center justify-center flex-col py-5">
            <Particles />
            <h1 className="text-4xl text-white">Event Name</h1>
            <div className="w-full h-full flex items-center justify-center px-5">
              <div className="h-full w-3/4 flex items-center flex-col justify-center px-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                sed voluptatem illum ad obcaecati, dignissimos rem ducimus ipsum
                hic distinctio fugit vel at asperiores nulla beatae temporibus
                tenetur a. Aliquid laudantium, commodi laborum optio quam
                deleniti excepturi maxime reiciendis est deserunt, quod itaque
                aperiam harum ad sapiente, mollitia eos quo!
                <div className="w-1/2 mt-4 h-fit flex items-center justify-center gap-5">
                  <a
                    href=""
                    className="w-1/2 bg-[#2756ad] rounded-lg py-5 flex items-center justify-center"
                  >
                    Venue
                  </a>
                  <a
                    href=""
                    className="w-1/2 bg-[#2756ad] rounded-lg py-5 flex items-center justify-center"
                  >
                    Date
                  </a>
                  <a
                    href=""
                    className="w-1/2 bg-[#2756ad] rounded-lg py-5 flex items-center justify-center"
                  >
                    Time
                  </a>
                </div>
              </div>
              <div className="h-full w-1/4 flex items-center justify-center flex-col gap-5">
                <a
                  href=""
                  className="w-3/4 bg-[#2756ad] rounded-lg py-5 flex items-center justify-center"
                >
                  About
                </a>
                <a
                  href=""
                  className="w-3/4 bg-[#2756ad] rounded-lg py-5 flex items-center justify-center"
                >
                  Format
                </a>
                <a
                  href=""
                  className="w-3/4 bg-[#2756ad] rounded-lg py-5 flex items-center justify-center"
                >
                  Rules
                </a>
                <a
                  href=""
                  className="w-3/4 bg-[#2756ad] rounded-lg py-5 flex items-center justify-center"
                >
                  Contact
                </a>
                <a
                  href=""
                  className="w-3/4 bg-[#2756ad] rounded-lg py-5 flex items-center justify-center"
                >
                  Result
                </a>
              </div>
            </div>
            <X
              onClick={() => setOpenCard(false)}
              className="absolute top-2 right-2 text-white cursor-pointer"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Competitions;
