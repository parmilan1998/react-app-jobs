import React from 'react'
import CountUp from 'react-countup'

const Productivity = () => {
  return (
    <div className='container max-w-screen-2xl lg:px-24 px-4 bg-primaryColorBlack mx-auto py-16'>
      <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-2'>
        <div className='flex lg:justify-start lg:text-start text-center items-center'>
          <h2 className='text-2xl font-medium text-white font-popins leading-snug '>
            People Productivity Performance
          </h2>
        </div>
        {/* <div className='divider lg:divider-horizontal'></div> */}
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-medium text-lg uppercase tracking-wide font-popins text-neutral-400'>
            Jobs
          </h2>
          <CountUp
            start={1}
            end={235}
            duration={5}
            prefix='+'
            suffix='k'
            className='text-2xl font-bold py-2 text-white'
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-medium text-lg uppercase tracking-wide font-popins text-neutral-400'>
            Startups
          </h2>
          <CountUp
            start={1}
            end={60}
            duration={5}
            prefix='+'
            suffix='k'
            className='text-2xl font-bold py-2 text-white'
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-medium text-lg uppercase tracking-wide font-popins text-neutral-400'>
            Talent
          </h2>
          <CountUp
            start={1}
            end={678}
            duration={100}
            prefix='+'
            suffix='k'
            className='text-2xl font-bold py-2 text-white'
          />
        </div>
      </div>
    </div>
  )
}

export default Productivity
