import React from "react";
import loaderImg from "../components/assets/images/Barline.gif";

const Loader = () => {
  return (
    <div className="absolute top-14 right-0 left-0 bottom-0 flex items-center justify-center z-20">
      <div className="top-0 right-0 left-0 bottom-0 absolute bg-gray-300 opacity-50" />
      <img
        className="absolute bg-transparent"
        src={loaderImg}
        alt="loaderImg"
      />
    </div>
  );
};

export default Loader;
