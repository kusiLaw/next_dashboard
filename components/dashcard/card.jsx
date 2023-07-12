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
    <div ref={ref} className=' flex justify-between w-full p-3 h-[7rem] bg-white
     shadow-md rounded-xl hover:drop-shadow-xl hover:scale-[1.01] transition-all duration-300 '>
        <div className='flex flex-col justify-between text-gray-500 '>
           {title}
             <h2 className=' text-2xl font-semibold'>
             <span>{title.includes('Sales')  && '$' }</span>
              {data}</h2>
         </div>
         <div className='flex flex-col justify-between' >
                 <div className={`flex items-center justify-center text-2xl p-2 rounded-lg 
                   font-black  
                  ${GetIconsColors[icon]}
                  `}>
                    {GetIcons[icon]()}
                 </div>
                 <div className={`flex gap-1 text-green-700 font-semibold italic ${GetIconsColors[icon2]} `}>
                 {percentage}%
                 {GetIcons[icon2]()}
               
                 </div>
         </div>
    </div>
  )

})

DashCard.displayName = "DashCard";