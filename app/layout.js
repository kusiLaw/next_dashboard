import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'
import Nav from '@/components/nav/nav'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark  `}>
        <div className="flex gap-4 bg-gray_bg dark:bg-white py-3 px-3 text-black min-h-screen ">
           <div className='w-60 '>
             <Nav />
           </div>
           <div className='w-full '>
             <div > 
             <Header />
             </div>
             {children} 
           </div>
        </div>
      </body>
    </html>
  )
}
// 