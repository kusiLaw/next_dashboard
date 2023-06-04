"use client"
import { useContext, useEffect, useRef } from 'react';
import { navMountContext } from '@/app/dashboard/provider';
import { navCollapseContext } from '@/app/dashboard/provider';


export const useChartResponsive = () => {
 const {navMount} = useContext(navMountContext)
 const {navCollapse} = useContext(navCollapseContext)
 const resizeRef = useRef(null)
 
  const handleResize = () => {
   if (resizeRef.current){
     resizeRef.current.resize()
   }
  };

 useEffect(()=>{ 


   window.addEventListener('resize', handleResize);
   
   return () => {
    window.removeEventListener('resize', handleResize);
  };
   
 }, 
  [])


  useEffect(()=>{ 
   handleResize()
 }, 
  [navMount, navCollapse])

  return [resizeRef ]
}
