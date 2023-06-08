import './../globals.css'
import dynamic from 'next/dynamic'
import DashBoard from '@/components/dashbord/dashboard'

//load only on client-side since initial data depends on browser api
const DashboardProvider = dynamic(() => import('./provider'), {
 ssr: false,
})

export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
       <DashBoard>{children}</DashBoard>
    </DashboardProvider>
  )
}
