import React from 'react'
import Connect from "./Connect";

const Navbar = () => {
  return (
    <div className='flex justify-center items-center py-3 border-b border-gray-300'>
        <button className="border border-green-400 rounded-lg py-2 px-4">Home</button>
        <button to={'/create-ballot'} className="mx-5 border border-green-400 rounded-lg py-2 px-4">Create Ballot</button>
    <div>
    <Connect />
    </div>
    </div>
  )
}

export default Navbar