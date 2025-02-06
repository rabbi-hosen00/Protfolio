import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-slate-600 border-b-black"
    >
      <Title   des="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title=" Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
         
        />
        <Card
          title="My Programming Journey"
          des="my programming journey with curiosity about web development, diving into the MERN stack to build dynamic applications. I enjoy creating seamless user experiences and continuously learning new technologies to improve my skills. "
          icon={<AiFillAppstore />}
        />
        <Card
          title="Work & Passion"
          des="I love building scalable, user-friendly web applications using the MERN stack. My passion lies in frontend design, backend logic, and seamless user experiences, ensuring every project is both functional and visually engaging"
          icon={<SiProgress />}
        />
        <Card
          title="Hobbies or Interests"
          des="Outside of programming, I enjoy sports & fitness 🏋️‍♂️, gaming & tech trends 🎮, and design & aesthetics 🎨. I also love listening to music & podcasts 🎧 and staying updated on emerging technologies."
          icon={<FaMobile />}
        />
        <Card
          title="Personality"
          des="I’m a curious, creative, and tech-savvy developer who loves solving problems and building amazing digital experiences. Passionate about learning, I embrace challenges with enthusiasm and always strive for innovation."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="I deploy and host websites using Vercel, Netlify, and Render for frontend, while MongoDB Atlas and Railway handle databases. I ensure smooth deployments with environment variable security and performance optimization"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features