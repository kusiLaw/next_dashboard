'use client'
import AreaChart from '@/components/charts/areabar';
import LineChart from '@/components/charts/linechart';
import PieChart from '@/components/charts/piechart';
import VerticalBar from '@/components/charts/verticalbar';
import { DashCard } from '@/components/dashcard/card'
import Doughnuts from '@/components/charts/doughnut';

// Dashboard index page
export default function Home() {


  return (
    <main className='h-full overflow-y-auto ' >
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

      <section  className='grid py-3 gap-3 md:grid-cols-2 h-fit '>
        <div  className='p-2 w-full h-fit shadow-xl bg-white  duration-500'>
           <AreaChart />
        </div>
         <div className='p-2 w-full h-fit shadow-xl bg-white  duration-500'> 
           <VerticalBar />
        </div>
        <div className='p-2 w-full h-fit shadow-xl bg-white  duration-500'> 
          <LineChart />
        </div>
        <div className='p-2 w-full h-fit shadow-xl  bg-white  duration-500'> 
           {/* <PieChart /> */}
           <Doughnuts />
        </div> 
      </section>
    </main>

  )
}
