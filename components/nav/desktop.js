'use client'
import React, { useState, useContext } from 'react'
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { navMouseControlContext } from '@/app/dashboard/provider';
import { storeUserDefaultSettings } from '@/utils/localStorage';
import Nav from './nav';

const DesktopNav = ({navCollapse, setNavCollapse}) => {
  const {mouseControlNav} = useContext(navMouseControlContext)


  return (

     <nav className={`flex flex-col ${navCollapse ? `w-[4rem]`:`w-[12rem]`} dark:text-white   bg-white dark:bg-dark_color p-4 rounded-xl drop-shadow-xl  
       h-full animate-fade-right animate-delay-500  ease-in-out duration-500`} 
       onMouseLeave={() => { mouseControlNav & setNavCollapse(true) }}    
       onMouseEnter={() => { mouseControlNav & setNavCollapse(false)  }}        >
      <div className='flex flex-col gap-3  pb-4 mb-6 border-1 border-b transition duration-1000 mt-2'>
              <h1 className='dark:text-white  font-extralight'><span className='text-blue_contest italic 
              font-semibold' >L</span>aky</h1>
      </div>
       <Nav navCollapse={navCollapse} />   
    </nav> 
 
  )
}

export default DesktopNav