import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'

const Header = () => {
  const navItem = (
    <>
      <li>
        <a className=' text-primaryColorPurple text-base font-medium'>
          Find Jobs
        </a>
      </li>
      <li>
        <a className=' text-primaryColorPurple text-base font-medium'>
          Salary Tools
        </a>
      </li>
      <li>
        <a className=' text-primaryColorPurple text-base font-medium'>
          Upload Resume
        </a>
      </li>
    </>
  )

  return (
    <div className=' font-popins'>
      <div className='flex flex-row justify-center items-center py-3 gap-4 bg-primaryColor'>
        <img src={Logo} alt='Logo' className='w-6 h-6' />
        <Link to='/'>
          <p className='font-semibold underline'>Click here</p>
        </Link>
        <p className='font-medium text-sm text-neutral-600'>
          To Experience Our Integrations With Platforms More Easily.
        </p>
      </div>
      <div className='navbar lg:px-20 px-4'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navItem}
            </ul>
          </div>
          <img src={Logo} alt='Logo' className='w-10 h-10' />
          <a className='text-2xl font-bold px-2 text-primaryColorPurple'>
            Jobs
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navItem}</ul>
        </div>
        <div className='navbar-end'>
          <a
            href=''
            className='px-5 py-2.5 text-primaryColorPurple font-semibold border-2 border-primaryColorPurple rounded-xl mx-2 hover:bg-primaryColorPurple hover:text-white ease-in duration-200'
          >
            Login
          </a>
          <a
            href=''
            className='px-5 py-2.5 bg-primaryColorPurple text-white rounded-xl hidden lg:flex' 
          >
            Create account
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
