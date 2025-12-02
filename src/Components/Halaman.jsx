import { useEffect } from "react";
import personal from "../assets/person.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Halaman = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 500,
      once: false,
    });
  });
  return (
    <div className="pl-10  pr-10  w-full flex flex-col container mx-auto">
      <div className=" grid  pl-15 grid-cols-1  md:grid-cols-2 gap-4 p-10 items-center">
        <div className="flex p-2 flex-col pl-15 h-[60%]   items-center justify-center">
          <div
            data-aos="fade-right"
            className="text-justify gap-4 flex flex-col"
          >
            <marquee className="text-[18px] text-red-600 font-bold ">
              Hallo, Welcome!
            </marquee>
            <h1 className="font-sans font-bold text-[25px]">
              I Am Sofware Engineering |
            </h1>
            <p className="text-justify font-normal text-[14px] transition duration-500 ease-in-out hover:text-red-600">
              I am a Software Engineering student with 4 years of learning
              experience. My skills include both front-end and back-end web
              development, allowing me to build complete and functional websites
              from design to deployment.
            </p>
            <button className="cursor-pointer border-indigo-400 p-1 w-[20%] text-normal rounded-sm  hover:border-red-600 border-2 shadow-2xl">
              About Me
            </button>
          </div>
        </div>
        <div className="flex justify-start pl-10">
          <img
            data-aos="fade-left"
            src={personal}
            className="h-70 animate-pulse  hover:duration-500 transition shadow-2xl shadow-red-600"
          />
        </div>
      </div>
    </div>
  );
};
export default Halaman;
