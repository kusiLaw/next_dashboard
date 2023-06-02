
import { AiOutlineClose} from 'react-icons/ai';
import ThemePicker from './themepicker';
import ToggleButtonController from './toggleBtnController';
import NavExpandController from './NavExpandController';



const Settings = ({setOpenSettings}) => {

  return (
    <div className='fixed bg-white rounded-md top-0 drop-shadow-2xl right-0 bottom-0 p-6  z-50 animate-fadeIn'>
      <div className='flex items-center justify-between pb-5 border-b border-gray_bg'>
        <h2 className='text-xl '>Configuration</h2>
        <div className='' onClick={()=> setOpenSettings(false)}>
          <AiOutlineClose />
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-8 w-full'>
           <ThemePicker />
           <NavExpandController />
           <ToggleButtonController />  
      </div>
    </div>
  )
}

export default Settings