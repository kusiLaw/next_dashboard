import React from 'react'

const SelectInput = (props) => {
  const {text, name, list = []} = props

   return (
   <label>
   {text} : 
   <select name={name} className='ml-5'>
     {list.map(el =>(
      <option value={el}>{el}</option>
     ))}
   </select>
 </label>
  )
}

export default SelectInput
