import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[500px]  lgl:w-[500px] lgl:h-[480px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px]  shadow-2xl flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner