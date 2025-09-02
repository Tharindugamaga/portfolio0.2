'use client';
import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link';
import { number } from 'framer-motion';
import { Description } from '@radix-ui/react-dialog';
import { Code, Palette, Globe, Database } from "lucide-react";


const services = [
  {
    num:'01',
    icon: <Code className="w-10 h-10 text-indigo-500" />,
    title: "Web Development",
    description: "Building fast, responsive, and modern websites with React, Laravel, and PHP.",
    href: "#",
  },
  {
     num:'02',
    icon: <Palette className="w-10 h-10 text-pink-500" />,
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces and engaging user experiences with Figma.",
    href: "#",
  },
  {
     num:'03',
    icon: <Globe className="w-10 h-10 text-green-500" />,
    title: "SEO Optimization",
    description: "Improving your website visibility and ranking across search engines.",
       href: "#",
  },
  {
     num:'04',
    icon: <Database className="w-10 h-10 text-yellow-500" />,
    title: "Mobile Development",
     description: "Creating mobileaaaaaaa apps with Flutter for Android and iOS platforms.",
     href: "#",
    },
];

import {motion} from 'framer-motion'








const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent  group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              <h2 className="text-2xl font-semibold mt-2 group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full mt-4"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};



export default Services;