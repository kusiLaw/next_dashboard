import React from 'react'

const ToggleSwitch = ({onChangeFn = null, name = '', checked = false}) => {
 console.log(checked, '---ddddddddddd')
  return (
    <div>
       <label>
           { name }
         <input onChange={()=> onChangeFn !== null && onChangeFn(!checked)}  class="switch" type="checkbox" checked={checked} />
     </label>
    </div>
  )
}

export default ToggleSwitch
