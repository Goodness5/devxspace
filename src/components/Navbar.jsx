import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
const Navbar = () => {
  return (
    <div className='flex justify-center items-center py-3 border-b border-gray-300'>
       
        <ConnectButton />
      
    </div>
  )
}

export default Navbar