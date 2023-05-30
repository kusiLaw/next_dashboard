
'use client'
import Nav from '@/components/nav/nav'
import Header from '@/components/header/header'
import { useContext, useEffect, useState } from 'react'
import { navToggleContext } from '@/app/dashboard/provider'



const DashBoard = ({children}) => {
  const {navMount} = useContext(navToggleContext)
  const [navCollapse, setNavCollapse] = useState(true)
 
  const layout = () => {
    if (window.innerWidth < 768){
      return(
       <>
        
        {
          
         <div className={`${navMount ? `hidden`: `block`} fixed left-3 top-3  bottom-3`}>
             <Nav navCollapse = {navCollapse} setNavCollapse={setNavCollapse}/>
         </div>
         }
    
         <div className={`w-full `}>
           <div > 
             <Header />
           </div> 
          <div>
             {children} 
          </div>
             
         </div>
      </>

      )
    }

 return (
   <>
     {
      navMount &&  
     <div className={`fixed left-3 top-3  bottom-3`}>
         <Nav navCollapse = {navCollapse} setNavCollapse={setNavCollapse}/>
     </div>
     }

     <div className={`w-full 
         
         ${ (navMount && navCollapse) && `md:ml-[5rem]` }  
         ${ (navMount && !navCollapse) && `md:ml-[13rem]` }
         ${ (!navMount) && `md:ml-[0rem]` } 
         `}>
       <div > 
         <Header />
       </div> 
      <div>
         {children} 
      </div>
         
     </div>
   </>
    
  )
  }  

  return (
   <div className="flex w-[100%] gap-4 bg-gray_bg dark:bg-white py-3 px-3
   text-black h-full   z-50   ">
      {layout()}
   </div>
  )
    
}

export default DashBoard