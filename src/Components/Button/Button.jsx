import React from "react";
import Loader from "../Loader/Loader";

function Button({ text, func }) {
  return (
    <button
      onClick={func}
      className=" border-2 w-full relative flex justify-center  text-white border-yellow-400 p-2 text-lg hover:bg-yellow-400  hover:text-black hover:scale-110 hover:border-0 transition-all"
    >
      <div className=" hidden" id="loaderContainer">
      <Loader/>
      </div>
      {text}
    </button>
  );
}

export default Button;
