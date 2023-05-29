'use client'
import React, { useState, memo, useContext } from 'react'
import LinkButton from '../linkButton/linkButton'
import { BiGridAlt, BiUser, BiPieChartAlt} from 'react-icons/bi';
import { FiSettings, FiArrowLeft,FiArrowRight} from 'react-icons/fi';

import { BiCollapse, BiExpand } from 'react-icons/bi';

// import { navContext } from '@/app/dashboard/provider';

const Nav = ({navCollapse, setNavCollapse}) => {

  return (

     <nav className={`flex flex-col ${navCollapse ? `w-[4rem]`:`w-[12rem]`} dark:text-white   bg-white dark:bg-dark_color p-4 rounded-xl shadow-xl  
     h-full `}>
      <div className='flex flex-col gap-3  pb-4 mb-6 border-1 border-b h'>
      <div className='flex w-full justify-between  dark:text-white '>
             <div onClick={() => { setNavCollapse(false)}} className={` ${navCollapse ?  ``: `hidden`} flex ml-1  	 text-xl`}>
                <BiExpand/>
             </div>
        
             <div onClick={() => { setNavCollapse(true)}} className={`${navCollapse ?  `hidden`: ``} text-xl justify-self-end	`}>
              <BiCollapse/> 
             </div>
    
         </div>

         <h1 className='dark:text-white  '>Laky</h1>
         
       
  
      </div>
      <div className=''>
         <LinkButton   link_path ='/dashboard'   id='home' > 
           <BiGridAlt/>{navCollapse  ? '' : 'Home' } 
         </LinkButton>
         <LinkButton   link_path = '/dashboard/users' id='users' > 
           <BiUser/> {navCollapse  ? '' : "Users" }
         </LinkButton>
         <LinkButton   link_path='dashboard/reports' id='report'> 
           <BiPieChartAlt/>{navCollapse  ? '' : 'Report' } 
         </LinkButton>
     
      </div>
      <div className=''>
         <LinkButton   link_path='' > 
              <FiSettings/> {navCollapse  ? '' : 'Settings' }
         </LinkButton>
         <LinkButton t link_path= '/' > 
              <FiSettings/>{navCollapse  ? '' : 'View Page' } 
         </LinkButton>
      </div>
      
    </nav> 
 
  )
}

export default Nav
