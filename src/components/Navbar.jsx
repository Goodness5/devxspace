import React, { useState } from 'react';
import Connect from "./Connect";
import Link from 'next/link';
import UpdateProfileCard from '../features/profile/component/updateprofile';

const Navbar = () => {
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const handleUpdateProfileClick = () => {
    setShowUpdateProfile(true);
  };

  const handleUpdateProfileClose = () => {
    setShowUpdateProfile(false);
  };

  return (
    <div className='bg-blue-50 flex flex-row justify-end '>

      <div className="flex items-center cursor-pointer p-4">
        <span className="mr-2">Home</span>
      </div>

      <Link href='/profile' className="flex items-center cursor-pointer p-4 flex-col">
        Dashboard
      </Link>

      <Link href='/Search' className="flex items-center cursor-pointer p-4 flex-col">
        <span className="mr-2">find jobs</span>
      </Link>

      <div className="flex items-center cursor-pointer p-4" onClick={handleUpdateProfileClick}>
        <span className="mr-2">update profile</span>
      </div>

      <Connect />


      {showUpdateProfile && (
        <div className="fixed inset-0 bg-gray-500 rounded-lg flex items-center justify-center z-10">
          <div className="bg-light-blue p-4">
            <div className="cursor-pointer absolute top-0 right-0 p-4" onClick={handleUpdateProfileClose}>X</div>
            <UpdateProfileCard />
          </div>
        </div>
      )} 

 </div>
 )}

export default Navbar
