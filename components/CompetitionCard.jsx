import Particles from "@/components/particles/particles";
import {X,Phone,Mail} from "lucide-react";
import React from "react";
import './CompetitionCard.css';
import {Michroma} from "next/font/google";

const michroma = Michroma({
    weight: ['400'],
    subsets: ['latin']
})

const CompetitionCard = ({openCard, setOpenCard , eventData}) => {

    const [selected , setSelected] = React.useState(0);
    const [menu , setMenu] = React.useState(false);

    return (
        <div className={michroma.className}>
            <div
                className={`${
                    openCard ? "w-full h-full" : "w-0 h-0 opacity-0"
                } fixed inset-0 z-50 flex items-center justify-center bg-grey bg-opacity-50`}

                onClick={() => {
                    setOpenCard(false);
                    setMenu(false);
                    setSelected(0);
                }}
            >

                <div
                    className={"card-main bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 w-full h-full p-5 text-2xl flex flex-col md:flex-row md:w-7/12 md:h-[65%] md:rounded-xl overflow-scroll"}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={"w-1/5 h-full bg-transparent hidden md:flex flex-row md:flex-col items-start justify-center mr-20"}>
                        <div className={"w-full h-1/2 bg-transparent flex flex-col grid-cols-1 items-start justify-start m-5"}>
                            <div
                                className={"link-container bg-transparent w-fit h-1/2 flex items-center justify-start cursor-pointer box-border px-5" + `${selected === 0 ? " clipped bg-white bg-opacity-30  rounded-xl" : ""}`}
                                onClick={() => setSelected(0)}
                            >
                                About
                            </div>
                            <div
                                className={"link-container bg-transparent w-fit h-1/2 flex items-center justify-start cursor-pointer box-border px-5" + `${selected === 1 ? " clipped bg-white bg-opacity-20 rounded-xl" : ""}`}
                                onClick={() => setSelected(1)}
                            >
                                Format
                            </div>
                            <div
                                className={"link-container bg-transparent w-fit h-1/2 flex items-center justify-start cursor-pointer box-border px-5" + `${selected === 2 ? " clipped bg-white bg-opacity-20   rounded-xl" : ""}`}
                                onClick={() => setSelected(2)}
                            >
                                Rules
                            </div>
                            <div
                                className={"link-container bg-transparent w-fit h-1/2 flex items-center justify-start cursor-pointer box-border px-5" + `${selected === 3 ? " clipped bg-white bg-opacity-20  rounded-xl" : ""}`}
                                onClick={() => setSelected(3)}
                            >
                                Contacts
                            </div>
                            <div
                                className={"link-container bg-transparent w-fit h-1/2 flex items-center justify-start cursor-pointer box-border px-5" + `${selected === 4 ? " clipped bg-white bg-opacity-20  rounded-xl" : ""}`}
                                onClick={() => setSelected(4)}
                            >
                                Register
                            </div>
                        </div>
                    </div>
                    <div
                        className={"md:hidden w-screen absolute left-0 top-0 p-2 mb-10 flex flex-col items-center justify-center bg-gray-100 bg-opacity-20"}
                        onClick={() => setMenu(!menu)}
                    >
                        <div
                            className={((selected === 0 || menu)? "flex" : "hidden ")+ "w-full h-1/2 bg-transparent flex-row items-center justify-center m-2"}
                            onClick={() => setSelected(0)}
                        >
                            About
                        </div>
                        <div
                            className={((selected === 1 || menu)? "flex" : "hidden ")+ "w-full h-1/2 bg-transparent flex-row items-center justify-center m-2"}
                            onClick={() => setSelected(1)}
                        >
                            Format
                        </div>
                        <div
                            className={((selected === 2 || menu)? "flex" : "hidden ")+ "w-full h-1/2 bg-transparent flex-row items-center justify-center m-2"}
                            onClick={() => setSelected(2)}
                        >
                            Rules
                        </div>
                        <div
                            className={((selected === 3 || menu)? "flex" : "hidden ")+ "w-full h-1/2 bg-transparent flex-row items-center justify-center m-2"}
                            onClick={() => setSelected(3)}
                        >
                            Contacts
                        </div>
                        <div
                            className={((selected === 4 || menu)? "flex " : "hidden ")+ "w-full h-1/2 bg-transparent flex-row items-center justify-center m-2"}
                            onClick={() => setSelected(4)}
                        >
                            Register
                        </div>
                        <div
                            className={(menu ? "flex" : "hidden") + " w-full h-1/2 bg-transparent flex-row items-center justify-center m-2"}
                            onClick={() => {
                                setOpenCard(false);
                                setMenu(false);
                                setSelected(0);
                            }}
                        >
                            Close
                        </div>
                    </div>
                    <div className={"md:hidden " + (menu ? "mb-72" : "mb-20")}/>
                    {selected === 0 && (
                        <div
                            className={"w-full md:w-4/5 min-h-full bg-transparent flex flex-col items-center justify-between"}>
                            <div className={"w-fit px-10 py-5 flex flex-col items-center justify-start text-lg md:text-2xl clipped bg-gray-50 bg-opacity-30 rounded-xl"}>
                                <h1 className={"text-xl"}>{eventData.name}</h1>
                                <h1 className={"text-pink-500"}>{"Prize Pool : " + eventData.prize}</h1>
                            </div>
                            <div className={"w-full h-fit flex text-center text-base my-10 md:my-0 md:text-lg md:text-left flex-col items-center justify-start"}>
                                <p>{eventData.description}</p>
                            </div>
                            <div className={"w-full md:h-1/4 flex flex-col md:flex-row items-center justify-between text-sm md:text-lg text-center gap-5"}>
                                <div className={"w-full md:w-1/2 h-fit py-5 flex md:flex-col items-center  gap-3 md:gap-0  justify-center bg-gray-100 bg-opacity-20 clipped rounded-xl"}>
                                    <h2 className={"text-pink-500"}>Venue</h2>
                                    <p>{eventData.venue}</p>
                                </div>
                                <div className={"w-full md:w-1/2 h-fit py-5 flex md:flex-col items-center gap-3 md:gap-0 justify-center bg-gray-100 bg-opacity-20 clipped rounded-xl"}>
                                    <h2 className={"text-pink-500"}>Time</h2>
                                    <p>{eventData.time}</p>
                                </div>
                                <div className={"w-full md:w-1/2 h-fit py-5 flex md:flex-col items-center gap-3 md:gap-0  justify-center bg-gray-100 bg-opacity-20 clipped rounded-xl"}>
                                    <h2 className={"text-pink-500"}>Date</h2>
                                    <p>{eventData.date}</p>
                                </div>
                            </div>

                        </div>)}
                    {selected === 1 && (
                        <div className={"w-full md:w-4/5 h-full bg-transparent flex flex-col items-center justify-start overflow-scroll text-base"}>
                            {eventData.format.map((format) => (
                                <div className={"w-full flex flex-col items-start justify-start my-5 text-wrap"}>
                                    <h1 className={"bg-gray-100 clipped p-2 bg-opacity-20"}>{format.name}</h1>
                                    {format.description.map((description) => (
                                        <div className={"justify-start items-start flex flex-row gap-3 m-1"}>
                                            <p className={"text-red-500"}>{"- "}</p>
                                            <p className={"w-11/12"}>{description}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    {selected === 2 && (
                        <div
                            className={"w-full md:w-4/5 h-full bg-transparent flex flex-col items-start justify-start overflow-scroll text-base"}>
                            {eventData.rules.map((rule) => (
                                <div className={"justify-start items-start flex flex-row gap-3 m-1 w-[80%]"}>
                                    <p className={"text-red-500"}>{"- "}</p>
                                    <p className={"w-11/12"}>{rule}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {selected === 3 && (
                        <div className={"w-full md:w-4/5 h-full bg-transparent flex flex-col items-center justify-start"}>
                            <div
                                className={"w-fit px-10 py-5 hidden md:flex flex-col items-center justify-start font-4xl clipped bg-gray-50 bg-opacity-30 rounded-xl mb-10 text-2xl"}>
                                <h1>{eventData.name}</h1>
                                <h1 className={"text-pink-500"}>{"Prize Pool : " + eventData.prize}</h1>
                            </div>
                            <div className={"min-h-20"}/>
                            <div className={"w-full h-fit flex flex-col gap-1 items-center justify-around"}>
                                {eventData.contact.map((contact) => (
                                    <div className={"w-full h-1/4 flex flex-row items-center justify-center gap-5 clipped py-10 bg-gray-100 bg-opacity-20"}>
                                        <a href={"tel:" + contact.phone}><Phone className={"h-7 w-7 text-pink-500"}/></a>
                                        {/*<a href={"mailto:" + contact.email}><Mail className={"h-7 w-7 text-pink-500"}/></a>*/}
                                        <div className={"flex flex-col items-start justify-start"}>
                                            <h2>{contact.name}</h2>
                                            <p className={"text-lg text-pink-500"}>{contact.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selected === 4 && (
                        <div className={"w-full md:w-4/5 h-full bg-transparent flex flex-col items-center justify-start"}>
                            <div
                                className={"w-fit px-10 py-5 hidden md:flex flex-col items-center justify-start font-4xl clipped bg-gray-50 bg-opacity-30 rounded-xl mb-10 text-2xl"}>
                                <h1>{eventData.name}</h1>
                                <h1 className={"text-pink-500"}>{"Prize Pool : " + eventData.prize}</h1>
                            </div>
                            <div className={"w-full h-4/6 flex flex-col items-center justify-center"}>
                                <a
                                  href={eventData.url}
                                  target={"_blank"}
                                  className={"w-full md:w-1/2 h-fit p-10 bg-gray-100 bg-opacity-20 clipped rounded-xl hover:bg-pink-500 active:bg-pink-500 text-center"}>
                                    Register
                                </a>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default CompetitionCard;

///* Rectangle 1 */
//
// position: absolute;
// width: 1552px;
// height: 868px;
// left: 77px;
// top: 78px;
//
// background: rgba(217, 217, 217, 0.1);
// border-radius: 60px;

//<svg width="1556" height="872" viewBox="0 0 1556 872" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M62 1C28.3106 1 1 28.3106 1 62V176.5V678.381C1 701.24 13.7802 722.181 34.1099 732.632L290.13 864.251C294.091 866.287 298.249 867.877 302.528 869H2V870V871H318.02H353.5H1494C1527.69 871 1555 843.689 1555 810V236.679C1555 217.663 1546.13 199.735 1531.02 188.195L1302.23 13.516C1295.78 8.59098 1288.46 5.03525 1280.71 3H1538V2V1H1265.21H1206.5H62Z" fill="#D9D9D9" fill-opacity="0.1" stroke="url(#paint0_linear_1_9)" stroke-width="2"/>
// <defs>
// <linearGradient id="paint0_linear_1_9" x1="778" y1="2" x2="778" y2="870" gradientUnits="userSpaceOnUse">
// <stop stop-color="#211E49"/>
// <stop offset="0.5" stop-color="#7D7D7D"/>
// <stop offset="1" stop-color="#3B078B"/>
// </linearGradient>
// </defs>
// </svg>