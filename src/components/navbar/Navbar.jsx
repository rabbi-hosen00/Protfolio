// import React, { useState } from 'react'
// import { Link } from "react-scroll";
// import { FiMenu } from "react-icons/fi";
// import { MdClose } from "react-icons/md";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import {logo} from "../../assets/index"
// import { navLinksdata } from '../../constants';

// const Navbar = () => {
//   const [showMenu, setShowMenu]=useState(false)
//   return (
//     <div className="w-full h-24 sticky top-0 z-50  bg-slate-600 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-slate-600">
      
//       <div>
//         <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
//           {navLinksdata.map(({ _id, title, link }) => (
//             <li
//               className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
//               key={_id}
//             >
//               <Link
//                 activeClass="active"
//                 to={link}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 {title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <span
//           onClick={() => setShowMenu(!showMenu)}
//           className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
//         >
//           <FiMenu />
//         </span>
//         {showMenu && (
//           <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
//             <div className="flex flex-col gap-8 py-2 relative">
//               <div>
//                 <img className="w-32" src={logo} alt="logo" />
//                 <p className="text-sm text-gray-400 mt-2">

//                 </p>
//               </div>
//               <ul className="flex flex-col gap-4">
//                 {navLinksdata.map((item) => (
//                   <li
//                     key={item._id}
//                     className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
//                   >
//                     <Link
//                       onClick={() => setShowMenu(false)}
//                       activeClass="active"
//                       to={item.link}
//                       spy={true}
//                       smooth={true}
//                       offset={-70}
//                       duration={500}
//                     >
//                       {item.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex flex-col gap-4">
//                 <h2 className="text-base uppercase font-titleFont mb-4">
//                   Find me in
//                 </h2>
//                 <div className="flex gap-4">
//                   <span className="bannerIcon">
//                     <FaFacebookF />
//                   </span>
//                   <span className="bannerIcon">
//                     <FaTwitter />
//                   </span>
//                   <span className="bannerIcon">
//                     <FaLinkedinIn />
//                   </span>
//                 </div>
//               </div>
//               <span
//                 onClick={() => setShowMenu(false)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
//               >
//                 <MdClose />
//               </span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar


// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { FiMenu } from "react-icons/fi";
// import { MdClose } from "react-icons/md";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { logo } from "../../assets/index";
// import { navLinksdata } from "../../constants";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="w-full h-20 sticky top-0 z-50 bg-slate-600 shadow-lg">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 lg:px-16 h-full">
        
//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center gap-8">
//           {navLinksdata.map(({ _id, title, link }) => (
//             <li
//               key={_id}
//               className="text-lg font-medium text-gray-300 tracking-wide cursor-pointer hover:text-white transition-all duration-300"
//             >
//               <Link
//                 activeClass="active"
//                 to={link}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//               >
//                 {title}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <span
//           onClick={() => setShowMenu(!showMenu)}
//           className="text-2xl md:hidden bg-black w-10 h-10 flex items-center justify-center rounded-full text-white cursor-pointer"
//         >
//           <FiMenu />
//         </span>

//         {/* Mobile Navigation Menu */}
//         {showMenu && (
//           <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center">
//             <span
//               onClick={() => setShowMenu(false)}
//               className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
//             >
//               <MdClose />
//             </span>

//             <ul className="flex flex-col items-center gap-6">
//               {navLinksdata.map(({ _id, title, link }) => (
//                 <li key={_id}>
//                   <Link
//                     onClick={() => setShowMenu(false)}
//                     activeClass="active"
//                     to={link}
//                     spy={true}
//                     smooth={true}
//                     offset={-70}
//                     duration={500}
//                     className="text-2xl text-gray-300 hover:text-white transition-all duration-300"
//                   >
//                     {title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* Social Media Links */}
//             <div className="mt-6 flex gap-6">
//               <span className="text-white text-2xl cursor-pointer hover:text-blue-400">
//                 <FaFacebookF />
//               </span>
//               <span className="text-white text-2xl cursor-pointer hover:text-blue-300">
//                 <FaTwitter />
//               </span>
//               <span className="text-white text-2xl cursor-pointer hover:text-blue-500">
//                 <FaLinkedinIn />
//               </span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;














import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Close menu when window resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-slate-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 lg:px-16 h-full">
        
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full cursor-pointer" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-lg font-medium text-gray-300 tracking-wide cursor-pointer hover:text-white transition-all duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                tabIndex={0}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Open Menu"
          className="text-2xl md:hidden bg-black w-10 h-10 flex items-center justify-center rounded-full text-white cursor-pointer"
        >
          <FiMenu />
        </button>

        {/* Mobile Navigation Menu */}
        {showMenu && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center transition-all duration-500">
            <button
              onClick={() => setShowMenu(false)}
              aria-label="Close Menu"
              className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
            >
              <MdClose />
            </button>

            <ul className="flex flex-col items-center gap-6">
              {navLinksdata.map(({ _id, title, link }) => (
                <li key={_id}>
                  <Link
                    onClick={() => setShowMenu(false)}
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-2xl text-gray-300 hover:text-white transition-all duration-300"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Links */}
            <div className="mt-6 flex gap-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white text-2xl cursor-pointer hover:text-blue-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white text-2xl cursor-pointer hover:text-blue-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white text-2xl cursor-pointer hover:text-blue-500"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
