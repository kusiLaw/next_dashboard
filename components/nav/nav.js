import React from 'react'
import LinkButton from '../linkButton/linkButton'
import { BiGridAlt, BiUser, BiPieChartAlt} from 'react-icons/bi';
import { FiSettings} from 'react-icons/fi';


const Nav = () => {
  return (
    <nav className='flex flex-col bg-white dark:bg-dark_color p-4 rounded-xl shadow-xl  
    h-[100vh]'>
      <div className='pb-4 mb-6 border-1 border-b h'>
         <h1 className='dark:text-white  '>Laky</h1>
      </div>
      <div className=''>
         <LinkButton text = 'Home' link_path = '/dashboard'> 
           <BiGridAlt/>
         </LinkButton>
         <LinkButton text = 'Users' link_path= '/dashboard/users'> 
           <BiUser/>
         </LinkButton>
         <LinkButton text = 'Report' link_path= '/dashboard/users'> 
           <BiPieChartAlt/>
         </LinkButton>
     
      </div>
      <div className=''>
         <LinkButton text = 'Settings' link_path= '/dashboard/users' > 
              <FiSettings/>
         </LinkButton>
         <LinkButton text = 'View Page' link_path= '/' > 
              <FiSettings/>
         </LinkButton>
      </div>
      
    </nav>
  )
}

export default Nav
