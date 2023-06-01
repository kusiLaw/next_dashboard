"use client"
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
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',
'Aug', 'Sept', 'Oct','Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 20, 25,30, 50, 60, 70,  85,90, 92, 100, 138],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [23, 16, 10 ,15, 25, 46, 57,  43, 44, 50, 60, 63],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const VerticalBar = ( ) => {
  return <Bar options={options} data={data} width={100} height={60} />;
}


export default VerticalBar