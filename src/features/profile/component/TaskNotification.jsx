/** @format */

import React from "react";
import useTaskNotification from "../hooks/useTaskNotification";
import { useAccount } from "wagmi";
import SingleTaskNotification from "./SingleTaskNotification";

const TaskNotification = () => {
  const { address } = useAccount();
  const { data } = useTaskNotification(address);
  console.log("hi", data);
  return (
    <section className="mt-4">
      <section className="gap-4">
        <div className="bg-[#FFFFFF] w-[100%] rounded-lg ">
          <h3 className="text-[14px] leading-5  pb-4 pt-4 font-semibold border-b-[1px] border-[#EFF2F9] text-[#1A274E] pl-6">
            New Task Notification
          </h3>
          {data?.tasks?.length === 0 ? (
            <p className="pt-[40px] pb-[40px] pl-6 text-[16px]">
              No Task Available
            </p>
          ) : (
            <div>
              {data?.tasks?.map((data) => (
                <SingleTaskNotification title={data.title} description={data.description} deadline={data.deadline} price={data.price} id={data.id} key={data.id} address={data.developer_address}/>
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default TaskNotification;
