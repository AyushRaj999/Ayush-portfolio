import React from 'react'

const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Dr. APJ Abdul Kalam Technical University, Lucknow",
      year: "2021 - 2025",
      details: "Studying core computer science concepts and web development.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "G.J.Collage,Rambag,Bihta,Patna,",
      year: "2019 - 2021",
      details: "Completed 12th with a focus on Mathematics and Science.",
    },
  ];

function Education() {
  return (   

 <div className="max-w-4xl mx-auto p-6 pt-10">
      {/* <h2 className="text-3xl font-bold text-center mb-6">Education</h2> */}
      <div className="max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold relative inline-block">
        Education
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-900"></span>
      </h2>
    </div>
      <div className='flex items-center justify-center'>
      <ol className="relative border-l border-blue-500 text-center items-center">
        {education.map((edu, index) => (
          <li key={index} className="mb-6 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <p className="text-gray-500">{edu.institution} | {edu.year}</p>
            <p className="text-gray-700 mt-2">{edu.details}</p>
          </li>
        ))}
      </ol>
      </div>
    </div> 

    
)
}

export default Education
