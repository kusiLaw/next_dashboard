import { useTheme } from 'next-themes';
import SelectInput from '../selectInput/selectInput'




const ThemePicker = () => {
 const { theme, setTheme } = useTheme()

 return (
    <>
      <SelectInput  
          text='Theme'
          name = 'theme'  
          options={[['Default', 'light'], ['DarkLight', 'dark']]} 
          defaultValue = {theme}
          onchangeFunc = {setTheme}
           />
    </>
  )
}

export default ThemePicker

