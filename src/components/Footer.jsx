/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TbTie } from 'react-icons/tb'

const Footer = () => {
  return (
    <div className='font-popins'>
      <footer className='sm:text-center footer p-10 bg-primaryColorBlack lg:px-20 px-4 flex flex-col lg:flex-row justify-around '>
        <aside>
          <div className='flex flex-row justify-center items-center gap-3'>
            <div className=' bg-primaryColor p-3 rounded-lg'>
              <TbTie size={24} />
            </div>
            <h3 className='text-xl font-bold text-primaryColor'>Jobs</h3>
          </div>
          <p className=' py-2 font-medium text-neutral-400 text-sm leading-8'>
            We Understand That For You, It's Never Just A <br /> Job: It's Your
            Business. That's Why We're <br /> Passionate About Not Only Finding
            Yoe A Quality <br /> Employee, But Also The Perfect Fit.
          </p>
          <div className='flex flex-row gap-4'>
            <div className=' bg-primaryColor p-3 rounded-full'>
              <FaFacebook />
            </div>
            <div className=' bg-primaryColor p-3 rounded-full'>
              <FaInstagram />
            </div>
            <div className=' bg-primaryColor p-3 rounded-full'>
              <FaTwitter />
            </div>
          </div>
        </aside>
        <nav>
          <header className='text-white text-2xl'>About Us</header>
          <a className='link link-hover py-2 font-medium text-neutral-400 text-sm'>
            Jobs
          </a>
          <a className='link link-hover py-2 font-medium text-neutral-400 text-sm'>
            Freelancers
          </a>
          <a className='link link-hover py-2 font-medium text-neutral-400 text-sm'>
            Blog
          </a>
          <a className='link link-hover py-2 font-medium text-neutral-400 text-sm'>
            Security & Policy
          </a>
        </nav>
        <nav>
          <header className='text-white text-2xl'>Our Experts Are</header>
          <a className='link link-hover py-2 font-medium text-neutral-400 text-sm'>
            Developers
          </a>
          <a className='link link-hover py-2 font-medium text-neutral-400 text-sm'>
            Data Scientist
          </a>
          <a className='link link-hover py-2 font-medium text-neutral-400 text-sm'>
            Project/Product Managers
          </a>
          <a className='link link-hover py-2 font-medium text-neutral-400 text-sm'>
            Designers
          </a>
        </nav>
        <nav>
          <header className='text-white text-2xl'>Newsletter</header>
          <a className='link link-hover py-2 font-medium text-neutral-400 text-sm'>
            Receive news and promotions
          </a>
          <div className='bg-white py-2 px-3 rounded-lg'>
            <input
              type='text'
              placeholder='Email'
              className='input w-full max-w-[150px] mx-2 text-black'
            />
            <button className='px-4 py-2.5 bg-black text-white font-medium rounded-md'>
              Register
            </button>
          </div>
        </nav>
      </footer>
      <footer className='footer footer-center p-4 bg-primaryColor text-base-content'>
        <aside>
          <p className='font-medium'>Copyright 2023 © DuoCode Innovation</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
