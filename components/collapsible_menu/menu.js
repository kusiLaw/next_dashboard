'use client'
import { useContext, useState } from 'react'
import Hamburger from 'hamburger-react'
// import { navContext } from '@/app/dashboard/provider'
// import { navToggleContext } from '@/app/provider'
import { navToggleContext } from '@/app/dashboard/provider'

export const CollapsibleMenu = () => {

 const {navMount, setNavMount} = useContext(navToggleContext)


  console.log('rendering collapse',navMount)

  return (
    <div className='text-md font-light'>
      <Hamburger  onToggle={ (toggled) => {
        if(toggled){
         setNavMount(false)
          
        }else{
         setNavMount(true)
        }
      }}  distance="md"  label="Show menu" size={25}/>
    </div>
  )
}
