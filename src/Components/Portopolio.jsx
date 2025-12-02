
import Halaman from "./Halaman";
import Halaman1 from "./Halaman1";
import Navbarforto from "./Navbarforto";
const Portopolio = () => {
  return (
    <div className="w-full h-screen flex flex-col font-serif  text-white ">
      <Navbarforto />
      <Halaman />
      <Halaman1 />
      {/* <Halaman2 /> */}
    </div>
  );
};

export default Portopolio;
