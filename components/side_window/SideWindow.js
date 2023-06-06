import { AiOutlineClose} from 'react-icons/ai';


const SideWindow = ({open, children, title = ''}) => {
  return (
   <div className='fixed bg-white rounded-md drop-shadow-2xl right-0 bottom-0 top-0  p-6 z-50 animate-fade-left animate-duration-700'>
       <div className='flex items-center justify-between pb-5 border-b border-gray_bg'>
         <h2 className='text-xl '>{title}</h2>
         <div className='' onClick={()=> open(false)}>
           <AiOutlineClose />
         </div>
       </div>
       {children}
    </div>
  )
}

export default SideWindow
