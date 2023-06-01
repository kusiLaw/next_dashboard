"use client"
import { useContext, useEffect, useRef } from 'react';
import { navMountContext } from '@/app/dashboard/provider';
import { navCollapseContext } from '@/app/dashboard/provider';


export const useChartResponsive = () => {
 const {navMount} = useContext(navMountContext)
 const {navCollapse} = useContext(navCollapseContext)
 const resizeRef = useRef(null)

 useEffect(()=>{ 
  resizeRef.current.resize()
 }, 
  [navMount, navCollapse])

  return [resizeRef ]
}
