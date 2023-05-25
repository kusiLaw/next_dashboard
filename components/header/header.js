'use client'

import React, { useEffect, useState } from 'react'
import SearchInput from '../searchinput/search_input'
import { usePathname } from 'next/navigation';
import Notification from '../notification/notification';
import { CollapsibleMenu } from '../collapsible_menu/menu';
import Profile from '../profile/profile';
import PageConfiguration from '../page_settings/configure';

const Header = () => {
 const pathname = usePathname();

  const getHeaderName  = () => {
     const name =  pathname.split('/').pop()
     return name.charAt(0).toUpperCase() + name.slice(1)
  }

  return (
   <header className='flex flex-col md:flex-row rounded-md justify-between py-2' >
      <h1 className='flex font-semibold text-2xl py-2 text-light_ash_text'>{getHeaderName()}</h1>
      <div className='flex self-end  border-2 items-center gap-4 py-1  px-4 shadow-md rounded-xl
         bg-white '> 

          <SearchInput />
          <PageConfiguration />
      
          <CollapsibleMenu  />
          <Notification  />
          <div className='relative '>
            <Profile />
          </div>
         
      </div>
      {/* {openSetting && <Settings  setOpenSettings= {setOpenSettings} /> } */}
   </header>
  )
}

export default Header
