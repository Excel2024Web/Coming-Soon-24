"use client";
import React, {useState} from "react";

import Particles from "./particles/particles";
import {X} from "lucide-react";

const Competitions = () => {
  const [openCard, setOpenCard] = useState(false);
  return (
    <>
      <div className="h-screen w-screen flex justify-center flex-col items-center bg-white">
        <h1 className="text-4xl font-bold text-blue-500">Competitions</h1>
        <div className="w-full h-full flex items-center justify-center">
          <div className="h-full w-1/4 flex items-center justify-center gap-5 flex-col">
            <a href="" className="text-black border border-black">
              CS
            </a>
            <a href="" className="text-black border border-black">
              nontech
            </a>
            <a href="" className="text-black border border-black">
              CS
            </a>
          </div>
          <div className="w-3/4 h-full flex items-center justify-center flex-wrap gap-8">
            <button
              onClick={() => setOpenCard(true)}
              className="text-black border border-black"
            >
              Competition
            </button>
            <button
              onClick={() => setOpenCard(true)}
              className="text-black border border-black"
            >
              Competition
            </button>
            <button
              onClick={() => setOpenCard(true)}
              className="text-black border border-black"
            >
              Competition
            </button>
            <button
              onClick={() => setOpenCard(true)}
              className="text-black border border-black"
            >
              Competition
            </button>
            <button
              onClick={() => setOpenCard(true)}
              className="text-black border border-black"
            >
              Competition
            </button>
            <button
              onClick={() => setOpenCard(true)}
              className="text-black border border-black"
            >
              Competition
            </button>
            <button
              onClick={() => setOpenCard(true)}
              className="text-black border border-black"
            >
              Competition
            </button>
            <button
              onClick={() => setOpenCard(true)}
              className="text-black border border-black"
            >
              Competition
            </button>
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
