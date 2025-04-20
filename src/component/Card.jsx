import React from 'react'
import git from '../assets/github.png'

function Card({item}) {
  return (
    <div className='border border-red-500 rounded-lg w-[350px] lg:w-[350px] bg-red-50 h-full'>
        <img src={item.image} alt="" className='rounded-lg'/>
        <div className='p-4'>
            <h1 className='text-xl font-semibold mb-2'>{item.name}</h1>
            <p className='text-sm text-black'>{item.description}</p>
              <div className='flex gap-3 mt-4'>
                   <button className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700'>
                    <a href={item.live} target="_blank" rel="noopener noreferrer">Live Project</a>
                   </button>
                   <button className='bg-red-300 hover:bg-red-500 cursor-pointer text-black py-2 px-4 rounded-lg'>
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className='flex gap-1'>
                        <img src={git} alt="" className='w-10' />
                        Github Link
                    </a>
                   </button>
              </div>
        </div>
      
    </div>
  )
}

export default Card
