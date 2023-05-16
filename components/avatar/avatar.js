import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className=' flex items-center relative w-7 h-7 overflow-hidden  rounded-full'>
      {/* <Image 
       src="/profile.jpg"
      width={88}
      height={20}
      alt="profile" className='rounded-full' /> */}
      
      <Image src="/profile.jpg"
              alt="profile"
              placeholder="blur" 
              blurDataURL="/profile.jpg"
              fill
              style={{ objectFit: "100%"}}
               />

    </div>
  )
}

export default Avatar
