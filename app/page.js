import Image from 'next/image'
import Link from 'next/link'


// index page design goes here
// theme or dark-mode already setup 
export default function Home() {
  return (
    <main className=''>
       <div className='w-full h-screen flex items-center justify-center'>
          <div className='p-4 border-2 border-gray-500 dark:border-dark_white_bg drop-shadow-lg shadow-lg'>
            <h1 className='mb-4 font-bold text-xl'>Welcome To Next DashBoard </h1>
            <div>
             <p className='text-center '>Your Index Page Here !</p>
            </div>
            <div className='flex justify-center mt-4 text-blue-400 font-bold'>
                <Link href={'/dashboard'}>Go to dashboard</Link>
            </div>
            <div className='flex justify-end italic font-light  mt-6 text-sm w-full '>
               <p className='text-left'>By Lawrence Addai Kusi</p>
            </div>
          </div>
          
       </div>
      


    </main>
  )
}
