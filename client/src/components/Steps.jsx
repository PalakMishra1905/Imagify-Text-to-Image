
import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center my-32'>

      <h1 className='text-3xl sm:text-4xl mb-2'>
        How it works
      </h1>

      <p className='text-lg text-gray-600 mb-8'>
        Transform words into stunning images
      </p>

      <div className='space-y-4 w-full max-w-3xl text-sm'>

        {stepsData.map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-4 p-5 px-8 
            bg-white shadow-[0_4px_10px_rgba(0,0,0,0.08)] 
            border border-gray-100 cursor-pointer 
            hover:scale-[1.02] 
            hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]
            transition-all duration-300 rounded-lg'
          >

            <img
              width={40}
              src={item.icon}
              alt={item.title}
            />

            <div>
              <h2 className='text-xl font-medium'>
                {item.title}
              </h2>

              <p className='text-gray-500'>
                {item.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Steps
