export const yearLabels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July',
'Aug', 'Sept', 'Oct','Nov', 'Dec'];

export const options = (title)=>{
  return {
    responsive: true,
    maintainAspectRatio : false, 
     plugins: {
       legend: {
         position: 'top',
       },
       title: {
         display: true,
         text: title,
         font: {
          size : 18
         }
       },
     },
     point: {
      radius : 20,
      hitRadius : 10
     }
   };
}

