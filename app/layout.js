import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './provider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Dashboard',
  description: 'Developed by Lawrence',
}

export default function RootLayout({ children }) {
  return (
   
      <html lang="en" className='' suppressHydrationWarning>
        <body className={`${inter.className}`}>
           <div className=" relative  w-full">
           <Providers  >
               {children}
           </Providers>
          </div> 
        </body>
      </html>

  
  )
}
// 