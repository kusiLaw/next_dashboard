
"use client"

import React from 'react';
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
    borderColor: 'lightblue',
    fill: 'start',
    backgroundColor: '#0dd2f9'
   }
  },
  point: {
   radius : 20,
   hitRadius : 30
  }
};

const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',
'Aug', 'Sept', 'Oct','Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: '123M',
      data: [12, 20, 25,30, 50, 60, 70,  85,90, 92, 100, 138],
      // backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(53, 162, 235)',
      fill: true,


    },
  ],
};


 const AreaChart = ( ) => {




  const  dataset = data.datasets[0].label
  console.log(dataset)
  return (
   <div className='bg-white '>
     <Line options={options} data={data} width={100} height={60} />
   </div>
    
  )
}

export default AreaChart