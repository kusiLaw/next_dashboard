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
 Filler,
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
 Filler,
 Legend
);



const AreaChart = ( ) => {
  const [resizeRef ] = useChartResponsive()
  
  const option = options('Total Sales')
  
  const data = {
      labels : yearLabels,
      datasets: [
        {
          label: '123M',
          data: [12, 20, 25,30, 50, 60, 70,  85,90, 92, 100, 138],
          backgroundColor: '#0dd2f9',
          borderColor: 'rgb(53, 162, 235)',
          fill: true,
          
        },
      ],
   };

  return (
   <div className='flex w-full h-[23rem] ' >
     <Line options={option} data={data}   ref={resizeRef}/>
   </div>
    
  )
}

export default AreaChart