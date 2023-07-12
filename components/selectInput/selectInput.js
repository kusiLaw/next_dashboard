
const SelectInput = (props) => {
  const {text, name, onchangeFunc = null , defaultValue = '', options = []} = props

   return (
   <label className='font-semibold'>
    {text} : 
   <select  name={name} className='ml-5 p-2 border-0 font-normal active:border-0 bg-white dark:bg-white rounded-sm' 
       value={defaultValue}

       onChange={e => {
            onchangeFunc !== null &&
            onchangeFunc(e.target.value)
        } } 
 
   >
     {options.map(el =>(
      <option key={Array.isArray(el) ? el[1] : el } className='hover:bg-blue_contest dark:hover:bg-blue_contest' 
      value={Array.isArray(el) ? el[1] : el }>{Array.isArray(el) ? el[0] : el }</option>
     ))}
   </select>
 </label>
  )
}

export default SelectInput
