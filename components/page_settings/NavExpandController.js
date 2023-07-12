import React,{useContext} from 'react'
import ToggleSwitch from '../toggle_switch/switch'
import { navControllerButtonContext } from '@/app/dashboard/provider'

const NavExpandController = () => {
 const {displayNavControllerButton, setNavControllerButton} = useContext(navControllerButtonContext)


 return (
  <div >
    <ToggleSwitch 
    name = {'Nav Controller'}  
    checked = {displayNavControllerButton} 
    onChangeFn ={setNavControllerButton} 
    extra = {{cache : true, storageKey : 'displayNavControllerButton'}}
    />
  </div>
)

}

export default NavExpandController