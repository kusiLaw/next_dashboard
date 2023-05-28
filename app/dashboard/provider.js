'use client'
import { createContext, useState } from 'react'

export const navContext = createContext()

export function CustomProviders({ children }) {
 const [navMount, setNavMount]  = useState(false)

 return <navContext.Provider value={{navMount, setNavMount}}>{children}</navContext.Provider>
}