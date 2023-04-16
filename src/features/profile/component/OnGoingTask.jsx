import axios from 'axios';
import React, { useEffect } from 'react'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../utils/Api';
import {usePrepareContractWrite, useContractWrite} from 'wagmi'
import escrowAbi from '../../../utils/escrowAbi.json'

const OnGoingTask = (props) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
      
        },
      };
    
      const {mutate: accept, isLoading:acceptLoading, isSuccess: acceptSuccess, isError:acceptIsError, error: acceptError} = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}/tasks/submit`,data, config)
        },
        //  onSuccess:() =>{
        //   // queryClient.invalidateQueries("")
        // }
      })
      const {mutate: cancel, isLoading:cancelLoading, isSuccess: cancelSuccess, isError:canceIsError, error: cancelError} = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}/abort`,data, config)
        },
        //  onSuccess:() =>{
        //   // queryClient.invalidateQueries("")
        // }
      })

      const Accept = (e) =>{
        e.preventDefault()
        
        accept({task_id:props.id, address:props.address})
    }
      const Cancel = (e) =>{
        e.preventDefault()
        
        cancel({task_id:props.id, address:props.buyer_address, developer_address:props.developer_address})
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
            toast.info("submitting task",)
        }
        if(acceptSuccess){
            toast.success("task submitted for review")
        }
        if(acceptIsError){
            toast.error(acceptError?.response?.data?.error)
        }
        if(cancelLoading){
            toast.error("canceling task")
        }
        if(canceIsError){
            toast.error(cancelError?.response?.data?.error)
        }
        if(cancelSuccess){
            toast.success("Task deleted succesfully")
        }
    },[acceptLoading, acceptSuccess, acceptIsError, acceptError, cancelLoading, canceIsError, cancelSuccess, cancelError])

  return (
    <section>

    <div className="bg-[#FFFFFF] w-[100%] rounded-lg ">
  
    <div className="mt-2 border-b-[1px] border-[#EFF2F9] mb-1 pb-2">
        <h5 className="text-[14px] pl-6  text-[#484679] font-semibold leading-4 ">{props.title}</h5>

    <p className="text-[14px] pl-6 pr-2 text-[#484679] font-normalmt-2">{props.description}</p>
    {
!props.completed ?
<div className="">

    <button onClick={Accept} className='text-[#FFFFFF] mt-4 ml-6 py-2 px-4 rounded-lg border-[1px] bg-[#052C5B] '>Submit Task</button> 
    <button onClick={Cancel} className='text-[#FFFFFF] mt-4 ml-6 py-2 px-4 rounded-lg border-[1px] bg-red '>Cancel Task</button> 
</div>
    
    : <p className='text-[14px] pl-6'>In Review</p>
}
</div>

            </div>
    </section>
  )
}

export default OnGoingTask