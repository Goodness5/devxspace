import React, { useState } from 'react';
import Connect from "./Connect";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='bg-blue-50 flex flex-row justify-end '>

        <div className="flex items-center cursor-pointer p-4">
          <span className="mr-2">Home</span>
        </div>

        <div className="flex items-center cursor-pointer p-4" onClick={handleDropdownClick}>
          <span className="mr-2">Explore</span>
        <div className={`flex flex-col justify-center bg-white shadow-lg ${showDropdown ? 'block' : 'hidden'}`}>
          <a href="#" className="px-2 hover:bg-gray-100">Link 1</a>
          <a href="#" className="px-2 hover:bg-gray-100">Link 2</a>
          <a href="#" className="px-2 hover:bg-gray-100">Link 3</a>
        </div>
      </div>
        <div className="flex items-center cursor-pointer p-4" onClick={handleDropdownClick}>
          <span className="mr-2">Pages</span>
         
         <div className={`right-0 top-10 w-40 bg-white shadow-lg ${showDropdown ? 'block' : 'hidden'}`}>
          <a href="#" className="px-2 hover:bg-gray-100">Link 1</a>
          <a href="#" className="px-2 hover:bg-gray-100">Link 2</a>
          <a href="#" className="px-2 hover:bg-gray-100">Link 2</a>
          </ div>

    <Connect />
    </div>
    </div>
  )
}

export default Navbar