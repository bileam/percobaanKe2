const MyButton = (props) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={() => props.clicket()}
        className="p-2 shadow border-indigo-500 border cursor-pointer hover:bg-black rounded"
      >
        Click Me
      </button>
    </div>
  );
};

export default MyButton;
