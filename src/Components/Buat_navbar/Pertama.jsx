import { useState } from "react";
import logo1 from "../../assets/logo1.png";
import person from "../../assets/personal.png";
const Pertama = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="container mx-auto shadow text-white sticky top-0  flex items-center justify-between pl-2 pr-2 " >
      <div className="flex">
        <a href="#" className="flex flex-col items-center">
          <img src={person} alt="" className="w-20" />
          <span className="font-serif text-blue-500 font-bold">Bileam</span>
        </a>
      </div>
      <ul className="flex gap-4">
        <li>
          <a href="#" className="hover:border-b-3 hover:border-blue-500">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" className="hover:border-b-3 hover:border-blue-500">
            SERVIS
          </a>
        </li>
        <li>
          <a href="#" className="hover:border-b-3 hover:border-blue-500">
            TECHNOLOGI
          </a>
        </li>
        <li>
          <a href="#" className="hover:border-b-3 hover:border-blue-500">
            HOW NOW
          </a>
        </li>
      </ul>
      <div className="flex gap-4">
        <button
          className="outline px-1 py-2 shadow-2xl rounded-full 
        cursor-pointer hover:bg-gradient-to-r hover:from-red-300 hover:to-red-500 bg-blue-500 transition 
        hover:duration-400 hover:text-black
        border 
        hover:border-white"
        >
          JOIN US
        </button>
        <button className="text-black  hover:text-white cursor-pointer border-white border px-1 py-2  shadow rounded-full bg-linear-to-r from-red-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-red-500">
          JOIN HIBRY
        </button>
      </div>
    </nav>
  );
};

export default Pertama;
