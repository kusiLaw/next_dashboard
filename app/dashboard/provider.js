'use client'
import { createContext, useState, useEffect } from 'react'
import { getUserDefaultSettings } from '@/utils/localStorage'

// All shared data use by dashboard only should be here ..
export const navMountContext = createContext()
export const toggleBtnContext = createContext()
export const navMouseControlContext = createContext()
export const  navCollapseContext = createContext()



 const DashboardProvider = ({ children }) => {

 const initialData = getUserDefaultSettings()

 const [navMount, setNavMount]  = useState( initialData.navMount )  //default : true
 const [displayToggleBtn, setDisplayToggleBtn] = useState( initialData.displayToggleBtn  )
 const [mouseControlNav, setMouseControlNav] = useState( initialData.mouseControlNav )
 const [navCollapse, setNavCollapse] = useState( initialData.navCollapse )
 
 return (
 <navMountContext.Provider value={{navMount, setNavMount}}>
    <toggleBtnContext.Provider value={{displayToggleBtn, setDisplayToggleBtn}}>
       <navMouseControlContext.Provider  value={{mouseControlNav, setMouseControlNav}} >
          <navCollapseContext.Provider value={{navCollapse, setNavCollapse}}>
             {children}
          </navCollapseContext.Provider>
       </navMouseControlContext.Provider>
    </toggleBtnContext.Provider>
 </navMountContext.Provider>
 )
}

export default DashboardProvider 