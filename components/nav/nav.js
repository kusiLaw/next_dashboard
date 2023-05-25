'use client'
import React, { useState, memo } from 'react'
import LinkButton from '../linkButton/linkButton'
import { BiGridAlt, BiUser, BiPieChartAlt} from 'react-icons/bi';
import { FiSettings} from 'react-icons/fi';


const Nav = () => {

 const [ative, setActive] = useState('home')


 const activeStyle = (e) =>{
    console.log(e, 'active')
    const collection = document.getElementsByClassName("nav");
    console.log(collection)
    collection.map(e=>{e.classList.remove('active')})
    
    e.classList.add('active')
 }


  return (
    <nav className='flex flex-col bg-white dark:bg-dark_color p-4 rounded-xl shadow-xl  
     h-full '>
      <div className='pb-4 mb-6 border-1 border-b h'>
         <h1 className='dark:text-white  '>Laky</h1>
      </div>
      <div className=''>
         <LinkButton text = 'Home' link_path = '/dashboard' active={'active'} id='home'> 
           <BiGridAlt/>
         </LinkButton>
         <LinkButton text = 'Users' link_path= '/dashboard/users' id='users'> 
           <BiUser/>
         </LinkButton>
         <LinkButton text = 'Report' link_path= '/dashboard/users' id='report'> 
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
