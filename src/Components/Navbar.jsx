import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigasi = useNavigate();
  const handleButton = () => {
    navigasi("/responsive");
  };
  const handleButtonporto = () => {
    navigasi("/portofoloi");
  };
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="flex flex-col gap-2">
        <button
          onClick={handleButton}
          className="font-normal border p-2 
        rounded-md hover:bg-blue-500
     hover:text-white hover:border-black
        shadow-2xl border-sky-400
        cursor-pointer"
        >
          Pembelajaran
        </button>
        <button
          onClick={handleButtonporto}
          className="font-normal border p-2 
        rounded-md hover:bg-blue-500
     hover:text-white hover:border-black
        shadow-2xl border-sky-400
        cursor-pointer"
        >
          Portofolio
        </button>
      </div>
    </div>
  );
};

export default Navbar;
