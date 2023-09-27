import React from 'react'
import { UserTable } from '@/components/table/table'
import {userdata} from '@/mockdata'
import { Button } from '@/components/button'
const Users = () => {
  return (
    <div className='flex flex-col pt-2  gap-3 bg-inherit min-h-screen'>
     <div className='self-end  mt-1 '>
      <Button/>
     </div>
     <UserTable userdata = {userdata}/>
    </div>
  )
}

export default Users