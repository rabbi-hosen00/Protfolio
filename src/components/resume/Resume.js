import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience"

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-2 border-b-[1px] border-b-slate-600 border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="Educational Qualification" />
      </div>
     
      {educationData && <Education />}
     
 
    </section>
  );
}

export default Resume