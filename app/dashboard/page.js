import VerticalBar from '@/components/charts/verticalbar';
import { DashCard } from '@/components/dashcard/card'
import Image from 'next/image'
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { HiArrowTrendingDown, HiArrowNarrowUp } from 'react-icons/hi';




export default function Home() {
  return (
    <main className='h-[100vh] ' >
      <section className='grid md:grid-cols-2 xl:grid-cols-4  gap-6 my-3 ' >
           <DashCard 
            title = 'Total Sales'
            icon = 'year_cash'
            icon2 ='up'
            data = '123 M'
            percentage = '12'
           />
            
            <DashCard 
            title = 'Today Sales'
            icon ='cash'
            icon2 ='down'
            data = '14,433'
            percentage = '6'
           />

           <DashCard 
            title = 'Purchases'
            icon ='cart'
            icon2 ='up'
            data = '146,4854'
            percentage = '6'
           />

           <DashCard 
            title = 'Stock'
            icon ='stock'
            icon2 ='up'
            data = '16,456'
            percentage = '6'
           />
      </section>

      <section className='grid md:grid-cols-2 h-fit overflow-y-auto'>
        <div className='p-2 w-full'>
           <VerticalBar />
        </div>
        <div className='p-2'> 
           <VerticalBar />
        </div>
       
      </section>
    </main>
  )
}
