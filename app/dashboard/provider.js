'use client'
import { createContext, useState } from 'react'

// All shared data use by dashboard only should be here ..

export const navToggleContext = createContext()
export const toggleBtnContext = createContext()


export function DashboardProvider({ children }) {

 const [navMount, setNavMount]  = useState(true) 
 const [displayToggleBtn, setDisplayToggleBtn] = useState(false)

 return (
 <navToggleContext.Provider value={{navMount, setNavMount}}>
    <toggleBtnContext.Provider value={{displayToggleBtn, setDisplayToggleBtn}}>
       {children}
    </toggleBtnContext.Provider>
 </navToggleContext.Provider>
 )
}