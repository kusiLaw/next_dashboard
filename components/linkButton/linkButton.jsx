'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const LinkButton = (props) => {
  const {text, children, link_path, } = props
  
  const pathname = usePathname();
  const activeLink = pathname === link_path ? 'active [&.active]:bg-blue_contest [&.active]:drop-shadow-lg [&.active]:text-white [&.active]:dark:bg-dark_color_hover' : ''

  return (
   <Link href={link_path}   className={`nav flex  w-full  items-center h-10  px-2 text-base rounded-xl
      bg-inherit text-light_ash_text dark:text-white ${activeLink}  overflow-hidden truncate
    hover:bg-blue_contest hover:text-white hover:dark:bg-dark_color_hover hover:dark:text-white`}>
      
       <span className='mr-6 '> { children[0] }</span>
       <>{children.slice(1)}</>
    </Link>
  )
}

export default LinkButton 
