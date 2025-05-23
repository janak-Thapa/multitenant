import React from 'react'
import Navbar from './navbar';
import Footer from './footer';

interface LAYOUTPROPS  {
    children: React.ReactNode;
}

const Layout = ({ children }: LAYOUTPROPS) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <div className='flex-1 bg-[#F4F4F0]'>
        {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout