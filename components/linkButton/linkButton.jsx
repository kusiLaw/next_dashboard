import React from 'react'
import Link from 'next/link'


const LinkButton = (props) => {
 const {text, children, link_path} = props
  return (
    <Link href={link_path}  className='flex gap-4 items-center py-2 px-2 text-lg shadow-sm rounded-xl
      bg-inherit text-light_ash_text dark:text-white active:bg-blue_contest active:dark:bg-dark_color_hover
    hover:bg-blue_contest hover:text-white hover:dark:bg-dark_color_hover hover:dark:text-white'>
       <span className=''>
         {children}
       </span>
       <span className=''>
           {text}
       </span>
    </Link>
  )
}

export default LinkButton
