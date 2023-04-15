import React, { useEffect } from 'react'
import { useMutation } from 'react-query';
import { BASE_URL } from '../../../utils/Api';
import { toast } from 'react-toastify';
import axios from 'axios';

const TaskInProgress = (props) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
      
        },
      };
    
      const {mutate: accept, isLoading:acceptLoading, isSuccess: acceptSuccess, isError:acceptIsError, error: acceptError, } = useMutation({
        mutationFn:(data)=>{
          return axios.post(`${BASE_URL}/finalize`,data, config)
        },
        //  onSuccess:() =>{
        //   // queryClient.invalidateQueries("")
        // }
      })

      const Accept = (e) =>{
        e.preventDefault()
        
        accept({task_id:props.id, address:props.address, status:1})

    }
        const Reject =(e)=>{
            e.preventDefault();
            accept({task_id:props.id, address:props.address, status:0})

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

    <p className="text-[12px] pl-6 pr-2 text-[#484679] font-normalmt-2">{props.description}</p>
    <div className="flex gap-2 justify-end mr-4">
{
props.completed &&
<div className="">

    <button onClick={Accept} className='text-[#FFFFFF] mt-4 ml-6 py-2 px-2 rounded-lg border-[1px] bg-[#052C5B] '> Accept Submition</button>
    <button onClick={Reject} className='text-[#FFFFFF] mt-4 ml-6 py-2 px-4 rounded-lg border-[1px] bg-red '> Reject Submition</button>
</div>
}
    </div>
    </div>

            </div>
    </section>
  )
}

export default TaskInProgress