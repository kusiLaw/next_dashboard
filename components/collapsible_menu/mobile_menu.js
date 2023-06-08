import {useState} from 'react'
import MobileNav from '../nav/mobile'
import { FiMenu} from 'react-icons/fi';


const MobileMenuToggle = () => {
 const [openMobileNav, setOpenMobileNav] = useState(false)
  return (
   <>
    <div className='text-xl font-bold ' onClick={() => { setOpenMobileNav(true)}}>
      <FiMenu />
    </div>
    {openMobileNav && <MobileNav  openFn = {setOpenMobileNav} /> }

    </>
  )
}

export default MobileMenuToggle
