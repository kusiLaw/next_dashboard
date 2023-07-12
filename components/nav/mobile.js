'use client'
import Nav from "./nav"
import SideWindow from "../side_window/SideWindow"

const MobileNav = ({openFn}) => {
  return (
   <SideWindow openFn={openFn} title="Laky" asNav={true}>
      <nav className={`flex flex-col mt-6`}>
        <Nav />
      </nav>
   </SideWindow>
  
  )
}

export default MobileNav