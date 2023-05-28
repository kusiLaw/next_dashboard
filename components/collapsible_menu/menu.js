'use client'
import { useContext, useState } from 'react'
import Hamburger from 'hamburger-react'
import { navContext } from '@/app/dashboard/provider'

export const CollapsibleMenu = () => {

 const {navMount, setNavMount} = useContext(navContext)

  console.log('rendering collapse',navMount)

  return (
    <div className='text-md font-light'>
      <Hamburger toggled={navMount} toggle={setNavMount}  distance="md"  label="Show menu" size={25}/>
    </div>
  )
}
