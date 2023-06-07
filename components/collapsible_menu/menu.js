'use client'
import { useContext, useState } from 'react'
import Hamburger from 'hamburger-react'
import { navMountContext } from '@/app/dashboard/provider'
import { storeUserDefaultSettings } from '@/utils/localStorage'

export const CollapsibleMenu = () => {

 const {navMount, setNavMount} = useContext(navMountContext)



  return (
    <div className='text-md font-light child:!font-bold child:!m-0 child:!p-0'>
      <Hamburger toggled ={!navMount}  onToggle={ (toggled) => {
        if(toggled){
         setNavMount(false)
         storeUserDefaultSettings('navMount', false) 
        }else{
         setNavMount(true)
         storeUserDefaultSettings('navMount',true) 
        }
      }}  distance="sm"  label="Show menu" size={23} className="first:text-md font-normal" />
    </div>
  )
}
