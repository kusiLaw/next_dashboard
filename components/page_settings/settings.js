
import {useState} from 'react'
import SelectInput from '../selectInput/selectInput'
import { AiOutlineClose} from 'react-icons/ai';



const Settings = ({setOpenSettings}) => {
  return (
    <div className='absolute bg-white rounded-md top-3 shadow-2xl right-0 bottom-0 p-6  z-50'>
      <div className='flex items-center justify-between pb-5 font-semibold border-b border-gray_bg'>
        <h2>Settings</h2>
        <div className='' onClick={()=> setOpenSettings(false)}>
          <AiOutlineClose />
        </div>
      </div>
      <div className='mt-8'>
           <SelectInput text='Theme ' list={['Default', 'DarkLight', 'System']}/>
      </div>
    </div>
  )
}

export default Settings