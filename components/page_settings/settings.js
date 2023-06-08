

import ThemePicker from './themepicker';
import ToggleButtonController from './toggleBtnController';
import NavExpandController from './NavExpandController';
import SideWindow from '../side_window/SideWindow';


const Settings = ({setOpenSettings}) => {

  return (
      <SideWindow openFn={setOpenSettings} title='Configuration'>
         <div className='flex flex-col gap-4 mt-8 w-full'>
              <ThemePicker />
              <div className='hidden md:flex flex-col gap-4 w-full'>
                <NavExpandController />
                <ToggleButtonController />  
              </div> 
         </div>
      </SideWindow>
  )
}

export default Settings