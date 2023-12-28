import React from 'react'

const FreeTrial = () => {
  return (
    <div className='container max-w-screen-2xl lg:px-24 px-4 mx-auto pb-16 font-popins'>
      <div
        className='hero lg:min-h-[60vh] min-h-[30vh]'
        style={{
          backgroundImage: "url('./background.jpg')",
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-lg'>
            <h1 className='mb-5 text-5xl font-semibold leading-snug'>
              <span className='italic text-primaryColor px-3'>Register</span>For
              Our In Free 7-Day Trial Now
            </h1>
            <div className='bg-white py-2 px-3 rounded-lg flex flex-row'>
              <input
                type='text'
                placeholder='Email'
                className='input w-full mx-2 text-black'
              />
              <button className='px-4 py-2.5 bg-black text-white font-medium rounded-md'>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreeTrial
