import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/Api';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useContractRead } from 'wagmi';
import { AiOutlineCheck, AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

const PendingTaskNotification = (props) => {
    const {address} = useAccount('')
    const {mutate, isLoading, isError, error, isSuccess} = useHireDev()
    const [isActive, setIsActive] = useState(false);
    const [allowance, setAllowance] = useState(0);
   
   
    //For ETH payment
    const { config: depositByETHConfig} = usePrepareContractWrite({
      mode: 'recklesslyUnprepared',
      address: '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65',
      abi: escrowAbi,
      functionName:'depositByETH',
      overrides: {
          from: address,
          value: ethers.utils.parseEther(String(props.price)),
      },
      args: [props.developer_address, "0x2e767b4A3416Ef16458355EFAcec7d3228Cec08C"],
    })    
  const { data:payEthdata, isLoading : payETHisLoad, isSuccess:payEthisSucc, write:depositByETH } = useContractWrite(depositByETHConfig)
  
  const {data: payEthWaitData, isLoading: payEthdataWaitLoading, isSuccess : ispayEthdataSuccess} = useWaitForTransaction({
    hash: payEthdata?.hash,
    onSuccess(data) {
      const poolID = parseInt((data.logs[0].data.slice(-64)),16);
      accept({task_id:props.id, new_task_id:poolID, buyer_address:props.buyer_address, agent_address:"0x2e767b4A3416Ef16458355EFAcec7d3228Cec08C", developer_address:props.developer_address, })
    },
    onError(error) {
      console.log(error);
    },
  }) 
  //For Token Approval
  const { data: allowData , isError: allowError, isLoading : allowIsLoading } = useContractRead({
    address: '0x101E72De70FffA3155A1eF90B78E78C670899a1a',
    abi: token_abi,
    functionName: 'allowance',
    args: [address, '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65']
  })
  
  const { config: writeApproveConfig } = usePrepareContractWrite({
    address: '0x101E72De70FffA3155A1eF90B78E78C670899a1a',
    abi: token_abi,
    functionName: 'approve',
    args: ['0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65', ethers.utils.parseEther(String(props.price))]
  })
  const { data:approveData, isLoading: approveIsLoading, isSuccess: approveIsSuccess, write: approve } = useContractWrite(writeApproveConfig);

  const {data: approveWaitData, isLoading: approveWaitLoading, isSuccess : isapproveSuccess} = useWaitForTransaction({
    hash: approveData?.hash,
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  })
   

  //For token Payment
  const { config : depositTokenConfig} = usePrepareContractWrite({
    mode: 'recklesslyUnprepared',  
    address: '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65',
    abi: escrowAbi,
    functionName:'deposit',
    args: ["0x101E72De70FffA3155A1eF90B78E78C670899a1a", props.developer_address, "0x2e767b4A3416Ef16458355EFAcec7d3228Cec08C", ethers.utils.parseEther(String(props.price))],
    })    
  const { data:payToken, isLoading : payTokenisLoad, isSuccess:payTKisSucc, write:deposit} = useContractWrite(depositTokenConfig)

  const {data: payTokenWaitData, isLoading: payTokendataWaitLoading, isSuccess : ispayTokendataSuccess} = useWaitForTransaction({
    hash: payToken?.hash,
    onSuccess(data) {
      const poolID = parseInt((data.logs[0].data.slice(-64)),16);
      accept({task_id:props.id, buyer_address:props.buyer_address, agent_address:"0x2e767b4A3416Ef16458355EFAcec7d3228Cec08C", developer_address:props.developer_address, })
      console.log(data)
    },
    onError(error) {
      console.log(error);
    },
  }) 
  
  const AcceptETHpay = (e) =>{
      e.preventDefault()
      depositByETH()       
  }
  const Reject = (e) =>{
      e.preventDefault()
      approveCancel();
      reject({task_id:props.id, address:props.address})
  }
  const AcceptTokenPay = (e) =>{
    e.preventDefault()
    if(allowance >= ethers.utils.parseEther(String(props.price))){
      deposit();
    }else if (allowance < ethers.utils.parseEther(String(props.price))){
      approve();
    }
  }
  
  const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const {mutate: accept, isLoading:acceptLoading, isSuccess: acceptSuccess, isError:acceptIsError, error: acceptError} = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}//task/pay`,data, config)
        },

      })
      const {mutate: reject, isLoading:rejectLoading, isSuccess:rejectSuccess, isError:rejectIsError, error:rejectError} = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}/tasks/reject`,data, config)
        },

      })
    
    
        // const { config : cancelConfig } = usePrepareContractWrite({
        //   address: '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65',
        //   abi: escrowAbi,
        //   functionName: 'approveCancel',
        //   args: [props.id]
        // })
        // const { data: ApproveCancelData, isLoading, isSuccess, write: approveCancel } = useContractWrite(cancelConfig)
      
    
    
    
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
            if(isError){
              toast.error(error?.response?.data?.error)
            }
            if(isSuccess){
              toast.success("Developer Hired")
              setIsActive(!isActive);
            }
            if(allowData){
              setAllowance(Number(allowData));
            
            }
        },[acceptLoading, acceptSuccess, acceptIsError, rejectLoading, rejectSuccess, rejectIsError, rejectError, isError, error, allowData])
    
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

    <button onClick={AcceptETHpay}  className='text-[12px] bg-fair-blue rounded-lg h-[40px] px-4 text-[#FFFFFF] '>Pay With Eth</button>
    <button onClick={AcceptTokenPay} className='text-[12px] bg-red rounded-lg h-[40px] px-4 text-[#FFFFFF] '>{allowance < ethers.utils.parseEther(String(props.price)) ? "Approve DXC" : "Pay With DXC"}</button>
 
            </div>
                }
    </div>

        </div>
      )
}

export default PendingTaskNotification