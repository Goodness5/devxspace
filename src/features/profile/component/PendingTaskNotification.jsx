import React, { useEffect } from 'react'
import { BASE_URL } from '../../../utils/Api';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import escrowAbi from "../../../utils/escrowAbi.json"
import { AiOutlineCheck, AiOutlineCloseCircle } from 'react-icons/ai';

const PendingTaskNotification = (props) => {
  
    const config = {
        headers: {
          "Content-Type": "application/json",
      
        },
      };
    
      const {mutate: accept, isLoading:acceptLoading, isSuccess: acceptSuccess, isError:acceptIsError, error: acceptError} = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}//task/pay`,data, config)
        },
        //  onSuccess:() =>{
        //   // queryClient.invalidateQueries("")
        // }
      })
      const {mutate: reject, isLoading:rejectLoading, isSuccess:rejectSuccess, isError:rejectIsError, error:rejectError} = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}/tasks/reject`,data, config)
        },
        //  onSuccess:() =>{
        //   // queryClient.invalidateQueries("")
        // }
      })
        const Accept = (e) =>{
            e.preventDefault()
            console.log("clicked");
            accept({task_id:props.id, buyer_address:props.address, agent_address:"addr", developer_address:props.developer_address,  })
        }
        const Reject = (e) =>{
            e.preventDefault()
            approveCancel();
            console.log({task_id:props.id, address:props.address});
            reject({task_id:props.id, address:props.address})
        }
    
    
        const { config : cancelConfig } = usePrepareContractWrite({
          address: '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65',
          abi: escrowAbi,
          functionName: 'approveCancel',
          args: [props.id]
        })
        const { data: ApproveCancelData, isLoading, isSuccess, write: approveCancel } = useContractWrite(cancelConfig)
      
    
    
    
        useEffect(()=>{
            if(acceptLoading){
                toast.info("accepting task",)
            }
            if(acceptSuccess){
                toast.success("task accepted")
            }
            if(acceptIsError){
                toast.error(acceptError?.response?.data?.error)
            }
            if(rejectLoading){
                toast.info("rejecting task")
            }
            if(rejectSuccess){
                toast.success("Task Rejected")
            }
            if(rejectIsError){
                toast.success(rejectError?.response?.data?.error)
            }
        },[acceptLoading, acceptSuccess, acceptIsError, rejectLoading, rejectSuccess, rejectIsError, rejectError])
    
      return (
        <div className="w-[94%] mx-auto">
        <div className="mt-2 border-b-[1px] border-[#EFF2F9] mb-1 pb-2 pt-2 flex justify-between">
           
            <div className="">
    
        <h5 className="text-[14px]  text-[#484679] font-medium leading-4 "><span className='font-semibold'>Task title:</span> {props.title}</h5>
    
    <p className="text-[12px] pr-2 text-[#484679] font-normalmt-2"> <span className='font-semibold'>Task description:</span> {props.description}</p>
    
    <p className="text-[12px]  pr-2 text-[#484679] font-normalmt-2"> <span className='font-semibold'>Price:</span> {props.price}</p>
            </div>
                { props.accepted &&
             <div className=" flex gap-3 ">

    <button onClick={Accept}  className='text-[12px] bg-fair-blue rounded-lg h-[40px] px-4 text-[#FFFFFF] '>Pay With Eth</button>
    <button className='text-[12px] bg-red rounded-lg h-[40px] px-4 text-[#FFFFFF] '>Pay With DXC</button>
 
            </div>
                }
    </div>
        </div>
      )
}

export default PendingTaskNotification