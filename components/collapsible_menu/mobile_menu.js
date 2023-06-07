import {useState} from 'react'
import MobileNav from '../nav/mobile'

const MobileMenuToggle = () => {
 const [openMobileNav, setOpenMobileNav] = useState(false)
  return (
   <>
    <div className='' onClick={() => { setOpenMobileNav(true)}}>
      {/* <FiSettings /> */}jjj
    </div>
    {openMobileNav && <MobileNav  openFn = {setOpenMobileNav} /> }

    </>
  )
}

export default MobileMenuToggle
