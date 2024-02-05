import React, {useState} from 'react'
import { FiSettings} from 'react-icons/fi';
import Settings from '../page_settings/settings';

const PageConfiguration = () => {
 const [openSetting, setOpenSettings] = useState(false)

  return (

    <>
    <div className='text-base' onClick={() => { setOpenSettings(true)}}>
      <FiSettings />
    </div>

    {openSetting && <Settings  setOpenSettings= {setOpenSettings} /> }

    </>
  )
}

export default PageConfiguration
