'use client'

import React, { useContext, useState } from 'react'
import SearchInput from '../searchinput/search_input'
import { usePathname } from 'next/navigation';
import Notification from '../notification/notification';
import { CollapsibleMenu } from '../collapsible_menu/menu';
import Profile from '../profile/profile';
import PageConfiguration from '../page_settings/configure';
import { toggleBtnContext } from '@/app/dashboard/provider'
import MobileMenuToggle from '../collapsible_menu/mobile_menu';


const Header = () => {
 const pathname = usePathname();
 const {displayToggleBtn } = useContext(toggleBtnContext)

  const getHeaderName  = () => {
     const name =  pathname.split('/').pop()
     return name.charAt(0).toUpperCase() + name.slice(1)
  }         

  return (
   <header className='flex mb-3 md:mb-1 md:flex-row md:align-middle  rounded-md justify-between animate-fadeIn  animate-duration-700 ' >
      <h1 className='flex text-lg self-end text-light_ash_text font-light pb-2 opacity-[0.6] animate-fade animate-duration-700
      animate-delay-500 tracking-wide'>{getHeaderName()}</h1>
      <div className=' flex flex-col md:flex-row self-end border-0 md:border-2 items-center gap-4 py-1  px-4 
              md:shadow-md rounded-xl
         bg-white   '> 
          <div className='order-1 md:order-0 pb-2 md:pb-0 '>
             <SearchInput />
          </div>
          <div className='flex order-0 md:order-1 items-center gap-4 self-end p-1 md:p-0 
            rounded-lg px-4 md:px-0 md:border-0'>
              <PageConfiguration />
                {/* <div className='hidden md:block '>
                  {displayToggleBtn && <CollapsibleMenu  />}
               </div> */}
                <div className='md:hidden md:invisible'>
                  <MobileMenuToggle  />
               </div> 
               <div>
                  <Notification  messages = {[]}/>
               </div>
               
               <div className='relative '>
                 <Profile />
               </div> 
          </div>  
      </div>
    
   </header>
  )
}

export default Header
