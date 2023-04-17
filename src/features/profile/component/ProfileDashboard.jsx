/** @format */
import { useState, useEffect } from 'react'
import Image from "next/image";
import avatar from "../../../images/avatar.png";
import { FiMap, FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { FaRegCreditCard, FaLock, FaBriefcase } from "react-icons/fa";
import Task from "./Task";
import { useAccount } from "wagmi";
import useFetchProfile from "../hooks/useFetchProfile";
import { BASE_URL } from "../../../utils/Api";
import TaskNotification from "./TaskNotification";
import BuyerTask from "./BuyerTask";
import { Switch } from '@headlessui/react'
import PendingTask from './PendingTask';
import Agent from './Agent';
import ClipLoader from "react-spinners/ClipLoader";


const ProfileDashboard = () => {
  const [enabled, setEnabled] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)
  const {address} = useAccount();

  const {data, isLoading, isError, error, refetch} = useFetchProfile(address);

  console.log("llll", "https://iamsuperman.pythonanywhere.com/" + data?.avatar);
  // const image = ``;

  useEffect(() => {
    if(!data){
      setShowSpinner(!showSpinner)
    }
  },[data])
  
  return (
    <main className="w-[100%] flex justify-center pb-10  bg-[#EFF2F9]">
      {!data ? <div className="w-[100%] flex justify-center pb-10  bg-[#EFF2F9] h-[40%]" ><ClipLoader
        // color={"#ffffff"}
        loading={showSpinner}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        className=' mt-48'
      /> </div>:<div className="flex w-[90%] mx-auto">
        <section className="w-[20%] mt-[-40px] relative">
          <div className="px-[25px] border-[1px] border-[white] w-[250px] bg-[white] h-[300px] py-[25px] rounded-lg">
            <Image
              src={ "https://iamsuperman.pythonanywhere.com/" + data?.avatar}
              alt="freelance picture"
              height={200}
              width={200}
              className="object-cover"
            />

            <h3 className=" mt-3 text-center text-[16px] leading-5">
              {data?.username}
            </h3>
            <p className="text-[12px] text-center mt-1 leading-4">
              Web3 Developer
            </p>
            <div className="py-10 flex w-[100%] mr-10 justify-between">
      <Switch
        checked={enabled} 
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
        <p className='w-[50%]'>{enabled ? "Freelancer Profile" : "Buyer Profile"}</p>
    </div>
          </div>
        </section>
        <section className="w-[80%] mt-5">
          <div className="w-[100%] bg-[#052C5B] h-14 rounded-lg flex items-center">
            <h2 className="text-[14px] font-medium text-[#FFFFFF] pl-6  leading-4 ">
              Dashboard
            </h2>
          </div>
          <div className=" flex justify-between mt-5">
            {/* <div className="w-[30%] h-[100px] flex gap-2 items-center bg-[white] rounded-lg pl-6">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#1BAF65] ">
                <FiCheckCircle size={20} className="text-[#EAD5FF]" />
              </div>
              <div className="">
                <h2 className="text-[22px] font-bold">1</h2>
                <p className="">Completed Offer</p>
              </div>
            </div>
            <div className="w-[30%] h-[100px] flex gap-2 items-center bg-[white] rounded-lg pl-6">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#D11357] ">
                <FiAlertCircle size={20} className="text-[#EAD5FF]" />
              </div>
              <div className="">
                <h2 className="text-[22px] font-bold">1</h2>
                <p className="">In Review</p>
              </div>
            </div>
            <div className="w-[30%] h-[100px] flex gap-2 items-center bg-[white] rounded-lg pl-6">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#052C5B]">
                <FiMap size={20} className="text-[#EAD5FF]" />
              </div>
              <div className="">
                <h2 className="text-[22px] font-bold">1</h2>
                <p className="text-[14px] font-normal">Job posted</p>
              </div>
            </div>
          </div>
          <div className=" flex justify-between mt-5">
            <div className="w-[30%] h-[100px] flex gap-2 items-center bg-[white] rounded-lg pl-6">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#CFECFE] ">
                <FaBriefcase size={20} className="text-[#EAD5FF]" />
              </div>
              <div className="">
                <h2 className="text-[22px] font-bold">1</h2>
                <p className="">Total Earned</p>
              </div>
            </div>
            <div className="w-[30%] h-[100px] flex gap-2 items-center bg-[white] rounded-lg pl-6">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F39F00] ">
                <FaRegCreditCard size={20} className="text-[#EAD5FF]" />
              </div>
              <div className="">
                <h2 className="text-[22px] font-bold">1</h2>
                <p className="">Wallet Balance</p>
              </div>
            </div>
            <div className="w-[30%] h-[100px] flex gap-2 items-center bg-[white] rounded-lg pl-6">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F9E7EB]">
                <FaLock size={20} className="text-[#EAD5FF]" />
              </div>
              <div className="">
                <h2 className="text-[22px] font-bold">1</h2>
                <p className="text-[14px] font-normal">Total Locked</p>
              </div>
            </div> */}
          </div>
          <div className="">
           {address === "0x2e767b4A3416Ef16458355EFAcec7d3228Cec08C" ? <Agent/> : <>
            {enabled && <TaskNotification/>}
          {!enabled &&<PendingTask/>}
          {enabled && <Task/>}
          {!enabled && <BuyerTask/>}
            </>}
 
          </div>

          <div className="w-[100%] bg-[#FFFFFF] mt-5 rounded-lg">
            <div className="">
              <h3 className="pl-6 pt-2 text-[#052C5B] text-[16px] leading-5 font-medium">
                About Yourself
              </h3>
              <div className="w-[96%] bg-[#F1F4F9] mx-auto h-[200px] overflow-y-scroll mt-4 rounded-lg">
                <p className="text-[14px] leading-4 font-normal  w-[96%] mx-auto pt-4">
                  {data?.about}
                </p>
              </div>
            </div>
            <div className="pb-6">
              <h3 className="pl-6 pt-2 text-[#052C5B] text-[16px] leading-5 font-medium">
                Skills
              </h3>
              <div className="w-[96%]  mx-auto  mt-4 flex gap-2">
                {data?.skills?.map((data)=>(

                <p className="px-4 py-2 rounded-lg bg-[#F1F4F9] text-[14px] font-medium">
                  {data}
                </p>
                ))}
               
              </div>
            </div>
          </div>
        </section>
      </div>}
    </main>
  );
};

export default ProfileDashboard;
