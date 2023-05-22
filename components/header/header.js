'use client'

import React, { useState } from 'react'
import SearchInput from '../searchinput/search_input'
import Avatar from '../avatar/avatar'
import Settings from '../page_settings/settings';
import { FiSettings} from 'react-icons/fi';

import ProfileCard from '../profile_card/card';
import Notification from '../notification/notification';

const Header = () => {
  const [openSetting, setOpenSettings] = useState(false)
  const [openProfileCard, setOpenProfileCard] = useState(false)
  const [openMessage, setOpenMessage] = useState(false)


  return (
   <header className='flex  rounded-md justify-between py-2' >
      <h1 className='flex font-semibold text-2xl py-2 text-light_ash_text'>Dashboard</h1>
      <div className='flex relative border-2 items-center gap-4 py-1  px-4 shadow-md rounded-xl
         bg-white '> 
         <SearchInput />
         <div className='' onClick={() => { 
          setOpenProfileCard(false); 
          // setOpenMessage(false); 
          setOpenSettings(true)}}>
          <FiSettings />
         </div>
         <Notification openMessage = {openMessage} />
         <div className='' onClick={()=>{setOpenProfileCard(!openProfileCard)}}>
             <Avatar height={'h-[1.75rem]'} width={'w-[1.75rem]'} />
         </div>

         {openProfileCard && <ProfileCard onMouseLeave={() => {setOpenProfileCard(false)} } />
      
         }
           
      </div>
      {openSetting && <Settings  setOpenSettings= {setOpenSettings} /> }
   </header>
  )
}

export default Header
