'use client'
import React, { useState, useContext } from 'react'
import LinkButton from '../linkButton/linkButton'
import { BiGridAlt, BiUser, BiPieChartAlt} from 'react-icons/bi';
import { FiSettings} from 'react-icons/fi';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { navControllerButtonContext } from '@/app/dashboard/provider';
import { FaGlobeAfrica} from 'react-icons/fa';
import { storeUserDefaultSettings } from '@/utils/localStorage';
// import { navContext } from '@/app/dashboard/provider';

const Nav = ({navCollapse, setNavCollapse}) => {
  const {displayNavControllerButton} = useContext(navControllerButtonContext)


  return (

     <nav className={`flex flex-col ${navCollapse ? `w-[4rem]`:`w-[12rem]`} dark:text-white   bg-white dark:bg-dark_color p-4 rounded-xl shadow-xl  
     h-full animate-fade-right animate-delay-500	   ease-in-out duration-500`}>
      <div className='flex flex-col gap-3  pb-4 mb-6 border-1 border-b transition duration-1000'>
        { displayNavControllerButton && <div className='flex w-full justify-between  dark:text-white animate-fadeIn'>
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
    
         </div> }

         <h1 className='dark:text-white  '>Laky</h1>
      </div>
      <div className='ease-in-out duration-500'>
         <LinkButton   link_path ='/dashboard'   id='home' > 
           <BiGridAlt/>{navCollapse  ? '' : <span className='animate-fadeIn  duration-[1000]'> Home</span> }
         </LinkButton>
         <LinkButton   link_path = '/dashboard/users' id='users' > 
           <BiUser/> {navCollapse  ? '' : <span className='animate-fadeIn  duration-[1000]'> Users</span>   }
         </LinkButton>
         <LinkButton   link_path='dashboard/#' id='report'> 
           <BiPieChartAlt/>{navCollapse  ? '' :<span className='animate-fadeIn  duration-[1000]'> Report</span>  } 
         </LinkButton>
     
      </div>
      <div className=''>
         <LinkButton   link_path='dashboard/#' > 
              <FiSettings/> {navCollapse  ? '' : <span className='animate-fadeIn  duration-[1000]'> Settings</span> }
         </LinkButton>
         <LinkButton t link_path= '/' > 
              <FaGlobeAfrica/>{navCollapse  ? '' : <span className='animate-fadeIn  duration-[1000]  '> View Page</span> } 
         </LinkButton>
      </div>
      
    </nav> 
 
  )
}

export default Nav
