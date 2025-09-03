"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "/components/ui/WorkSliderBtns";

// Project Data
const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "Travel & Tourism Website",
    description:
      "A responsive travel website showcasing top destinations in Sri Lanka with detailed info, ratings, and bookings. Built with the MERN stack (MongoDB, Express.js, React, Node.js) for a full-stack experience.",
    stack: [
      { name: "MongoDB" },
      { name: "ExpressJS" },
      { name: "ReactJS" },
      { name: "NodeJS" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/travel.jpeg",
    live: "https://your-live-travel-site.vercel.app",
    github: "https://github.com/Tharindugamaga",
  },
  {
    num: "02",
    category: "Mobile App",
    title: "GPA Calculator",
    description:
      "A GPA calculator app that calculates semester and cumulative GPA. Built with Flutter/Dart for cross-platform support and a clean UI.",
    stack: [{ name: "Flutter" }, { name: "Dart" }],
    image: "/assets/work/cal.webp",
    live: "https://your-live-gpa-app.vercel.app",
    github: "https://github.com/Tharindugamaga",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Job Market Website",
    description:
      "A job posting platform where employers can post jobs and applicants can apply. Built with Laravel + MySQL + TailwindCSS.",
    stack: [{ name: "Laravel" }, { name: "MySQL" }, { name: "TailwindCSS" }, { name: "PHP" }],
    image: "/assets/work/job.webp",
    live: "https://your-live-jobmarket-site.vercel.app",
    github: "https://github.com/Tharindugamaga",
  },
  {
    num: "04",
    category: "Mobile App",
    title: "Quiz App",
    description:
      "A quiz application built with Flutter and Dart. Features multiple quizzes, scoring, and a responsive interface.",
    stack: [{ name: "Flutter" }, { name: "Dart" }],
    image: "/assets/work/quiz.jpg",
    live: "https://your-live-quiz-app.vercel.app",
    github: "https://github.com/Tharindugamaga",
  },
  {
    num: "05",
    category: "FullStack",
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce website built with Laravel, featuring Stripe payment integration and email notifications via Mailtrap.",
    stack: [
      { name: "Laravel" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "Stripe" },
      { name: "Mailtrap" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://your-live-laravel-ecommerce.vercel.app",
    github: "https://github.com/Tharindugamage",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4 } }}
      className="min-h-[80vh] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-10">
          {/* LEFT SIDE (TEXT) */}
          <div className="w-full xl:w-[50%] flex flex-col justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-6">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-white capitalize">
                {project.category} project
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/70">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-sm sm:text-base md:text-lg text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 sm:w-[70px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (IMAGES) */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              className="mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[250px] sm:h-[320px] md:h-[400px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute inset-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[10px] sm:bottom-[20px] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[18px] sm:text-[22px] w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
