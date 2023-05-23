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
    <html lang="en" className=''>
      <body className={`${inter.className} dar`}>
         <div className="  ">
             {children} 
        </div> 
      </body>
    </html>
  )
}
// 