"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/Lamp";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Contact=()=> {
  return (
    <section className="w-[100vw] relative bg-black " id="contact">

 
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-100 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="pt-20">
          Let&apos;s build <br /> something cool
          <p className="text-center py-4  px-5 text-base md:text-lg tracking-wider">
            Reach out to me today and let&apos; discuss a project!
          </p>
          <div className="flex items-center justify-center">
            <Link className="mb-10" href="mailto:anish.webwizard@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="tracking-wider"
              />
            </Link>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
    </section>
  );

}
export default Contact