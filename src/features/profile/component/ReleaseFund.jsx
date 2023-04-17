import axios from 'axios';
import React, { useEffect } from 'react'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../utils/Api';
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useContractRead } from 'wagmi';
import escrowAbi from '../../../utils/escrowAbi.json'


const ReleaseFund = (props) => {
  const {address} = useAccount('')
    const config = {
        headers: {
          "Content-Type": "application/json",
      
        },
      };
    
      const {mutate: accept, isLoading:acceptLoading, isSuccess: acceptSuccess, isError:acceptIsError, error: acceptError} = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}/agent/release_fund`,data, config)
        },
      })
      

      const Accept = (e) =>{
        e.preventDefault()
        release();;
    }


    const { config : releaseConfig } = usePrepareContractWrite({
      address: '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65',
      abi: escrowAbi,
      functionName: 'release',
      args: [props.id],
    })
    const { data : releaseData, isLoading: isLoadingData, isSuccess : isSuccessData, write : release } = useContractWrite(releaseConfig)

    const {data: releasWaitData, isLoading: releaseDataWaitLoading, isSuccess : releaseDataSuccess} = useWaitForTransaction({
      hash: releaseData?.hash,
      onSuccess(data) {
        console.log(data);
        accept({task_id:props.id, agent_address:props.agent_address});
      },
      onError(error) {
        console.log(error);
      },
    }) 





    useEffect(()=>{
        if(acceptLoading){
            toast.info("releasing fund",)
        }
        if(acceptSuccess){
            toast.success("fund released")
        }
        if(acceptIsError){
            toast.error(acceptError?.response?.data?.error)
        }
      
    },[acceptLoading, acceptSuccess, acceptIsError, acceptError])

  return (
    <section>

    <div className="bg-[#FFFFFF] w-[100%] rounded-lg ">
  
    <div className="mt-2 border-b-[1px] border-[#EFF2F9] mb-1 pb-2">
        <h5 className="text-[14px] pl-6  text-[#484679] font-semibold leading-4 ">{props.title}</h5>

    <p className="text-[14px] pl-6 pr-2 text-[#484679] font-normalmt-2">{props.description}</p>
    <p className="text-[14px] pl-6 pr-2 text-[#484679] font-normalmt-2">Freelancer:{props.freelancer}</p>    <p className="text-[14px] pl-6 pr-2 text-[#484679] font-normalmt-2">Buyer:{props.buyer}</p>
    
<div className="">

    <button onClick={Accept} className='text-[#FFFFFF] mt-4 ml-6 py-2 px-4 rounded-lg border-[1px] bg-[#052C5B] '>Release Fund</button> 

</div>
    

</div>

            </div>
    </section>
  )
}

export default ReleaseFund