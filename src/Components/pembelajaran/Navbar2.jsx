const Navbar2 = (props) => {
  return (
    <div className="text-white  flex flex-col gap-2 items-center justify-center">
      <h1 className="text-[20px]">{props.navbar}</h1>
      <ul className="flex  gap-2">
        <li className="border text-center hover:text-indigo-500 p-2 rounded border-red-600 hover:border-indigo-500">
          <a href="#">Home</a>{" "}
        </li>
        <li className="border text-center p-2 hover:text-indigo-500 rounded border-red-600 hover:border-indigo-500">
          <a href="#">About</a>{" "}
        </li>
        <li className="border text-center p-2 hover:text-indigo-500 rounded border-red-600 hover:border-indigo-500">
          <a href="#">Contact</a>{" "}
        </li>
        <li className="border text-center p-2 hover:text-indigo-500 rounded border-red-600 hover:border-indigo-500">
          <a href="#">{props.sosmet}</a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar2;
