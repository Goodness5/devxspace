import axios from 'axios';
import React, { useEffect } from 'react'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../utils/Api';
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useContractRead } from 'wagmi';
import escrowAbi from '../../../utils/escrowAbi.json'

const ReturnFund = (props) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
      
        },
      };
    
  
      const {mutate: cancel, isLoading:cancelLoading, isSuccess: cancelSuccess, isError:canceIsError, error: cancelError} = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}/agent/refund`,data, config)
        },
        //  onSuccess:() =>{
        //   // queryClient.invalidateQueries("")
        // }
      })

  
      const Cancel = (e) =>{
        e.preventDefault()
        cancelPool();
    }


    const { config : AgentcancelConfig } = usePrepareContractWrite({
        address: '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65',
        abi: escrowAbi,
        functionName: 'cancel',
        args: [props.id]
      })
      const { data: AgCancelData, isLoading, isSuccess, write: cancelPool } = useContractWrite(AgentcancelConfig);
      
      const {data: AgCancellWaitData, isLoading: AppcancelWaitLoading, isSuccess : AppcancelaSuccess} = useWaitForTransaction({
        hash: AgCancelData?.hash,
        onSuccess(data) {
          console.log(data);
        cancel({task_id:props.id, agent_address:props.agent_address,})
        },
        onError(error) {
          console.log(error);
        },
      }) 





    useEffect(()=>{
       
        if(cancelLoading){
            toast.error("refunding...")
        }
        if(canceIsError){
            toast.error(cancelError?.response?.data?.error)
        }
        if(cancelSuccess){
            toast.success("Fund released")
        }
    },[ cancelLoading, canceIsError, cancelSuccess, cancelError])

  return (
    <section>

    <div className="bg-[#FFFFFF] w-[100%] rounded-lg ">
  
    <div className="mt-2 border-b-[1px] border-[#EFF2F9] mb-1 pb-2">
        <h5 className="text-[14px] pl-6  text-[#484679] font-semibold leading-4 ">{props.title}</h5>

    <p className="text-[14px] pl-6 pr-2 text-[#484679] font-normalmt-2">{props.description}</p>
    <p className="text-[14px] pl-6 pr-2 text-[#484679] font-normalmt-2">Freelancer:{props.freelancer}</p>    <p className="text-[14px] pl-6 pr-2 text-[#484679] font-normalmt-2">Buyer:{props.buyer}</p>
    
<div className="">

   
    <button onClick={Cancel} className='text-[#FFFFFF] mt-4 ml-6 py-2 px-4 rounded-lg border-[1px] bg-red '>Return Fund</button> 
</div>
    

</div>

            </div>
    </section>
  )
}

export default ReturnFund