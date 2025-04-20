import React from "react";
import ayush from "../assets/AyushImage.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { Link } from "lucide-react";

function Hero() {
  
  return (
    <section className="relative" id="hero">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row item-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-35 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'am Ayush <span className="text-red-500">Raj</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Full Stack Developer & Designer</p>
            <p className="mb-4">
              I'm a passionate full stack developer with experties in React js,
              Node js, MongoDB, Express js and more. I love creating beautiful
              and functional web applications.
            </p>
            <a
              href="/Ayush_Raj_CV (1).pdf"
              download="Ayush_Raj_CV.pdf"
              className="bg-black text-white px-3 py-2 w-max rounded-md cursor-pointer"
            >
              Download CV
            </a>
          </div>
          <div className="md:w-1/2 relative flex justify-center item-end">
            <img src={ayush} alt="" className="lg:h-[90vh] h-100" />
          </div>
        </div>
      </div>

      <div className="absolute  top-55 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <a href="https://www.instagram.com/yadav_ayush_.999?utm_source=qr&igsh=MXhleHBoNDZkNnBheQ==" target="_blank" rel="noopener noreferrer">
          <img
            src={insta}
            alt=""
            className='w-20 cursor-pointer   hover:scale-110 transition-transform duration-300"'
          />
        </a>

        <a
          href="https://github.com/AyushRaj999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt=""
            className='w-20 cursor-pointer   hover:scale-110 transition-transform duration-300"'
          />
        </a>

        <a
          href="https://www.linkedin.com/in/ayush-raj-69676124a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt=""
            className='w-20 cursor-pointer   scale-90 hover:scale-110 transition-transform duration-300"'
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
