
'use client'
import DesktopNav from '../nav/desktop'
import MobileNav from '../nav/mobile'
import Header from '@/components/header/header'
import { useContext, useEffect, useState } from 'react'
import { navMountContext } from '@/app/dashboard/provider'
import { navCollapseContext } from '@/app/dashboard/provider'


const DashBoard = ({children}) => {
  const {navMount} = useContext(navMountContext)
  const {navCollapse, setNavCollapse} = useContext(navCollapseContext)

  return (
   <div className=" relative flex w-[100vw] gap-4 bg-gray_bg dark:bg-white py-3 px-3
   text-black h-full ">
    
     {
      navMount &&  
     <div className={`hidden md:block fixed left-3 top-3  bottom-3 z-50`}>
         <DesktopNav navCollapse = {navCollapse} setNavCollapse={setNavCollapse}/>
     </div>
     }

     <div className={`w-full  ease-in-out duration-500
         sm:ml-0
         ${ (navMount && navCollapse) && `md:ml-[5rem]` }  
         ${ (navMount && !navCollapse) && `md:ml-[13rem]` }
         ${ (!navMount) && `md:ml-[0rem]` } 
         `}>
       <div className=''> 
         <Header />
       </div> 
      <div className='z-0'>
         {children} 
      </div>
       
     </div>
  
   </div>
  )
    
}

export default DashBoard
