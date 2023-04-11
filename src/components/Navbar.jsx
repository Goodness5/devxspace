import React, { useState } from "react";
import Connect from "./Connect";
import Link from 'next/link';
import UpdateProfileCard from '../features/profile/component/updateprofile';
import Image from 'next/image';
import logo from "../images/devlogo.png"
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
      <div className='bg-blue-50 flex flex-row justify-between w-[96%]  mx-auto'>
        
          <Link href="/" className="">
            <Image src={logo} className='w-[250px] h-[100px] object-cover'/>
            </Link>      

            <div className="flex items-center gap-6 text-[16px] font-medium capitalize">
          <Link href='/' className="flex items-center cursor-pointer hover:border-r-[2px] hover:border-[#132C8D] hover:text-[#132C8D] pr-[8px] ">

          Home
        </Link>

        <Link href='/profile' className="cursor-pointer hover:border-r-[2px] hover:border-[#132C8D] hover:text-[#132C8D] pr-[8px] ">
          Dashboard
        </Link>

        <Link href='/Search' className="hover:border-r-[2px] hover:border-[#132C8D] hover:text-[#132C8D] pr-[8px] cursor-pointer">
          find jobs
        </Link>

        <div onClick={handleUpdateProfileClick} className=" cursor-pointer hover:border-r-[2px] hover:border-[#132C8D] hover:text-[#132C8D] pr-[8px]" >
          update profile
        </div>
              </div> 
      


        <div className=" mr-10 flex items-center">
          <Connect />
        </div>

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
