/** @format */

import React from "react";
import OnGoingTask from "./OnGoingTask";
import useFetchOngoinTask from "../hooks/useFetchOngoinTask";
import { useAccount } from "wagmi";
import useFetchAllTask from "../hooks/useFetchAllTask";

const Task = () => {
    const {address} =useAccount()
    const {data} = useFetchOngoinTask(address)
    const {data: allFetch} = useFetchAllTask(address)
    console.log("onGoing Task",data);
    console.log("Fetch Task",allFetch);
  return (
    <section className="mt-4">
      <section className="flex gap-4">
        <div className="bg-[#FFFFFF] w-[50%] rounded-lg ">
          <h3 className="text-[14px] leading-5  pb-4 pt-4 font-semibold border-b-[1px] border-[#EFF2F9] text-[#1A274E] pl-6">
            onGoing Task
          </h3>
         { data?.tasks?.length === 0 ? (
            <p className="pt-[40px] pb-[40px] pl-6 text-[16px]">
              No Task Available
            </p>
          ) : (
            <>
{
    data?.tasks?.map((data)=>(

        <OnGoingTask title={data.title} description={data.description}  id={data.task_id} address={data.developer_address} key={data.task_id} completed={data.completed} developer_address={data.developer_address} buyer_address={data.buyer_address}/>
    ))
}
            </>
           )}
        </div>

        <div className="bg-[#FFFFFF] w-[50%] rounded-lg ">
          <h3 className="text-[14px] leading-5  pb-4 pt-4 font-semibold border-b-[1px] border-[#EFF2F9] text-[#1A274E] pl-6">
            completed Task
          </h3>
          { allFetch?.length === 0 ? (

            <p className="pt-[40px] pb-[40px] pl-6 text-[16px]">
              No Task Available
            </p>
          ) : (
            <>
{
    allFetch?.map((data)=>(
<>
{data.fund_released
 &&
<OnGoingTask title={data.title} description={data.description}  id={data.task_id} address={data.developer_address} key={data.task_id} completed={data.completed} developer_address={data.developer_address} buyer_address={data.buyer_address}/>
 }
</>
    ))
}
            </>
           )}
        
        </div>
      </section>
    </section>
  );
};

export default Task;
