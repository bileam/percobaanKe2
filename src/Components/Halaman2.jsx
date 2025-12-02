import personal from "../assets/personal.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import { useEffect } from "react";

const Halaman2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 150,
      once: false,
    });
  });

  return (
    <div className="flex items-center justify-center h-screen p-10 mt-10">
      <div className="flex pl-20 gap-2">
        <div className="flex ">
          <img
            data-aos="fade-up"
            src={personal}
            className="h-70 w-70 bg-white"
          />
        </div>
        <div
          data-aos="fade-up-left"
          //   data-aos="fade-right"
          //   data-aos="fade-up"
          className="flex flex-col justify-center w-[45%]"
        >
          <h1 className="font-bold font-serif text-[18px]">Hey,</h1>
          <p>
            perkenalkan nama saya bileam mangalla, biasa di panggil "bileam".
            saya seorang fullstack Developer berbasis di sulawesi selatan. saya
            mempunyai kompeten dalam membuat website menggunakan frameword yang
            terkenal saat ini seperti react dan tailwindcss
          </p>
          <p className="mt-5 font-sans text-black text-[15px]">
            BileamMangalla12@gmail.com || +62 8124 2922 597
          </p>
        </div>
      </div>
    </div>
  );
};

export default Halaman2;
