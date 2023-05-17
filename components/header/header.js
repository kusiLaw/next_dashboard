'use client'

import React, { useState } from 'react'
import SearchInput from '../searchinput/search_input'
import Avatar from '../avatar/avatar'
import { FiSettings} from 'react-icons/fi';
import Settings from '../page_settings/settings';



const Header = () => {
  const [openSetting, setOpenSettings] = useState(false)



  return (
   <header className='flex rounded-md justify-between py-2 ' >
      <h1 className='flex font-black text-2xl py-2'>Dashboard</h1>
      <div className='flex items-center gap-4 py-1  px-4 shadow-md rounded-xl
         bg-white 
      '> 
        <SearchInput />
        <div className='' onClick={() => {setOpenSettings(true)}}>
         <FiSettings />
        </div>
        <Avatar />
        {openSetting && <Settings  setOpenSettings= {setOpenSettings} /> }
      </div>
   </header>
  )
}

export default Header
