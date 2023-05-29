'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const LinkButton = (props) => {
  const {text, children, link_path, } = props
  
  const pathname = usePathname();
  const activeLink = pathname === link_path ? 'active [&.active]:bg-blue_contest [&.active]:text-white [&.active]:dark:bg-dark_color_hover' : ''

  return (
   <Link href={link_path}   className={`nav flex  w-full  gap-4 items-center py-2 px-2 text-lg shadow-sm rounded-xl
      bg-inherit text-light_ash_text dark:text-white ${activeLink}  
       
    hover:bg-blue_contest hover:text-white hover:dark:bg-dark_color_hover hover:dark:text-white`}>
       {/* <span className=''> */}
         { children }
       {/* </span> */}
       {/* <span className=''>
       {children.length === 2 ? children[1] : children }
       </span> */}
    </Link>
  )
}

export default LinkButton 
