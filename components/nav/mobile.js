'use client'
import Nav from "./nav"


const MobileNav = () => {
  return (
   <nav className={`flex flex-col dark:text-white   bg-white dark:bg-dark_color p-4 rounded-xl drop-shadow-xl  
   h-full animate-fade-right animate-delay-500  ease-in-out duration-500`}>
    <Nav />
   </nav>
  )
}

export default MobileNav