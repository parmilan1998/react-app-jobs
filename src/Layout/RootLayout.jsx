import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className='min-h-[80vh] bg-neutral-100'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
