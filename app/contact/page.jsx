"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    Description: "0787962180",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    Description: "tharindupushpa802@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    Description: "1st Lane 74, Badulupitiya, Badulla",
  },
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeInOut" },
      }}
      className="py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-[30px]">
          {/* form */}
          <div className="w-full xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-6 sm:p-8 bg-[#27272c] rounded-xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-accent font-bold">
                Let’s work together
              </h3>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                Have a project in mind or need help bringing your web development
                ideas to life? Let’s work together to build engaging, innovative,
                and user-friendly web solutions. Drop your details below, and let’s
                create something extraordinary!
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="text" placeholder="Phone Number" />
              </div>

              {/* select */}
         <Select>
  <SelectTrigger className="w-full bg-black text-white">
    <SelectValue placeholder="Select a service" className="text-white" />
  </SelectTrigger>
  <SelectContent className="bg-black text-white">
    <SelectGroup>
      <SelectLabel className="text-white">Select a service</SelectLabel>
      <SelectItem value="web" className="text-white">Web Development</SelectItem>
      <SelectItem value="mobile" className="text-white">Mobile App Development</SelectItem>
      <SelectItem value="uiux" className="text-white">UI UX Design</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>


              {/* textarea */}
              <Textarea
                className="h-[180px] sm:h-[200px]"
                placeholder="Type your message here..."
              />

              {/* button */}
              <Button size="md" className="max-w-[200px]">
                Send Message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
            <ul className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 sm:gap-6 bg-[#1f1f23] rounded-lg p-4 sm:p-6"
                >
                  <div className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[22px] sm:text-[26px] md:text-[28px]">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm md:text-base text-white/60">
                      {item.title}
                    </p>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                      {item.Description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
