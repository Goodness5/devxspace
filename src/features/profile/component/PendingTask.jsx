import React from 'react'
import SingleTaskNotification from './SingleTaskNotification'
import { useAccount } from 'wagmi';
import PendingTaskNotification from './PendingTaskNotification';
import useFetchPendingTaskNot from '../hooks/useFetchPendingTaskNot';

const PendingTask = () => {
    const { address } = useAccount();
    const { data } = useFetchPendingTaskNot(address);
    console.log("eeee", data);
  return (
    <section className="mt-4">
    <section className="gap-4">
      <div className="bg-[#FFFFFF] w-[100%] rounded-lg ">
        <h3 className="text-[14px] leading-5  pb-4 pt-4 font-semibold border-b-[1px] border-[#EFF2F9] text-[#1A274E] pl-6">
          Pending Task
        </h3>
        {data?.tasks?.length === 0 ? (
          <p className="pt-[40px] pb-[40px] pl-6 text-[16px]">
            No Task Available
          </p>
        ) : (
          <div>
            {data?.tasks?.map((data) => (
                <PendingTaskNotification title={data.title} description={data.description}  price={data.price} id={data.id} key={data.id} developer_address={data.developer_address} accepted={data.accepted} buyer_address={data.buyer_address}  />
        

            ))}
          </div>
        )}
      </div>
    </section>
  </section>
  )
}

export default PendingTask