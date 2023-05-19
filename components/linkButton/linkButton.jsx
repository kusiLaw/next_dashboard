'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const LinkButton = (props) => {
 const {text, children, link_path, active = ''} = props

  return (
   <button  className={`nav flex  w-full  gap-4 items-center py-2 px-2 text-lg shadow-sm rounded-xl
      bg-inherit text-light_ash_text dark:text-white ${active} [&.active]:bg-blue_contest [&.active]:text-white 
      visited:bg-blue_contest [&.active]:dark:bg-dark_color_hover
    hover:bg-blue_contest hover:text-white hover:dark:bg-dark_color_hover hover:dark:text-white`}>
       <span className=''>
         {children}
       </span>
       <span className=''>
           {text}
       </span>
    </button>
  )
}

export default LinkButton
