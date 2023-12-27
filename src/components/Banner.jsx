/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Man from '../assets/man.png'

const Banner = () => {
  return (
    <div className='container max-w-screen-2xl lg:px-24 px-4 font-poppins mx-auto py-12 lg:pb-28'>
      <div className='flex lg:flex-row flex-col sm:flex-row-reverse justify-center items-center gap-8'>
        <div className='md:w-1/2 space-y-8'>
          <h1 className='lg:text-7xl text-5xl font-bold lg:leading-snug'>
            Hire Expert For
            <span className='italic text-primaryColorBlue px-4'>Future.</span>
          </h1>
          <p className='text-xl font-normal leading-relaxed text-justify lg:w-5/6'>
            We Understand That For You, It's Never Just A Job: It's Your
            Business. That's Why We're Passionate About Not Only Finding You A
            Quality Employee, But Also The Perfect Fit.
          </p>
          <button className='px-5 py-2.5 text-white bg-primaryColorPurple rounded-lg font-medium'>
            Get Startrd
          </button>
          <div className='flex flex-row items-center gap-3'>
            <span className='text-lg font-medium'>4.9</span>
            <div className='rating'>
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-yellow-400'
              />
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-yellow-400'
                checked
              />
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-yellow-400'
              />
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-yellow-400'
              />
              <input
                type='radio'
                name='rating-2'
                className='mask mask-star-2 bg-yellow-400'
              />
            </div>
            <span className='text-lg font-medium'>567K+ Ratings</span>
          </div>
        </div>
        <div className='md:w-1/2'>
          <div className='flex justify-center items-center'>
            <div>
              <img src={Man} alt='banner' className=' rounded-xl w-90' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
