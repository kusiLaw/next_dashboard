import { useChartResponsive } from '@/hooks/responsive';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']

export const data = {
  labels,
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
 responsive: true,
 plugins: {
   legend: {
     position: 'top',
   },
   title: {
     display: true,
     text: 'Total Sales',
     font: {
      size : 18
     }
   },
 },
 elements:{
  line:{
   tension: 0,
   borderWidth: 1,

     // borderColor: 'lightblue',
   // fill: 'start',
   backgroundColor: '#0dd2f9'
  }
 },
 point: {
  radius : 20,
  hitRadius : 30
 }
};

const Doughnuts = () => {
   const [resizeRef ] = useChartResponsive()

  return <Doughnut data={data} options={options} width={100} height={10} updateMode={"resize"} ref={resizeRef} />;
}


export default Doughnuts