import './../globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'
import Nav from '@/components/nav/nav'
import { CustomProviders } from './provider'


export default function DashboardLayout({ children }) {


  return (
    <CustomProviders>
        <div className="flex w-[100%] gap-4 bg-gray_bg dark:bg-white py-3 px-3
         text-black max-h-[100vh]   ">
           
           <div className='hidden lg:block md:fixed md:left-3 md:top-3 w-[12rem]   lg:bottom-3'>
               <Nav />
           </div>

           <div className='w-full lg:ml-[13rem]  '>
             <div > 
               <Header />
             </div> 
            <div>
               {children} 
            </div>
               
           </div>

        </div>
    </CustomProviders>
  )
}
// 