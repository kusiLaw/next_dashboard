
import { AiOutlineClose} from 'react-icons/ai';
import { useTheme } from 'next-themes';
import ThemePicker from './themepicker';



const Settings = ({setOpenSettings}) => {
  const { theme, setTheme } = useTheme()

  
  return (
    <div className='absolute bg-white rounded-md top-3 shadow-2xl right-0 bottom-0 p-6  z-50'>
      <div className='flex items-center justify-between pb-5 border-b border-gray_bg'>
        <h2 className='text-xl '>Configuration</h2>
        <div className='' onClick={()=> setOpenSettings(false)}>
          <AiOutlineClose />
        </div>
      </div>
      <div className='mt-8'>
           <ThemePicker theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}

export default Settings