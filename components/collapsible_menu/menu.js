'use client'
import { useContext, useState } from 'react'
import Hamburger from 'hamburger-react'
import { navMountContext } from '@/app/dashboard/provider'
import { storeUserDefaultSettings } from '@/utils/localStorage'

import { IoReloadOutline } from "react-icons/io5";
import { FiMenu} from 'react-icons/fi';

export const CollapsibleMenu = ({}) => {

 const {navMount, setNavMount} = useContext(navMountContext)



  return (
    <div className='text-lg font-light child:!font-bold child:!m-0 child:!p-0'>
      {!navMount &&<span onClick={() => {setNavMount(true); storeUserDefaultSettings("navMount", true)}}> <IoReloadOutline/></span>}


      {navMount && <span onClick={() => {setNavMount(false); storeUserDefaultSettings("navMount", false)}}> <FiMenu/> </span>}
    </div>
  )
}
