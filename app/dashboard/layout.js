import './../globals.css'
import DashBoard from '@/components/dashbord/dashboard'
import { DashboardProvider } from './provider'

export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
       <DashBoard>{children}</DashBoard>
    </DashboardProvider>
  )
}
