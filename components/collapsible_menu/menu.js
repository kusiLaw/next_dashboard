'use client'
import { useContext, useState } from 'react'
import Hamburger from 'hamburger-react'
import { navMountContext } from '@/app/dashboard/provider'

export const CollapsibleMenu = () => {

 const {navMount, setNavMount} = useContext(navMountContext)


  console.log('rendering collapse',navMount)

  return (
    <div className='text-md font-light'>
      <Hamburger  onToggle={ (toggled) => {
        if(toggled){
         setNavMount(false)
          
        }else{
         setNavMount(true)
        }
      }}  distance="md"  label="Show menu" size={23} />
    </div>
  )
}
