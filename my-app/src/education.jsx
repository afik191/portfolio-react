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
import { SiC, SiGit, SiGithub,SiProtools,SiPython } from 'react-icons/si';

const EducationAndSkills = () => {
  return (
    <section id="education" className="bg-blue-100 py-16 px-6 min-h-svh">
      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-blue-400" /> Education
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">3rd year Computer Science student</h3>
              <p className="text-sm text-gray-600">HIT Holon - 2024 to 2026 (expected)</p>
              <p className="mt-2 text-gray-700">
                Relevant Courses: Algorithms, Data Structures, Networks, Advanced Programming in C and more
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <SkillCategory title="Frontend" icon={<FaLaptopCode  className="text-black" />}>
  <Skill icon={<FaHtml5 className="text-orange-500 text-3xl mx-auto" />} label="HTML5" />
  <Skill icon={<FaCss3Alt className="text-blue-500 text-3xl mx-auto" />} label="CSS3" />
  <Skill icon={<FaJs className="text-yellow-500 text-3xl mx-auto" />} label="JavaScript" />
  <Skill icon={<FaReact className="text-cyan-500 text-3xl mx-auto" />} label="React" />
</SkillCategory>

<SkillCategory title="Backend" icon={<FaMicrochip className="text-black" />}>
  <Skill icon={<FaNode className="text-green-600 text-3xl mx-auto" />} label="Node.js" />
</SkillCategory>

<SkillCategory title="Languages" icon={<FaCode className="text-black" />}>
  <Skill icon={<FaJava className="text-orange-500 text-3xl mx-auto" />} label="Java" />
  <Skill icon={<SiC className="text-blue-500 text-3xl mx-auto" />} label="C" />
  <Skill icon={<SiPython className="text-blue-800 text-3xl mx-auto" />} label="Python" />
</SkillCategory>

<SkillCategory title="Tools" icon={<FaToolbox className="text-black" />}>
  <Skill icon={<FaCode className="text-gray-700 text-3xl mx-auto" />} label="Tailwind CSS" />
  <Skill icon={<SiGit className="text-orange-600 text-3xl mx-auto" />} label="Git" />
  <Skill icon={<SiGithub className="text-black text-3xl mx-auto" />} label="GitHub" />
</SkillCategory>

      </div>
    </section>
  );
};

const Skill = ({ icon, label }) => (
  <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
    {icon}
    <p className="mt-2 text-gray-700 font-medium">{label}</p>
  </div>
);

const SkillCategory = ({ title, icon, children }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
      {icon} {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
      {children}
    </div>
  </div>
);


export default EducationAndSkills;
