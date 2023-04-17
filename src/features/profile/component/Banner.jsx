import React from 'react'
import banner from "../../../images/banner.png"
import Image from 'next/image'

const Banner = () => {
  return (
    <div>
        
        <div className="w-[100%]">
        <div className="bg-[#052c5b] h-[200px] ">
        <div className="w-2/3 flex flex-col ml-32">
          <h2 className="text-4xl font-bold mt-10 text-white">
            Dashboard
          </h2>
          <p className="text-2xl text-light-blue italic">Browse Your Dashboard</p>
        </div>
      </div>

       
        </div>
    </div>
  )
}

export default Banner