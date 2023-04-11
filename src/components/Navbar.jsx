import React, { useState } from "react";
import Connect from "./Connect";
import Link from 'next/link';
// import UpdateProfileCard from '../features/profile/component/updateprofile';
import Image from 'next/image';
import logo from "../images/devlogo.png"
import Update from 'src/components/Update.jsx';
const Navbar = () => {
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [open, setOpen] = useState(false);

  const handleUpdateProfileClick = () => {
    setShowUpdateProfile(true);
    setOpen(true)
  };
  const handleClose = () =>{
    setShowUpdateProfile(false);
    setOpen(false)
  }
  
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

      {showUpdateProfile && (<Update dialog={handleUpdateProfileClick} dialogClose={handleClose}/>)}

    </div>
  );
};

export default Navbar;
