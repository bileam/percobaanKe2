import Footer from "./Footer";
import MyButton from "./MyButton";
import Navbar2 from "./Navbar2";

const Utama = () => {
  const sosmet = "Sosial";
  const navbar = "ini merupakan navbar";
  const mybutton = () => {
    alert("di tekan");
  };
  return (
    <div className="text-white p-10 flex flex-col gap-4">
      <Navbar2 sosmet={sosmet} navbar={navbar} />
      <MyButton clicket={mybutton} />
      <Footer />
    </div>
  );
};

export default Utama;
