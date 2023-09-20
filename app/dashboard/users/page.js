import React from 'react'
import { UserTable } from '@/components/table/table'
import {userdata} from '@/mockdata'
const Users = () => {
  return (
    <div className='flex pt-6 bg-gray_bg dark:bg-white h-screen border'>
   
     <UserTable userdata = {userdata}/>
    </div>
  )
}

export default Users