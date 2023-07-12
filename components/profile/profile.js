import React, {useState} from 'react'
import Avatar from '../avatar/avatar'
import ProfileCard from './card'

 const Profile = () => {
   const [openProfileCard, setOpenProfileCard] = useState(false)

  return (
    <div onClick={() => {setOpenProfileCard(!openProfileCard)} }>
     <Avatar height={'h-[1.75rem]'} width={'w-[1.75rem]'}  />
     {openProfileCard && <ProfileCard />}
    </div>
  )
}

export default Profile