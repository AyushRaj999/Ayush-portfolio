import React from "react";
import html from "../assets/html (2).png"
import css from "../assets/css (2).png"
import js from "../assets/js (2).png"
import bootstrap from "../assets/bootstrap (2).png"
import react from "../assets/react (2).png"
import express from "../assets/express.png"
import node from "../assets/node (2).png"
import mongodb from "../assets/mongodb (2).png"

function Skills() {
  return (
    <div className="relative" id="skills">
      <div className="bg-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl underline text-red-600 font-semibold tracking-wide uppercase">
              My Skill
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-gray-500 lg:mx-auto">
              I am a full stack developer with a passion for building scalable
              and efficient web applications. I have experience with a variety
              of programming languages and technologies, including JavaScript,
              HTML/CSS, Bootstrap, and MERN Stack.
            </p>
          </div>
        
        <div className="mt-10 ">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
         
            <div className="shadow-lg rounded-lg p-6 bg-white">
              <div className=" flex items-center justify-center flex-col">
                <img src={html} alt="" className="p-2 w-52 mt-4 " />
                <h1 className="font-semibold text-3xl font-serif">HTML</h1>
              </div>
            </div>


              <div className="shadow-lg rounded-lg p-6 bg-white">
              <div className=" flex items-center justify-center flex-col">
                <img src={css} alt="" className="p-2 w-52 mt-4 " />
                <h1 className="font-semibold text-3xl font-serif">CSS</h1>
              </div>
              
            </div>

            <div className="shadow-lg rounded-lg p-6 bg-white">
              <div className=" flex items-center justify-center flex-col">
                <img src={js} alt="" className="p-2 w-52 mt-4 " />
                <h1 className="font-semibold text-3xl font-serif">JavaScript</h1>
              </div>
              
            </div>

            <div className="shadow-lg rounded-lg p-6 bg-white">
              <div className=" flex items-center justify-center flex-col">
                <img src={bootstrap} alt="" className="p-2 w-52 mt-4 " />
                <h1 className="font-semibold text-3xl font-serif">Bootstrap</h1>
              </div>
              
            </div>

            <div className="shadow-lg rounded-lg p-6 bg-white">
              <div className=" flex items-center justify-center flex-col">
                <img src={react} alt="" className="p-2 w-52 mt-4 " />
                <h1 className="font-semibold text-3xl font-serif">React js</h1>
              </div>
              
            </div>

            <div className="shadow-lg rounded-lg p-6 bg-white">
              <div className=" flex items-center justify-center flex-col">
                <img src={express} alt="" className="p-2 w-52 mt-4 " />
                <h1 className="font-semibold text-3xl font-serif">Express js</h1>
              </div>
              
            </div>

            <div className="shadow-lg rounded-lg p-6 bg-white">
              <div className=" flex items-center justify-center flex-col">
                <img src={node} alt="" className="p-2 w-52 mt-4 " />
                <h1 className="font-semibold text-3xl font-serif">Node js</h1>
              </div>
              
            </div>

            <div className="shadow-lg rounded-lg p-6 bg-white">
              <div className=" flex items-center justify-center flex-col">
                <img src={mongodb} alt="" className="p-2 w-52 mt-4 " />
                <h1 className="font-semibold text-3xl font-serif">MongoDB</h1>
              </div>
              
            </div>

            
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
