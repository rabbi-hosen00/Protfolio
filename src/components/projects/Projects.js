import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-slate-600 border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Equipment Sports"
          des="EquiSports offers top-quality sports equipment, featuring gear for various sports, secure shopping, price sorting, and a seamless experience."
          src={projectOne}
          gitHublink="https://github.com/rabbi-hosen00/Assignment-10-Lotas-client"
          liveLink="https://sports-c4a85.web.app/" // <-- Replace with actual deployment link!
        />
        <ProjectsCard
          title="Learning Language"
          des=" Learning a language enhances communication, cognitive skills, and cultural understanding. It involves vocabulary, grammar, and practice through reading, writing, listening, and speaking for fluency and proficiency."
          src={projectTwo}
          gitHublink="https://github.com/rabbi-hosen00/Learning-language-client"
          liveLink="https://learning-language-127fc.web.app/"
        />
        <ProjectsCard
          title="Medicine Ecommerce"
          des=" A Medicine E-commerce platform enables users to buy medicines and healthcare products online. It ensures secure authentication, prescription uploads, order tracking, and expert consultations, built with the MERN stack for efficiency and scalability.!"
          src={projectThree}
          gitHublink="https://github.com/rabbi-hosen00/medicine-ecommerce-project-client"
          liveLink="https://assignment-12-medicine.web.app/"
        />

      </div>
    </section>
  );
}

export default Projects