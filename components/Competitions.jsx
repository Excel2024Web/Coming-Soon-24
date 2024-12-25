"use client";
import React, {useState} from "react";
import CompetitionCard from "./CompetitionCard";
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
      <CompetitionCard openCard={openCard} setOpenCard={setOpenCard} eventData={eventData}/>
    </>
  );
};

export default Competitions;
