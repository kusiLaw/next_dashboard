import React, {useState, useContext} from 'react'
import ToggleSwitch from '../toggle_switch/switch'
import { toggleBtnContext } from '@/app/dashboard/provider'
 

const ToggleButtonController = ({}) => {
  const {displayToggleBtn, setDisplayToggleBtn } = useContext(toggleBtnContext)
 
  return (
    <div >
      <ToggleSwitch name = {'Toggle Button'}  checked = {displayToggleBtn} onChangeFn ={setDisplayToggleBtn} />
    </div>
  )
}


export default ToggleButtonController
