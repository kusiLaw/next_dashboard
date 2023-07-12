import React from 'react'

const RadioButton = () => {
  return (

   <div className="flex flex-wrap relative rounded-lg bg-gray-400 shadow-lg
   p-1 w-3 font-normal">
    <label className="radio">
      <input type="radio" name="radio" checked="" className='hidden text-center' />
      <span className="name">HTML</span>
    </label>
     <label className="radio">
       <input type="radio" name="radio" />
       <span className="name">React</span>
     </label>
      
   </div>
  )
}

export default RadioButton