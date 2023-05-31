import { useRef } from "react"

const SelectInput = (props) => {
  const {text, name, onchangeFunc = null , defaultInput = '', options = []} = props

   // console.log(defaultInput)
   return (
   <label className='font-semibold'>
    {text} : 
   <select  name={name} className='ml-5 p-2 border-0 font-normal active:border-0 bg-white dark:bg-white rounded-sm' 
       onChange={e => {
            onchangeFunc !== null &&
            onchangeFunc(e.target.value)
        } } 



   >
     {options.map(el =>(
      <option className='hover:bg-blue_contest dark:hover:bg-blue_contest' 
      value={Array.isArray(el) ? el[1] : el }>{Array.isArray(el) ? el[0] : el }</option>
     ))}
   </select>
 </label>
  )
}

export default SelectInput
