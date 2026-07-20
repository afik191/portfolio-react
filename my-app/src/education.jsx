import React from 'react';
import {
  FaGraduationCap,
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaJava,
  FaLaptopCode,
  FaMicrochip,
  FaToolbox,
} from 'react-icons/fa';
import { SiC, SiGit, SiGithub, SiPython } from 'react-icons/si';

const EducationAndSkills = () => {
  return (
    <section id="education" className="bg-slate-50 py-16 px-6 min-h-svh border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-primary" /> Education
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900">Recent graduate in Computer Science</h3>
              <p className="text-sm font-medium text-slate-500 mt-1">HIT Holon - 2024</p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Relevant Courses: Algorithms, Data Structures, Networks, Advanced Programming in C and more. Developed strong foundation in software engineering principles and complex problem-solving.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <h2 className="text-4xl font-extrabold text-slate-800 mb-8 flex items-center gap-3">
          <FaCode className="text-primary" /> Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-10">
            <SkillCategory title="Frontend" icon={<FaLaptopCode className="text-slate-700" />}>
              <Skill icon={<FaHtml5 className="text-[#E34F26] text-4xl mx-auto" />} label="HTML5" />
              <Skill icon={<FaCss3Alt className="text-[#1572B6] text-4xl mx-auto" />} label="CSS3" />
              <Skill icon={<FaJs className="text-[#F7DF1E] text-4xl mx-auto" />} label="JavaScript" />
              <Skill icon={<FaReact className="text-[#61DAFB] text-4xl mx-auto" />} label="React" />
            </SkillCategory>
            <SkillCategory title="Backend" icon={<FaMicrochip className="text-slate-700" />}>
              <Skill icon={<FaNode className="text-[#339933] text-4xl mx-auto" />} label="Node.js" />
            </SkillCategory>
          </div>
          
          <div className="space-y-10">
            <SkillCategory title="Languages" icon={<FaCode className="text-slate-700" />}>
              <Skill icon={<FaJava className="text-[#007396] text-4xl mx-auto" />} label="Java" />
              <Skill icon={<SiC className="text-[#A8B9CC] text-4xl mx-auto" />} label="C" />
              <Skill icon={<SiPython className="text-[#3776AB] text-4xl mx-auto" />} label="Python" />
            </SkillCategory>

            <SkillCategory title="Tools" icon={<FaToolbox className="text-slate-700" />}>
              <Skill icon={<FaCode className="text-[#06B6D4] text-4xl mx-auto" />} label="Tailwind CSS" />
              <Skill icon={<SiGit className="text-[#F05032] text-4xl mx-auto" />} label="Git" />
              <Skill icon={<SiGithub className="text-black text-4xl mx-auto" />} label="GitHub" />
            </SkillCategory>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, label }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3">
    {icon}
    <p className="text-sm font-semibold text-slate-700">{label}</p>
  </div>
);

const SkillCategory = ({ title, icon, children }) => (
  <div className="bg-slate-100/50 rounded-2xl p-6 border border-slate-200">
    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
      {icon} {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
      {children}
    </div>
  </div>
);

export default EducationAndSkills;
