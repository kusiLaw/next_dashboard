'use client'
import { createContext, useState } from 'react'

// All shared data use by dashboard only should be here ..

export const navMountContext = createContext()
export const toggleBtnContext = createContext()
export const navControllerButtonContext = createContext()
export const  navCollapseContext = createContext()


export function DashboardProvider({ children }) {

 const [navMount, setNavMount]  = useState(true) 
 const [displayToggleBtn, setDisplayToggleBtn] = useState(false)
 const [displayNavControllerButton, setNavControllerButton] = useState(false)
 const [navCollapse, setNavCollapse] = useState(false)

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