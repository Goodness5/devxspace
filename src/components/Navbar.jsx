import React, { useState } from 'react';
import Connect from "./Connect";
import Link from 'next/link';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState('');

  const handleDropdownClick = (content) => {
    setShowDropdown(showDropdown === content ? '' : content);
  };

  return (
    <div className='bg-blue-50 flex flex-row justify-end '>

      <div className="flex items-center cursor-pointer p-4" onMouseEnter={() => handleDropdownClick('home')} onMouseLeave={() => handleDropdownClick('')}>
        <span className="mr-2">Home</span>
      </div>

      <Link href='/profile' className="flex items-center cursor-pointer p-4 flex-col">
        Dashboard
      </Link>

      <Link href='/Search' className="flex items-center cursor-pointer p-4 flex-col">
        <span className="mr-2">Hire</span>
      </Link>

      <div className="flex items-center cursor-pointer p-4" onMouseEnter={() => handleDropdownClick('home')} onMouseLeave={() => handleDropdownClick('')}>
        <span className="mr-2">update profile</span>
      </div>

      <Connect />
    </div>
  )
}

export default Navbar
