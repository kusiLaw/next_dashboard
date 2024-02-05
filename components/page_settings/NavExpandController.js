import React,{useContext} from 'react'
import ToggleSwitch from '../toggle_switch/switch'
import { navMouseControlContext, navCollapseContext } from '@/app/dashboard/provider'


const NavExpandController = () => {
 const {mouseControlNav, setMouseControlNav} = useContext(navMouseControlContext)
 const {navCollapse, setNavCollapse} = useContext(navCollapseContext)

 let collapse  = mouseControlNav ? false : true

 return (
  <div >
    <ToggleSwitch 
    name = {'Navbar Auto Collapse'}  
    checked = {mouseControlNav} 
    onChangeFn ={setMouseControlNav} 
    extra = {
              {
                cache : true, 
                storageKey : 'mouseControlNav', 
                extraFn: [
                        {
                          fn:setNavCollapse, 
                          args: [collapse,],
                          cache: true,
                          storageKey: 'navCollapse'
                        },  
                       ]
              }
          
          } // usefull to excecute extral fn after main fn
    />
  </div>
)

}

export default NavExpandController