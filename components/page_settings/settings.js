

import ThemePicker from './themepicker';
import ToggleButtonController from './toggleBtnController';
import NavExpandController from './NavExpandController';
import SideWindow from '../side_window/SideWindow';


const Settings = ({setOpenSettings}) => {

  return (
      <SideWindow openFn={setOpenSettings} title='Configuration'>
         <div className='flex flex-col gap-4 mt-8 w-full text-base '>
          
              <div className='hidden md:flex flex-col gap-4 w-full'>
                <NavExpandController />
                <ToggleButtonController />  
              </div> 
              <div >
                <p className='flex pt-[4rem] opacity-50 text-gray-500  flex-wrap' >Keep all your page settings here</p>
              </div>
         </div>
      </SideWindow>
  )
}

export default Settings