import React from "react";

import { useAccount } from "wagmi"
import ReleaseFund from "./ReleaseFund";
import ReturnFund from "./ReturnFund";
import useFetchAgentTask from "../hooks/useFetchAgentTask";

const Agent = () => {
    const {address} =useAccount()
    const {data} = useFetchAgentTask(address)
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
    data?.map((data)=>(
        <>
    {
        data.finalized ===true  && data.fund_released===false &&
        <ReleaseFund title={data.title} description={data.description}  id={data.id} address={data.developer_address} key={data.task_id} completed={data.completed} developer_address={data.developer_address} buyer_address={data.buyer_address} freelancer={data.developer.username} buyer={data.buyer.username} agent_address={data.agent_address}/>
    }
        </>
      
    
    ))
}
            </>
           )}
        </div>

        <div className="bg-[#FFFFFF] w-[50%] rounded-lg ">
          <h3 className="text-[14px] leading-5  pb-4 pt-4 font-semibold border-b-[1px] border-[#EFF2F9] text-[#1A274E] pl-6">
            Return Fund
          </h3>
          { data?.abort=== false ? (
            <p className="pt-[40px] pb-[40px] pl-6 text-[16px]">
              No Task Available
            </p>
          ) : (
            <>
{
    data?.map((data)=>(
        <>
    {
        data.finalized  === false && data.refund ===true &&
        <ReturnFund title={data.title} description={data.description}  id={data.id} address={data.developer_address} key={data.id} completed={data.completed} developer_address={data.developer_address} buyer_address={data.buyer_address} freelancer={data.developer.username} buyer={data.buyer.username} agent_address={data.agent_address}/>
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
}

export default Agent