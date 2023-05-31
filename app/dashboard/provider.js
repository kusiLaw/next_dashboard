'use client'
import { createContext, useState } from 'react'

// All shared data use by dashboard only should be here ..

export const navMountContext = createContext()
export const toggleBtnContext = createContext()
export const navControllerButtonContext = createContext()

export function DashboardProvider({ children }) {

 const [navMount, setNavMount]  = useState(true) 
 const [displayToggleBtn, setDisplayToggleBtn] = useState(false)
 const [displayNavControllerButton, setNavControllerButton] = useState(false)

 return (
 <navMountContext.Provider value={{navMount, setNavMount}}>
    <toggleBtnContext.Provider value={{displayToggleBtn, setDisplayToggleBtn}}>
       <navControllerButtonContext.Provider  value={{displayNavControllerButton, setNavControllerButton}} >
          {children}
       </navControllerButtonContext.Provider>
    </toggleBtnContext.Provider>
 </navMountContext.Provider>
 )
}