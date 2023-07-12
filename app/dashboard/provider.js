'use client'
import { createContext, useState, useEffect } from 'react'
import { getUserDefaultSettings } from '@/utils/localStorage'

// All shared data use by dashboard only should be here ..
export const navMountContext = createContext()
export const toggleBtnContext = createContext()
export const navControllerButtonContext = createContext()
export const  navCollapseContext = createContext()



 const DashboardProvider = ({ children }) => {

 const initialData = getUserDefaultSettings()

 const [navMount, setNavMount]  = useState( initialData.navMount )  //default : true
 const [displayToggleBtn, setDisplayToggleBtn] = useState( initialData.displayToggleBtn  )
 const [displayNavControllerButton, setNavControllerButton] = useState( initialData.displayNavControllerButton )
 const [navCollapse, setNavCollapse] = useState( initialData.navCollapse )

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

export default DashboardProvider 