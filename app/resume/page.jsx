'use client';

import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma,
  FaNodeJs, FaPython, FaJava
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter, SiMongodb } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// --- DATA ---

const about = {
  title: "About Me",
  description:
    "I am Tharindu Gamage, a passionate web developer with experience in building dynamic web applications. I love working with both frontend and backend technologies and continuously learning new tools and frameworks to enhance my skills.",
  info: [
    { fieldName: "Name", fieldValue: "Tharindu Gamage" },
    { fieldName: "Phone", fieldValue: "+94 78 796 2180" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Email", fieldValue: "tharindupushpa802@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Sinhala" },
    { fieldName: "Location", fieldValue: "Colombo, Sri Lanka" },
    { fieldName: "Freelance", fieldValue: "Available" },
  ],
};

const experience = [
  {
    title: "My Experience",
    description:
      "I have worked on diverse projects ranging from small business websites to enterprise-grade applications. My roles include frontend & backend development, UI/UX improvements, and system optimization.",
    items: [
      { company: "ServerClub", role: "Web Developer", duration: "July 2025 - Present" },
      { company: "Web Design Studio", role: "Frontend Developer", duration: "Summer 2021" },
      { company: "Frontend Masters", role: "Frontend Developer", duration: "2022 - 2023" },
      { company: "Freelance", role: "Full-Stack Developer", duration: "2020 - Present" },
    ],
  },
];

const education = [
  {
    title: "My Education",
    description:
      "My academic background includes Information Technology and Software Engineering studies along with certifications and self-learning projects.",
    items: [
      { Institution: "HNDIT - Information Technology", position: "Undergraduate Student", duration: "2021 - 2023" },
      { Institution: "University of Moratuwa - Full Stack Web Dev", position: "Certificate Program", duration: "2023 - 2024" },
      { Institution: "Udemy & FreeCodeCamp", position: "Online Courses (React, Node.js)", duration: "2020 - Present" },
      { Institution: "Self Learning", position: "Next.js, Flutter", duration: "2020 - Present" },
      { Institution: "Freelance Projects", position: "Web Developer", duration: "Ongoing" },
      { Institution: "VTA", position: "Computer Hardware & Networking", duration: "Jan 2019 - Jul 2020" },
    ],
  },
];

const skills = [
  {
    title: "My Skills",
    description:
      "I have a diverse skill set spanning frontend, backend, databases, and tools for development and design.",
    categories: [
      {
        category: "Frontend",
        items: [
          { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" /> },
          { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
          { name: "React", icon: <FaReact className="text-blue-400" /> },
          { name: "Next.js", icon: <SiNextdotjs className="text-gray-400" /> },
          { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
          { name: "Flutter (Dart)", icon: <SiFlutter className="text-blue-500" /> },
          { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        ],
      },
      {
        category: "Backend",
        items: [
          { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
          { name: "Laravel (PHP)", icon: <span className="text-red-500 font-bold">L</span> },
          { name: "C#", icon: <span className="font-bold text-purple-400">#</span> },
          { name: "Java", icon: <FaJava className="text-red-500" /> },
          { name: "Python", icon: <FaPython className="text-yellow-300" /> },
        ],
      },
      {
        category: "Databases",
        items: [
          { name: "MySQL", icon: <span className="text-blue-400 font-bold">SQL</span> },
          { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
          { name: "phpMyAdmin", icon: <span className="text-orange-400 font-bold">php</span> },
        ],
      },
      {
        category: "Tools & Others",
        items: [
          { name: "Git & GitHub", icon: <span className="font-bold text-black">Git</span> },
          { name: "Selenium", icon: <span className="font-bold text-green-400">SE</span> },
        ],
      },
    ],
  },
];

// --- COMPONENT ---

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.6, ease: "easeOut" } }}
      className="py-10"
    >
      <div className="container mx-auto max-w-6xl px-4 flex flex-col xl:flex-row gap-8">
        {/* Tabs */}
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-6 w-full">
          {/* Sidebar Tabs */}
          <TabsList className="flex flex-wrap xl:flex-col gap-2 sm:gap-3 bg-transparent overflow-x-auto">
            {[
              { key: "experience", label: "Experience" },
              { key: "education", label: "Education" },
              { key: "skills", label: "Skills" },
              { key: "about", label: "About Me" },
            ].map(t => (
              <TabsTrigger
                key={t.key}
                value={t.key}
                className="min-w-[110px] sm:w-[200px] text-center sm:text-left px-3 py-2 text-sm sm:text-base rounded-lg font-medium
                           data-[state=active]:bg-emerald-500 data-[state=active]:text-black transition"
              >
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content */}
          <div className="flex-1">
            {/* Experience */}
            <TabsContent value="experience">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{experience[0].title}</h2>
              <p className="text-gray-400 mb-6">{experience[0].description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {experience[0].items.map((job, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 sm:p-6 border rounded-lg bg-black/20"
                  >
                    <span className="text-emerald-400 text-xs sm:text-sm">{job.duration}</span>
                    <h3 className="font-semibold text-base sm:text-lg">{job.role}</h3>
                    <p className="text-gray-400 text-sm">{job.company}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{education[0].title}</h2>
              <p className="text-gray-400 mb-6">{education[0].description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {education[0].items.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 sm:p-6 border rounded-lg bg-black/20"
                  >
                    <span className="text-emerald-400 text-xs sm:text-sm">{edu.duration}</span>
                    <h3 className="font-semibold text-base sm:text-lg">{edu.Institution}</h3>
                    <p className="text-gray-400 text-sm">{edu.position}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{skills[0].title}</h2>
              <p className="text-gray-400 mb-6">{skills[0].description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {skills[0].categories.map((cat, idx) => (
                  <div key={idx} className="p-4 sm:p-6 border rounded-lg bg-black/20">
                    <h3 className="font-semibold mb-3">{cat.category}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((skill, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm sm:text-base">
                          {skill.icon} <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{about.title}</h2>
              <p className="text-gray-400 mb-6">{about.description}</p>
              <ul className="space-y-3">
                {about.info.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 p-3 border rounded-lg bg-black/20"
                  >
                    <span className="font-semibold">{item.fieldName}</span>
                    <span className="text-gray-400">{item.fieldValue}</span>
                  </motion.li>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
