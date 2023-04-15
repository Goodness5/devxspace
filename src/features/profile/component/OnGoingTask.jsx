import axios from 'axios';
import React, { useEffect } from 'react'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../../utils/Api';

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

      const Accept = (e) =>{
        e.preventDefault()
        
        accept({task_id:props.id, address:props.address})
    }

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
    },[acceptLoading, acceptSuccess, acceptIsError, acceptError])

  return (
    <section>

    <div className="bg-[#FFFFFF] w-[100%] rounded-lg ">
  
    <div className="mt-2 border-b-[1px] border-[#EFF2F9] mb-1 pb-2">
        <h5 className="text-[14px] pl-6  text-[#484679] font-semibold leading-4 ">{props.title}</h5>

    <p className="text-[14px] pl-6 pr-2 text-[#484679] font-normalmt-2">{props.description}</p>
    {
!props.completed ?
    <button onClick={Accept} className='text-[#FFFFFF] mt-4 ml-6 py-2 px-4 rounded-lg border-[1px] bg-[#052C5B] '>Submit Task</button> : <p className='text-[14px] pl-6'>In Review</p>
}
</div>

            </div>
    </section>
  )
}

export default OnGoingTask