

// import { motion } from "framer-motion";
// import { 
//   FaReact, FaNodeJs, FaJava, FaJs
// } from "react-icons/fa";
// import { 
//   SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiC, SiCplusplus, SiMysql, 
//   SiOracle, SiMicrosoftsqlserver, SiFigma 
// } from "react-icons/si";

// const skills = [
//   { name: "React", icon: <FaReact className="text-blue-400" /> },
//   { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
//   { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> },
//   { name: "DaisyUI", icon: <SiTailwindcss className="text-purple-500" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//   { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
//   { name: "C", icon: <SiC className="text-blue-500" /> },
//   { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
//   { name: "Java", icon: <FaJava className="text-red-500" /> },
//   { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
//   { name: "Oracle", icon: <SiOracle className="text-orange-500" /> },
//   { name: "SQL Server", icon: <SiMicrosoftsqlserver className="text-red-600" /> },
//   { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
// ];

// const Skill = () => {
//   return (
//     <motion.section
//       id="skills"
//       className="w-full py-20 bg-slate-600 text-white"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       {/* Title */}
//       <div className="text-center">
//         <h2 className="text-2xl font-extrabold uppercase tracking-widest text-gray-300">
//           My Top Skills
//         </h2>
//         <p className="text-gray-500 mt-2">Technologies I excel at</p>
//       </div>

//       {/* Skill Cards */}
//       <motion.div 
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mt-12"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: { opacity: 0, y: 50 },
//           visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
//         }}
//       >
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             className="relative flex flex-col items-center p-6 bg-white/10 border border-gray-700 rounded-2xl shadow-xl backdrop-blur-lg transition-transform duration-300 ease-in-out"
//             whileHover={{ scale: 1.1, rotate: 2 }}
//             whileTap={{ scale: 0.95 }}
//             variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
//           >
//             {/* Glowing Effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-lg rounded-2xl" />

//             {/* Icon with Floating Animation */}
//             <motion.span 
//               className="text-5xl relative z-10"
//               animate={{ y: [0, -5, 0] }}
//               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//             >
//               {skill.icon}
//             </motion.span>

//             {/* Skill Name */}
//             <p className="text-lg font-semibold mt-3 relative z-10">
//               {skill.name}
//             </p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// };

// export default Skill;





import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaJava, FaJs,
  FaPython
} from "react-icons/fa";
import { 
  SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiC, SiCplusplus, SiMysql, 
  SiOracle, SiMicrosoftsqlserver, SiFigma 
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" /> },
  { name: "DaisyUI", icon: <SiTailwindcss className="text-purple-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "python", icon: <FaPython className="text-blue-500" /> },
//   { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
//   { name: "Java", icon: <FaJava className="text-red-500" /> },
//   { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
//   { name: "Oracle", icon: <SiOracle className="text-orange-500" /> },
//   { name: "SQL Server", icon: <SiMicrosoftsqlserver className="text-red-600" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
];

const Skill = () => {
  return (
    <motion.section
      id="skills"
      className="w-full py-20 bg-slate-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <div className="text-center">
        <motion.h2 
          className="text-3xl font-bold uppercase tracking-wider text-gray-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Top Skills
        </motion.h2>
        <motion.p 
          className="text-gray-400 mt-2"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Technologies I excel at
        </motion.p>
      </div>

      {/* Skill Cards */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mt-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center p-6 bg-white/10 border border-gray-700 rounded-2xl shadow-lg backdrop-blur-md transition-transform duration-300 ease-in-out cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            {/* Soft Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-lg rounded-2xl"
              whileHover={{ opacity: 0.3 }}
            />

            {/* Icon with Rotation Animation */}
            <motion.span 
              className="text-5xl relative z-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {skill.icon}
            </motion.span>

            {/* Skill Name */}
            <motion.p 
              className="text-lg font-semibold mt-3 relative z-10"
              whileHover={{ scale: 1.1, color: "#fff" }}
              transition={{ duration: 0.3 }}
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skill;
