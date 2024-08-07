import Image from "next/image";
import excel2018 from "../assets/excel2018.png";
import excel2019 from "../assets/excel2019.png";
import excel2020 from "../assets/excel2020.png";
import excel2021 from "../assets/excel2021.svg";
import excel2022 from "../assets/excel2022.svg";
import excel2023 from "../assets/excellogo-2023.png";

export default function Home() { 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="absolute flex w-screen h-screen bg-[url('/bg-mobile.jpg')] bg-center sm:bg-[url('/bg.svg')] bg-cover bg-no-repeat"></div>
      <div className="pl-10 z-10 flex flex-col -mt-36 sm:-mt-52 items-center justify-center">
        <div id="evolution_in_progress">
          <p className="text-center text-white tracking-[0.1rem] sm:tracking-[0.5rem] scale-95 p-2 mb-2 text-base sm:text-lg">
            EVOLUTION IN PROGRESS
          </p>
        </div>
        <div id="excel_2024">
          <p className="text-white oxygen-mono-regular text-3xl sm:text-4xl">
            EXCEL 2024
          </p>
        </div>
        <div id="play_button"></div>
      </div>
      <div
        id="logos"
        className="z-10 px-4 absolute bottom-4 flex flex-col sm:flex-row gap-y-2 items-center justify-between w-full "
      >
        <div id="social_logos" className="flex gap-1.5 justify-center">
          <a
            href="https://facebook.com"
            target="_blank"
            className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray-600 hover:bg-gray-400 transition-colors"
          >
            <i
              className="fa-brands fa-facebook-f text-xl"
              style={{color: "white", textShadow: "6px 6px 5px rgb(0, 0, 0)"}}
            ></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray-600 hover:bg-gray-400 transition-colors"
          >
            <i
              className="fa-brands fa-x-twitter text-xl shadow-lg"
              style={{color: "white", textShadow: "6px 6px 5px rgb(0, 0, 0)"}}
            ></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray-600 hover:bg-gray-400 transition-colors"
          >
            <i
              className="fa-brands fa-instagram text-xl"
              style={{color: "white", textShadow: "6px 6px 4px rgb(0, 0, 0)"}}
            ></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-gray-600 hover:bg-gray-400 transition-colors"
          >
            <i
              className="fa-brands fa-linkedin-in text-xl"
              style={{color: "white", textShadow: "6px 6px 5px rgb(0, 0, 0)"}}
            ></i>
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
