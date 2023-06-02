'use client'
import { createContext, useState } from 'react'
import { getUserDefaultSettings } from '@/utils/localStorage'

// All shared data use by dashboard only should be here ..

export const navMountContext = createContext()
export const toggleBtnContext = createContext()
export const navControllerButtonContext = createContext()
export const  navCollapseContext = createContext()


export function DashboardProvider({ children }) {
 const settings = getUserDefaultSettings()
 console.log(settings, 'iuyuiiuiuyiuyiui')
 const [navMount, setNavMount]  = useState( settings.navMount)  //default : true
 const [displayToggleBtn, setDisplayToggleBtn] = useState( settings.displayToggleBtn )
 const [displayNavControllerButton, setNavControllerButton] = useState( settings.displayNavControllerButton)
 const [navCollapse, setNavCollapse] = useState( settings.navCollapse)

 return (
 <navMountContext.Provider value={{navMount, setNavMount}}>
    <toggleBtnContext.Provider value={{displayToggleBtn, setDisplayToggleBtn}}>
       <navControllerButtonContext.Provider  value={{displayNavControllerButton, setNavControllerButton}} >
          <navCollapseContext.Provider value={{navCollapse, setNavCollapse}}>
             {children}
          </navCollapseContext.Provider>
       </navControllerButtonContext.Provider>
    </toggleBtnContext.Provider>
 </navMountContext.Provider>
 )
}