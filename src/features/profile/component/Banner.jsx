import React from 'react'
import banner from "../../../images/banner.png"
import Image from 'next/image'

const Banner = () => {
  return (
    <div>
        
        <div className="w-[100%]">

        <Image src={banner}  className=' w-[100%] h-[200px] object-fill'/>
        </div>
    </div>
  )
}

export default Banner