import React from 'react'
import SelectInput from '../selectInput/selectInput'




const ThemePicker = ({ theme, setTheme }) => {


 const defaultInput = {
  'light': 'Default',
  'dark': 'DarkLight'
 }
 
 return (
    <>
      <SelectInput  
          text='Theme'
          name = 'theme'  
          options={[['Default', 'light'], ['DarkLight', 'dark']]} 
          defaultInput = {defaultInput[theme]}
          onchangeFunc = {setTheme}
           />
    </>
  )
}

export default ThemePicker

