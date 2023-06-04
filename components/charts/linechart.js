"use client"
import { useChartResponsive } from '@/hooks/responsive';
import { yearLabels, options } from './chartUtils';
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend
);


 const LineChart = ( ) => {

  const [resizeRef ] = useChartResponsive()

  const option = options('Items Purchases')
  const data = {
      labels: yearLabels,
      datasets: [
       {
        label: 'Dataset 1',
        data: [12, 20, 25,30, 50, 60, 70,  85,90, 92, 100, 138],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        data: [23, 16, 10 ,15, 25, 46, 57,  43, 44, 50, 60, 63],
        backgroundColor: 'rgb(53, 162, 235)',
      },
       {
        label: 'Dataset 2',
        data: [73, 76, 80 ,65, 68, 56, 57,  43, 45, 36, 30, 23],
        backgroundColor: 'rgb(98, 24, 195)',
      },
      {
       label: 'Dataset 2',
       data: [33, 36, 38 ,48, 55, 56, 67,  98, 99, 110, 120, 123],
       backgroundColor: 'rgb(13, 210, 249)',
     },
      ],
    };


  return (
   <div className='flex w-full h-[23rem]' >
     <Line options={option} data={data}  ref={resizeRef} />
   </div>
    
  )
}

export default LineChart