import React from 'react'
import Image from 'next/image'

const Avatar = ({height, width}) => {
  return (
       <div className={`flex ${width} ${height} items-center relative  overflow-hidden  rounded-full`}>
         <Image src="/profile.jpg"
                 alt="profile"
                 // width={width}
                 // height={height}
                 placeholder="blur" 
                 blurDataURL="/profile.jpg"
                 fill
                 style={{ objectFit: "cover"}}
                  />
       
       </div>
  )
}

export default Avatar
