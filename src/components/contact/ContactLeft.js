import React from 'react'

import { contactImg } from "../../assets/index";
import {
  FaFacebookF,
 
  FaLinkedinIn,

  FaGithub,
} from "react-icons/fa";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-slate-800 p-4 lgl:p-8 rounded-lg shadow-2xl flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rabbi Hosen</h3>
        <p className="text-lg font-normal text-gray-400">
          Font-end  Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Focusing on building responsive, user-friendly interfaces with modern frameworks like React. You'll master HTML, CSS, JavaScript, and UI/UX principles to create seamless digital experiences with performance and accessibility in mind
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801762407385</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">rabbihosen01581@gmail.com</span>
        </p>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/rabbi-hosen00" target="blank">
          <span className="bannerIcon shadow-2xl">
            <FaGithub />
          </span>
        </a>
        <a href="https://www.facebook.com/share/15K7joG11J/" target="blank">
          <span className="bannerIcon shadow-2xl">
            <FaFacebookF />
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContactLeft