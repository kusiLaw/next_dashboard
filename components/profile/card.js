import { GoPrimitiveDot} from 'react-icons/go';
import { IoIosLogOut} from 'react-icons/io';
import Avatar from '../avatar/avatar';

const ProfileCard = () => {

 console.log('rendering card')
 

  return (
   <div 
   className='flex  justify-between  absolute bg-green p-4 top-10  right-0 bg-white shadow-xl  z-10 animate-fadeIn'>
     <div className='flex w-[7rem] h-[7rem]  items-center justify-center relative border-0 hover:border-4 transition-all duration-300 rounded-full'>
        <Avatar height={'h-[6rem]'} width={'w-[6rem]'} />  
     </div>
     <div className='flex flex-col items-end gap-1 w-40 '> 
     <h2 className='flex  gap-2 items-center'><span className='text-green-700'><GoPrimitiveDot /></span>Lawrence Kusi </h2>
     <p className='text-gray-500 font-bold self-end'>Admin</p>
     <p className='text-gray-500 self-end'>Profile Setting</p>
     <button  className='flex gap-2 items-center text-gray-500 self-end mt-2  hover:text-black hover:font-semibold transition-all duration-800'>
      <span><IoIosLogOut/></span>
     Logout</button>
   </div>
   {/* */}
</div>

  )
}

export default ProfileCard
