import { useChartResponsive } from '@/hooks/responsive';
import { yearLabels, options } from './chartUtils';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);



const PolarAreaChart = () => {
 const [resizeRef ] = useChartResponsive()

 const option = options('Items Sales in Dollars')
 const data = {
  labels: ['Bread', 'Pizza', 'Drinks', 'Milk', 'Milo', 'Orange'],
  
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};


 return( 
   <div className='flex w-full h-[23rem]' >
       <PolarArea data={data}  options={option} ref={resizeRef}/>
    </div>
 )
}

export default PolarAreaChart