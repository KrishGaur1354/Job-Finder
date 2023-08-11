import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About the Creator</h1>
          <p className='text-justify leading-7'>
          Krish Gaur is an aspiring DevOps and Web Developer with expertise in Java, JavaScript, Bash, HTML, CSS, Python, MySQL, and C++. Active participant in open-source programs like Hacktoberfest '22, SWoC '23, and KWoC '23. Committed to continuous learning for professional growth in the dynamic field of technology.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>
    </div>
  );
};

export default About;
