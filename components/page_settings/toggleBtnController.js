import React, {useState, useContext} from 'react'
import ToggleSwitch from '../toggle_switch/switch'
import { toggleBtnContext } from '@/app/dashboard/provider'
 

const ToggleButtonController = ({}) => {
  const {displayToggleBtn, setDisplayToggleBtn } = useContext(toggleBtnContext)
  // console.log(displayToggleBtn, 'display tog ')

  return (
    <div onClick={()=> {setDisplayToggleBtn(!displayToggleBtn)}}>
      <ToggleSwitch name = {'Enable Nav Button'}  checked = {displayToggleBtn} onChangeFn ={setDisplayToggleBtn} />
    </div>
  )
}


export default ToggleButtonController
