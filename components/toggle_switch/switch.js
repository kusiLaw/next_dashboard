import { storeUserDefaultSettings } from '@/utils/localStorage'

const ToggleSwitch = ({onChangeFn = null, name = '', checked = false, cache = false, extra = {}}) => {
  
  return (
    <>
       <label className='flex justify-between w-full relative self-start'>
           <span className='text-base'>{ name }</span>
         <input onChange={()=>{ 
          if (onChangeFn !== null) {
           onChangeFn(!checked)
           extra.cache && storeUserDefaultSettings(extra.storageKey , !checked)
          }

          /**
           *  particularly usefull if you want excecute extra funtion(s) after the main onchnage function
           * It only runs only when extra function(s) is provided
           */
          extra.extraFn && async function extraFn() 
          { 
            extra.extraFn.forEach(async element => {
              await element.fn(... element.args)
              await  element.cache  && storeUserDefaultSettings(element.storageKey , element.args[0])
            })
          }();

          }}  
          type="checkbox" checked={checked} 
          className='relative h-6 w-12 cursor-pointer appearance-none rounded-full bg-gray_bg 
          
          checked:bg-gray_bg

          before:absolute before:content-[""]  before:left-[calc(1.5rem-1.4rem)] 
          before:top-[calc(1.5rem-1.4rem)] before:block  before:w-[1.4rem] before:h-[1.3rem] before:cursor-pointer
           before:border-[1px solid rgba(100, 116, 139, 0.527)] 
            before:rounded-full before:bg-light_ash_text
          before:shadow-[0 3px 10px rgba(100, 116, 139, 0.327)] 
          
          hover:before:shadow-lg
          
          checked:before:translate-x-full checked:before:bg-blue_contest dark:checked:before:bg-dark_color
           transition-all ease-linear duration-1000
          ' />
     </label>
    </>
  )
}

export default ToggleSwitch
