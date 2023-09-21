import React,{useContext} from 'react'
import ToggleSwitch from '../toggle_switch/switch'
import { navMouseControlContext } from '@/app/dashboard/provider'

const NavExpandController = () => {
 const {mouseControlNav, setMouseControlNav} = useContext(navMouseControlContext)


 return (
  <div >
    <ToggleSwitch 
    name = {'Nav Controller'}  
    checked = {mouseControlNav} 
    onChangeFn ={setMouseControlNav} 
    extra = {{cache : true, storageKey : 'mouseControlNav'}}
    />
  </div>
)

}

export default NavExpandController