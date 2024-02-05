import { memo, forwardRef } from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { HiArrowNarrowDown, HiArrowNarrowUp } from 'react-icons/hi';
import { BsCartPlus } from 'react-icons/bs';

import { AiFillBank,AiOutlineStock } from 'react-icons/ai';


export const DashCard = forwardRef(({title, icon, icon2, data, percentage }, ref) => {
 // console.log(redering )
 const GetIcons = {
  cash: () =>( <FaRegMoneyBillAlt/>),
  year_cash: () =>( <AiFillBank/>),
  up : () =>(  <HiArrowNarrowUp />),
  down : () =>(<HiArrowNarrowDown />),
  stock : () =>(<AiOutlineStock />),
  cart : () =>(<BsCartPlus />),
 }

 const GetIconsColors = {
  cash : 'bg-blue-400 text-white',
  year_cash:  'bg-[#0dd2f9] text-white',
  stock:  'bg-[#eb25af] text-white',
  cart : 'bg-[#6218c3] text-white',
  up : '',
  down : 'text-pink-500'
 }


  return (
    <div ref={ref} className=' flex justify-between w-full p-3 min-h-fit  bg-white
     shadow-md rounded-xl hover:drop-shadow-xl hover:scale-[1.01] transition-all duration-300 '>
        <div className='flex flex-col justify-between text-gray-500 '>
            <h2 className='opacity-70'>{title}</h2>
            <div className='flex gap-3 '>
                <p className=' text-lg font-semibold'> {title.includes('Sales')  && '$' } {data}</p>
                <div className={`flex gap-[0.2rem] text-green-700 font-light text-sm italic self-center  ${GetIconsColors[icon2]} `}>
                    {percentage}%
                   <span className='rotate-6'>{GetIcons[icon2]()}</span> 
                  
                  </div>
            </div>
        
         </div>
         <div className='flex flex-col justify-center' >
                 <div className={`flex items-center justify-center text-lg p-2 rounded-lg 
                   font-black  
                  ${GetIconsColors[icon]}
                  `}>
                    {GetIcons[icon]()}
                 </div>
              
         </div>
    </div>
  )

})

DashCard.displayName = "DashCard";