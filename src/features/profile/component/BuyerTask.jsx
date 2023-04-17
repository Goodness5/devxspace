import React from 'react'
import { useAccount } from "wagmi";
import TaskInProgress from './TaskInProgress';
import useTaskInProgress from '../hooks/useTaskInProgress';
import CompletedTask from './CompletedTask';
import useFetchAllTask from '../hooks/useFetchAllTask';
const BuyerTask = () => {
    const {address} =useAccount()
    const {data} = useTaskInProgress(address)

    const {data: allFetch} = useFetchAllTask(address)
    console.log("mm", data);
  return (
    <section className="mt-4">
      <section className="flex mobile:flex-col gap-4">
        <div className="bg-[#FFFFFF] w-[50%] mobile:w-[100%] rounded-lg ">
          <h3 className="text-[14px] leading-5  pb-4 pt-4 font-semibold border-b-[1px] border-[#EFF2F9] text-[#1A274E] pl-6">
             Task in Progress
          </h3>
         { data?.tasks?.length === 0 ? (
            <p className="pt-[40px] pb-[40px] pl-6 text-[16px]">
              No Task Available
            </p>
          ) : (
            <>
{
    data?.tasks?.map((data)=>(
      <>
<TaskInProgress title={data.title} description={data.description} id={data.task_id} address={data.buyer_address} completed={data.completed} aborted={data.aborted} developer_address={data.developer_address} />
      </>
        // <OnGoingTask title={data.title} description={data.description}  id={data.task_id} address={data.developer_address} key={data.task_id}/>
    ))
}
            </>
           )}
        </div>

        <div className="bg-[#FFFFFF] w-[50%] mobile:w-[100%] rounded-lg ">
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
&& data.completed &&

<CompletedTask title={data.title} description={data.description}  id={data.task_id} address={data.developer_address} key={data.task_id}  developer_address={data.developer_address} buyer_address={data.buyer_address} />
}
</>
))
}
</>
)}
        </div>
      </section>
    </section>
  )
}

export default BuyerTask