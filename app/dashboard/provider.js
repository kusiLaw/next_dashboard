'use client'
import { createContext, useState } from 'react'

// All shared data use by dashboard only should be here ..

export const navToggleContext = createContext()
// export const navCollapseContext = createContext()


export function DashboardProvider({ children }) {

 const [navMount, setNavMount]  = useState(true) 


 return (
 <navToggleContext.Provider value={{navMount, setNavMount}}>
    {children}
 </navToggleContext.Provider>
 )
}