import personal from "../assets/personal.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
const Halaman1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: false,
    });
  });
  return (
    <div className="flex items-center justify-center  p-10 ">
      <div className="flex flex-col sm:flex-row pl-20 gap-10">
        <div className="flex">
          <img
            data-aos="zoom-in-right"
            src={personal}
            className="h-70 w-70 bg-white"
          />
        </div>
        <div className="flex flex-col justify-center w-[45%] text-center ">
          <h1
            data-aos="fade-down-left"
            className="font-bold font-serif text-[18px] "
          >
            Hey,
          </h1>
          <p
            data-aos="zoom-in-right"
            className="text-justify  text-[14px] animate-pulse transition duration-500 ease-in-out  hover:text-indigo-400 "
          >
            Perkenalkan nama saya bileam mangalla, biasa di panggil "bileam".
            saya seorang fullstack Developer berbasis di sulawesi selatan. saya
            mempunyai kompeten dalam membuat website menggunakan frameword yang
            terkenal saat ini seperti react dan tailwindcss
          </p>
          <p
            data-aos="fade-up"
            className="mt-5 font-sans text-start  text-indigo-400 text-shadow-2xs hover:text-red-600 text-[15px]"
          >
            Bileammangalla12@gmail.com || +62 8124 2922 597
          </p>
        </div>
      </div>
    </div>
  );
};

export default Halaman1;
