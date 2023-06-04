"use client"
import { useChartResponsive } from '@/hooks/responsive';
import { yearLabels, options } from './chartUtils';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const VerticalBar = ( ) => {
   const [resizeRef ] = useChartResponsive()

   const option = options('Sales / Expenses')
   console.log(option)
   const data = {
    labels : yearLabels,
     datasets: [
       {
         label: 'Sales',
         data: [12, 20, 25,30, 50, 60, 70,  85,90, 92, 100, 138],
         backgroundColor: 'rgba(255, 99, 132, 0.5)',
       },
       {
         label: 'Expenses',
         data: [23, 16, 10 ,15, 25, 46, 57,  43, 44, 50, 60, 63],
         backgroundColor: 'rgba(53, 162, 235, 0.5)',
       },
     ],
   };


  return (
   <div className='flex w-full h-[23rem]' >
       <Bar options={option} data={data} ref={resizeRef} />
   </div>
 
  )
}


export default VerticalBar