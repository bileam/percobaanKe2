import personal from "../assets/personal.png";

import Halaman2 from "./Halaman2";
import instagram from "../assets/instagram.svg";
import contact from "../assets/contact.svg";
import whatshapp from "../assets/wa.svg";
import lin from "../assets/linked.svg";
import kontak from "../assets/kontak.svg";
import connect from "../assets/connect.svg";
import burger from "../assets/burger.svg";
import { useState } from "react";

const Navbarforto = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex justify-between container  mx-auto p-2 sticky top-0 bg-[#0d2136] shadow">
      <div className="flex gap-4 relative">
        <img
          src={personal}
          alt="profil gamba"
          className="w-15 h-15 rounded-full mx-auto"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[18px] text-red-600">
            FullStact Developer
          </h1>
          <h2 className="text-[18px] text-red-600 font-semibold">
            By <span className="text-white text-[16px]">Bileam Mangalla</span>
          </h2>
          <p className="text-[12px]">
            <span className="hover:text-indigo-300">Front-End Developer</span> |{" "}
            <span className="hover:text-indigo-300">Back-End Developer</span> |
            <span className="hover:text-indigo-300"> FullsTact Developer </span>
          </p>
        </div>
      </div>
      {/* desktop */}
      <div className="hidden md:flex gap-6 items-center ">
        <button className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-full bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow">
          <img src={kontak} className="w-5 h-5 " />
        </button>
        <button className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-full bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow">
          <img src={instagram} className="w-5 h-5" />
        </button>
        <button className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-full bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow">
          <img src={whatshapp} className="w-5 h-5 " />
        </button>
        <button className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-full bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow">
          <img src={lin} className="w-5 h-5 " />
        </button>
        <button className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-full bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow">
          <img src={connect} className="w-5 h-5 " />
        </button>
      </div>
      <div className="flex items-center md:hidden  md:items-center">
        <button className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-xl bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow">
          <img
            onClick={() => setMenuOpen(!menuOpen)}
            src={burger}
            className="w-5 h-5 "
          />
        </button>
      </div>
      {/* mobile */}
      {menuOpen && (
        <div className="md:hidden gap-6 flex items-center flex-col absolute right-3 top-25">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-full bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow"
          >
            <img src={kontak} className="w-5 h-5 " />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-full bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow"
          >
            <img src={instagram} className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-full bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow"
          >
            <img src={whatshapp} className="w-5 h-5 " />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-full bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow"
          >
            <img src={lin} className="w-5 h-5 " />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 shadow-red-600 hover:bg-black hover:border-indigo-400  rounded-full bg-[#cdcdcd]  border-2 border-red-600   cursor-pointer  shadow"
          >
            <img src={connect} className="w-5 h-5 " />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbarforto;
