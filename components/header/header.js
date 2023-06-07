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
   <header className='flex flex-col mb-3 md:mb-0 md:flex-row  rounded-md justify-between py-2 animate-fadeIn  animate-duration-700 ' >
      <h1 className='flex text-2xl py-2 text-light_ash_text'>{getHeaderName()}</h1>
      <div className=' flex flex-col md:flex-row self-end border-0 md:border-2 items-center gap-4 py-1  px-4 
              md:shadow-md rounded-xl
         bg-white   '> 
          <div className='order-1 md:order-0 pb-2 md:pb-0 '>
             <SearchInput />
          </div>
          <div className='flex order-0 md:order-1 items-center gap-4 self-end p-2 md:p-0 
           border-2 rounded-lg px-4 md:px-0 md:border-0'>
               <PageConfiguration />
               <div className='hidden md:block'>
                  {displayToggleBtn && <CollapsibleMenu  />}
               </div>
               <div className='md:hidden'>
                  <MobileMenuToggle  />
               </div>
               <Notification  messages = {[]}/>
               <div className='relative '>
                 <Profile />
               </div>
          </div>  
      </div>
    
   </header>
  )
}

export default Header
