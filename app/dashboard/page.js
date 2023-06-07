'use client'
import AreaChart from '@/components/charts/areabar';
import LineChart from '@/components/charts/linechart';
import PieChart from '@/components/charts/piechart';
import VerticalBar from '@/components/charts/verticalbar';
import { DashCard } from '@/components/dashcard/card'
import Doughnuts from '@/components/charts/doughnut';
import PolarAreaChart from '@/components/charts/polarArea';

// Dashboard index page
export default function Home() {


  return (
    <main className='h-full w-[100%]' >
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

      <section  className='grid w py-3  gap-3 grid-cols-1 md:grid-cols-2 h-full overflow-hidden  '>
      {/* <section  className='flex flex-wrap flex-[1_1_100%] py-3   gap-3  h-full overflow-hidden  '> */}

        <div  className='p-2 flex justify-center items-center  w-auto  h-fit drop-shadow-xl bg-white  duration-500'>
           <AreaChart />
        </div>
         <div className='p-2 flex justify-center items-center w-auto h-fit drop-shadow-xl bg-white  duration-500'> 
           <VerticalBar />
        </div>
         <div className='p-2 flex justify-center items-center w-auto h-fit drop-shadow-xl bg-white  duration-500'> 
          <LineChart />
        </div>
        <div className=' p-2 flex justify-center items-center w-auto h-fit  drop-shadow-xl  bg-white  duration-500'> 
           <PolarAreaChart />
        </div>   
      </section>

   
    </main>

  )
}
