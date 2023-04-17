import axios from 'axios';
import React, { useEffect } from 'react'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../utils/Api';

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
        
        // cancel({task_id:props.id, agent_address:props.agent_address,})
    }

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