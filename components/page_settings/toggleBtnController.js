import React, {useState, useContext} from 'react'
import ToggleSwitch from '../toggle_switch/switch'
import { toggleBtnContext } from '@/app/dashboard/provider'
 

const ToggleButtonController = ({}) => {
  const {displayToggleBtn, setDisplayToggleBtn } = useContext(toggleBtnContext)
 
  return (
    <div >
      <ToggleSwitch 
      name = {'Menu Ctrl Button'}  
      checked = {displayToggleBtn} 
      onChangeFn ={setDisplayToggleBtn} 
      extra = {{cache : true, storageKey : 'displayToggleBtn'}}
      />
    </div>
  )
}


export default ToggleButtonController
