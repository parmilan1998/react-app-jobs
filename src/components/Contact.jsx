/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ContactImg from '../assets/contactImg.jpg'

const Contact = () => {
  return (
    <div className='container max-w-screen-2xl lg:px-24 px-4 mx-auto pb-16 font-popins'>
      <div>
        <div className='lg:w-2/3'>
          <h2 className='lg:text-5xl text-3xl font-semibold font-popins uppercase lg:leading-snug leading-snug tracking-wide'>
            Let's Discuss Your Project And Find Out A Perfect Employee Together?
          </h2>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 py-10'>
          <div>
            <img src={ContactImg} alt='' className='rounded-xl' />
          </div>
          <div>
            <div className='pb-14 space-y-6 text-primaryColorPurple'>
              <div className='space-y-2'>
                <h2 className='text-2xl font-semibold'>Owen Barker</h2>
                <p className='text-lg'>Customer Service excutive</p>
              </div>
              <div className='space-y-2'>
                <h1 className='lg:text-4xl text-2xl'>Barker@Thejobs.com</h1>
                <p className='lg:text-3xl text-xl'>+44 (079) 3225 05-47</p>
              </div>
            </div>
            <div className='space-y-6'>
              <div className='space-y-2'>
                <h2 className='text-2xl font-semibold'>Joe Benson</h2>
                <p className='text-lg'>Marketing excutive</p>
              </div>
              <div className='space-y-2'>
                <h1 className='lg:text-4xl text-2xl tracking-wide'>Benson@Thejobs.com</h1>
                <p className='lg:text-3xl text-xl'>+44 (079) 3225 04-48</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
