import { IoMdNotifications} from 'react-icons/io';
import { useState } from 'react';



 const Notification = (props) => {
  const {openMessage = false, messages = []} = props
  console.log('rendering not')

   const [displayMessage, setDisplayMessage] = useState(openMessage)

  return (
    <div className='relative text-lg font-bold' onClick={()=> {setDisplayMessage(!displayMessage)}}>
       <IoMdNotifications/>
       <div className='absolute -top-2 -right-1 -py-2 rounded-full text-red-500
        text-sm font-semibold ' >{messages.length}</div>
       {displayMessage && <div className='absolute top-8 text-center
         text-md font-normal w-fit px-4 py-2 z-10 shadow-lg right-0  bg-white duration-500'>
       {messages.length > 0 ? 
        messages.map((message)=> <div key={message}>{message}</div>) : 
       <span className='block w-40'>{'No message'}</span>}
       </div>}
    </div>
  )
}

export default Notification