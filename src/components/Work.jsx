/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Work = () => {
  const workDetails = [
    {
      id: 1,
      title: 'Precise Fit',
      description:
        "We Take Of Selecting The Best Candidates That Fully Satisfy The Demands Of Your Projects And Are A Great Personal Fit To Your Organisation And Tech Departments's Culture.",
      image: './works/thumb.png',
    },
    {
      id: 2,
      title: 'Easy & Fast',
      description:
        'Our Fast Assessment Process Enables Your Organisation To Quickly Scale Your Tech Teams, Expedite Recruitment Processes And Focus On Delivering Results.',
      image: './works/selection.png',
    },
    {
      id: 3,
      title: 'Assistance',
      description:
        'An Expertiead Key Account Manager Will Assist You Throught The Whole Project Life Cycle To Ensure That You Get The Most Out Of Your Collaboration.',
      image: './works/tie.png',
    },
  ]
  return (
    <div className='container max-w-screen-2xl lg:px-24 px-4 mx-auto py-16'>
      <div className='flex flex-col justify-center items-center text-center lg:w-1/2 mx-auto font-popins leading-5 tracking-normal py-2'>
        <h2 className='lg:text-5xl text-4xl font-bold font-popins leading-snug text-center py-2'>
          How We Work
        </h2>
        <span className='text-lg font-normal'>
          We enable your projects's success by finding the tech experts that
          best fit to your challenge in short time and with personal assistance.
        </span>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-col-1 md:grid-cols-2 justify-center items-center text-center gap-6 py-10'>
        {workDetails.map((item, index) => (
          <div
            key={item.id}
            className='shadow-lg rounded-lg p-6 space-y-4 font-popins hover:bg-primaryColor5 ease-in duration-200 cursor-pointer'
          >
            <div className='flex justify-center py-6'>
              <div className=' bg-neutral-200 p-5 rounded-full'>
                <img
                  src={item.image}
                  alt='Work'
                  className='w-8 h-8 text-white'
                />
              </div>
            </div>
            <h3 className='text-lg font-bold leading-4'>{item.title}</h3>
            <p className='leading-7 font-normal'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
