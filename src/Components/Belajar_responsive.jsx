import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
const Belajar_responsive = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  });
  return (
    <div className="flex flex-col items-center justify-center  gap-4 h-full">
      <h1 className="">Responsive Learning</h1>
      <div className="grid lg:grid-cols-6 w-full sm:grid-cols-2 md:grid-cols-4 shadow-2xl p-2 shadow-[#cdcdcd] gap-2 h-screen">
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
        <div className="bg-red-400 h-20 w-20 rounded hover:bg-blue-300 cursor-pointer hover:rounded-full duration-150"></div>
      </div>
      <div className=" flex flex-col"></div>
    </div>
  );
};

export default Belajar_responsive;
