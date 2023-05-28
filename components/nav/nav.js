'use client'
import React, { useState, memo, useContext } from 'react'
import LinkButton from '../linkButton/linkButton'
import { BiGridAlt, BiUser, BiPieChartAlt} from 'react-icons/bi';
import { FiSettings} from 'react-icons/fi';
import { useRef, useEffect } from 'react';
import { navContext } from '@/app/dashboard/provider';

const Nav = () => {
 const {navMount} = useContext(navContext)

  return (
   <>
   { !navMount &&
     <nav className='flex flex-col bg-white dark:bg-dark_color p-4 rounded-xl shadow-xl  
     h-full '>
      <div className='pb-4 mb-6 border-1 border-b h'>
         <h1 className='dark:text-white  '>Laky</h1>
      </div>
      <div className=''>
         <LinkButton  text = 'Home' link_path ='/dashboard'   id='home' > 
           <BiGridAlt/>
         </LinkButton>
         <LinkButton  text = 'Users' link_path = '/dashboard/users' id='users' > 
           <BiUser/>
         </LinkButton>
         <LinkButton  text = 'Report' link_path='dashboard/reports' id='report'> 
           <BiPieChartAlt/>
         </LinkButton>
     
      </div>
      <div className=''>
         <LinkButton text = 'Settings'  link_path='' > 
              <FiSettings/>
         </LinkButton>
         <LinkButton text = 'View Page' link_path= '/' > 
              <FiSettings/>
         </LinkButton>
      </div>
      
    </nav> }
   </>
 
  )
}

export default Nav
