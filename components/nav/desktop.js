'use client'
import React, { useState, useContext } from 'react'
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { navControllerButtonContext } from '@/app/dashboard/provider';
import { storeUserDefaultSettings } from '@/utils/localStorage';
import Nav from './nav';

const DesktopNav = ({navCollapse, setNavCollapse}) => {
  const {displayNavControllerButton} = useContext(navControllerButtonContext)


  return (

     <nav className={`flex flex-col ${navCollapse ? `w-[4rem]`:`w-[12rem]`} dark:text-white   bg-white dark:bg-dark_color p-4 rounded-xl drop-shadow-xl  
     h-full animate-fade-right animate-delay-500  ease-in-out duration-500`}>
      
      <div className='flex flex-col gap-3  pb-4 mb-6 border-1 border-b transition duration-1000'>
        { displayNavControllerButton && 
            <div className='flex  w-full justify-between  dark:text-white animate-fadeIn'>
                <div onClick={() => { 
                        setNavCollapse(false)
                        storeUserDefaultSettings('navCollapse', false)
                     }} 
                     className={` ${navCollapse ?  ``: `hidden`} flex ml-1  	 text-xl`}>
                   <BiExpand/>
                </div>
           
                <div onClick={() => { 
                     setNavCollapse(true)
                     storeUserDefaultSettings('navCollapse', true)
                     }} 
                     className={`${navCollapse ?  `hidden`: ``} text-xl justify-self-end	`}>
                 <BiCollapse/> 
                </div>
            </div> 
         }

         <h1 className='dark:text-white  '>Laky</h1>
      </div>
       <Nav navCollapse={navCollapse} />   
    </nav> 
 
  )
}

export default DesktopNav