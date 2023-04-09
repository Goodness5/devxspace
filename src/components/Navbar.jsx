import React, { useState } from 'react';
import Connect from "./Connect";
import Link from 'next/link';
import UpdateProfileCard from '../features/profile/component/updateprofile';

const Navbar = () => {
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const handleUpdateProfileClick = () => {
    setShowUpdateProfile(true);
    document.body.style.overflow = 'hidden';
  };

  const handleUpdateProfileClose = () => {
    setShowUpdateProfile(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <div>
    <div className='bg-blue-50 flex flex-row justify-end '>

      <div className="flex items-center shadow-2xl shadow-regal-blue rounded-lg cursor-pointer p-2 mx-1">
        <span className="mr-2">Home</span>
      </div>

      <Link href='/profile' className="flex items-center shadow-2xl shadow-regal-blue rounded-lg cursor-pointer p-2 mx-1">
        Dashboard
      </Link>

      <Link href='/Search' className="flex items-center shadow-2xl shadow-regal-blue rounded-lg cursor-pointer p-2 mx-1">
        <span className="mr-2">find jobs</span>
      </Link>

      <div className="flex items-center shadow-2xl shadow-regal-blue rounded-lg cursor-pointer p-2 mx-1" onClick={handleUpdateProfileClick}>
        <span className="mr-2">update profile</span>
      </div>

      <Connect />
      </div>


      {showUpdateProfile && (
        <div className="fixed flex flex-col z-50 bg-opacity-50 w-full">
          <div className="flex justify-end">
            <div className="cursor-pointer p-4 text-white font-bold" style={{'right': 0}} onClick={handleUpdateProfileClose}>X</div>
          </div>
          <div className="my-60 mx-80 w-2/4 p-4 rounded-lg bg-white shadow-md">
            <UpdateProfileCard />
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block">
              Update Profile
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;
