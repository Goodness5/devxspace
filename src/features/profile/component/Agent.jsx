import React from "react";
import OnGoingTask from "./OnGoingTask";
import useFetchOngoinTask from "../hooks/useFetchOngoinTask";
import { useAccount } from "wagmi"
import ReleaseFund from "./ReleaseFund";

const Agent = () => {
    const {address} =useAccount()
    const {data} = useFetchOngoinTask(address)
    console.log("agent Task",data);
  return (
    <section className="mt-4">
      <section className="flex gap-4">
        <div className="bg-[#FFFFFF] w-[50%] rounded-lg ">
          <h3 className="text-[14px] leading-5  pb-4 pt-4 font-semibold border-b-[1px] border-[#EFF2F9] text-[#1A274E] pl-6">
            Release Fund
          </h3>
         { data?.tasks?.length === 0 ? (
            <p className="pt-[40px] pb-[40px] pl-6 text-[16px]">
              No Task Available
            </p>
          ) : (
            <>
{
    data?.tasks?.map((data)=>(
    
      
        <ReleaseFund title={data.title} description={data.description}  id={data.task_id} address={data.developer_address} key={data.task_id} completed={data.completed} developer_address={data.developer_address} buyer_address={data.buyer_address}/>
       
    ))
}
            </>
           )}
        </div>

        <div className="bg-[#FFFFFF] w-[50%] rounded-lg ">
          <h3 className="text-[14px] leading-5  pb-4 pt-4 font-semibold border-b-[1px] border-[#EFF2F9] text-[#1A274E] pl-6">
            Return Fund
          </h3>
          <div className="mt-2 border-b-[1px] border-[#EFF2F9] mb-1 pb-2">
            <h5 className="text-[14px] pl-6  text-[#484679] font-medium leading-4 ">
              E-commerce Website
            </h5>

            <p className="text-[12px] pl-6 pr-2 text-[#484679] font-normalmt-2">
              Someone bookmarked your SEO Expert Job listing! on Your way to
              making beautiful memories to share with your friends family and
              guest.
            </p>
          </div>
          <div className="mt-2 border-b-[1px] border-[#EFF2F9] mb-1 pb-2">
            <h5 className="text-[14px] pl-6 text-[#484679] font-medium leading-4 ">
              E-commerce Website
            </h5>

            <p className="text-[12px] pl-6 pr-2 text-[#484679] font-normalmt-2">
              Someone bookmarked your SEO Expert Job listing! on Your way to
              making beautiful memories to share with your friends family and
              guest.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Agent