"use client";
import React, {useState} from "react";
import CompetitionCard from "./CompetitionCard";
import Image from "next/image";

import Particles from "./particles/particles";
import {X} from "lucide-react";

const Competitions = () => {
  const [openCard, setOpenCard] = useState(false);

  const events = [
    {
      name: "Robosoccer",
      prize: "₹ 15,000",
      date: "24th January",
      time: "09:30 AM - 4:40 PM",
      venue: "Amphitheatre",
      description : "Get ready for an electrifying showdown as RoboSoccer kicks off! Excel 2024 has come up with an exciting event where innovation meets strategy as manually controlled robots compete in a thrilling game of soccer. Customize your bots to unleash their potential and become the Ultimate Champion. Every match is a testament to the participants’ engineering brilliance and teamwork, as they transform ideas into action-packed reality. Climb up through three rounds of ground breaking battles to win exciting prizes.",
      format : [
        {
          name: "Round 1 (Preliminary)",
          description: [
              "Knockout/League matches (groups based on participant count).",
              "Top 2 from each group advance to Semis.",
              "Points: Win (3), Tie (1), Lose (0).",
              "Tiebreaker: Goal Difference.",
              "Match Duration: 6 minutes (30-second break)."
          ]
        },
        {
          name: "Round 2 (Semi-finals)",
          description: [
              "Winners advance to Grand Finale.",
              "Tiebreaker: Sudden Death.",
              "Match Duration: 8 minutes (1-minute break).",
          ]
        },
        {
          name: "Round 3 (Losers Final)",
          description: [
              "Determines 3rd place.",
              "Tiebreaker: Sudden Death.",
              "Match Duration: 8 minutes (1-minute break)."
          ]
        },
        {
          name: "Round 4 (Finals)",
          description: [
              "Determines 1st and 2nd place.",
              "Tiebreaker: Sudden Death.",
              "Match Duration: 10 minutes"
          ]
        }
      ],
      rules:[
        "Teams should be composed of up to 4 members.",
        "Team Members can be from different colleges.",
        "College ID or Excel participation ID required for identification.",
        "One bot can be used per team per match.",
        "The team with most goals wins.",
        "In case of a tie, a sudden death round will be played.",
        "The controller's position should be behind their respective goal post.",
        "Starting positions should be on opposite corners of the stage.",
        "Match will be paused if bots are unable to move or if anything goes wrong.",
        "Mandatory bot inspection will be carried out before each match.",
        "Coordinators can adjust the format at any time during the event.",
        "The decision of the judge shall be final",
        "Disrespectful behavior will lead to disqualification.",
        "Wireless bots will be given 1 extra goal in case of a tie."
      ],
      contact : [
        {
          name:"Ajmal K K",
          role:"Event Head",
          phone:"9539697456",
          email:""
        },
        {
          name:"Niranjay K",
          role: "Event Head",
          phone:"9895759413",
          email:""
        }
      ],
      url:"https://bit.ly/Robosoccer2024",
    }
  ];
  const [eventData , setEventData] = useState(events[0]);
  return (
    <>
      <div className="min-h-[100dvh] box-border max-h-[100dvh] w-screen flex justify-center overflow-hidden flex-col items-center bg-[#0A0715]">
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
        />*/}
        <Particles/>
        <h1 className="comp-title text-5xl md:text-8xl mt-[2rem] font-bold text-[#B549A7] font-Monomaniac_One">COMPETITIONS</h1>
        <div className="z-10 w-full h-full flex items-start justify-center gap-9 pt-5 pl-5 box-border overflow-y-hidden" >
          {/*<div className="h-[90%] w-1/6 flex items-center justify-center gap-5 flex-col ">*/}
          {/*  <div className="bg-[#D9D9D9] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] opacity-15 rounded-br-[6rem]"></div>*/}
          {/*  <h1 className="font-Michroma text-xl">ALL</h1>*/}
          {/*  <div className="bg-[#D9D9D9] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] opacity-15 rounded-br-[6rem]"></div>*/}
          {/*  <h1 className="font-Michroma text-xl">CS TECH</h1>*/}
          {/*</div>*/}
          {/*<div className="absolute lg:left-[23%] md:left-[30%] w-2 bg-[#D9D9D9] h-5/6 opacity-15"></div>*/}
          <div className="w-full md:w-3/4 h-full flex flex-col md:flex-row items-center md:items-start justify-center gap-5  pb-10 overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-5">
              <button
                  className="bg-[#d9d9d925] w-[15rem] h-[15rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer"
                  onClick={() => setOpenCard(true)}
              >
              </button>
              <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <button
                  className="bg-[#d9d9d925]  w-[15rem] h-[15rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer"
                  onClick={() => setOpenCard(true)}
              >
              </button>
              <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>
            </div>
            {/*<div className="flex flex-col items-center justify-center gap-5">*/}
            {/*  <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">*/}
            {/*  </button>*/}
            {/*    <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>*/}
            {/*</div>*/}
            {/*<div className="flex flex-col items-center justify-center gap-5">*/}
            {/*  <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">*/}
            {/*  </button>*/}
            {/*    <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>*/}
            {/*</div>*/}
            {/*<div className="flex flex-col items-center justify-center gap-5">*/}
            {/*  <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">*/}
            {/*  </button>*/}
            {/*    <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>*/}
            {/*</div>*/}
            {/*<div className="flex flex-col items-center justify-center gap-5">*/}
            {/*  <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">*/}
            {/*  </button>*/}
            {/*    <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>*/}
            {/*</div>*/}
            {/*<div className="flex flex-col items-center justify-center gap-5">*/}
            {/*  <button className="bg-[#d9d9d925] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]  rounded-bl-[6rem] rounded-tr-[6rem] relative cursor-pointer">*/}
            {/*  </button>*/}
            {/*    <h1 className=" font-Michroma text-xl bottom-[-2rem] ">Defuse</h1>*/}
            {/*</div>*/}

          </div>
        </div>
      </div>
      <CompetitionCard openCard={openCard} setOpenCard={setOpenCard} eventData={eventData}/>
    </>
  );
};

export default Competitions;
