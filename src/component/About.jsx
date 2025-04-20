import React from 'react'
import mernlogo from '../assets/mernlogo.png'
import Education from './Education'

function About() {
  return (
    <div className='relative' id='about'>
      <div className='bg-gray-100 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
           <div className='text-center'>
               <h2 className='text-base underline text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
               <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I am Ayush Raj</p>
               <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-justify'>
                I am a full stack developer with a passion for building scalable and efficient web applications. I have experience with a variety of programming languages and technologies, including JavaScript, HTML/CSS, Bootstrap, and MERN Stack.

               </p>
           </div>
           <div className='mt-10 '>
               <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                    <div className="shadow-lg rounded-lg p-6 bg-white">
                        <h3 className='text-2xl font-semibold text-gray-900 underline'>My <span className='text-red-600'>Journey</span></h3>
                        <p className='mt-4 text-lg text-gray-600 text-justify'>
                            I started my journey in the field of full stack web development in 2021, with a passion to learn and grow. I have been built various projects such as perosonal portfolio, chat app, book store application, amazon clone, a shoes website and many more.
                            My projects demonstrate my ability to integrate powerful backend solutions with sleek, user-friendly frontend interfaces.
                        </p>
                        <div className=' flex items-center justify-center flex-col'>
                        <img src={mernlogo} alt="" className='p-2 w-52 mt-4 '/>
                        </div>
                        
                    </div>


                    <div className="shadow-lg rounded-lg p-6 bg-white">
                    <h3 className='text-2xl font-semibold text-gray-900 underline'>My <span className='text-red-600'>Experience</span> </h3>
                        <p className='mt-4 text-lg text-gray-600 text-justify'>
                        I am a final-year B.Tech student in Computer Science and Engineering (CSE), graduating in 2025, with a strong foundation in full stack developer. Currently interning at Digicoders Pvt. Ltd., I specialize in MERN stack development, contributing to dynamic and responsive web applications. My project portfolio includes building a real-time chat application, an e-commerce shoe website, a gradient color generator, a book store application and many more, showcasing my proficiency in HTML, CSS, JavaScript, Tailwind CSS, and MERN Stack. I am eager to leverage my technical expertise and problem-solving skills to pursue a career as a MERN Stack Developer.
                        </p>
                    </div>
               </div>
           </div>
        </div>
        <Education/>
      </div>
    </div>
  )
}

export default About
