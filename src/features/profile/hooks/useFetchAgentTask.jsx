import React from 'react'

const useFetchAgentTask = (address) => {
    // /ongoing_tasks/<address>
    const API = `${BASE_URL}/agent_tasks/${address}`

    const config ={
        headers:{
            "Content-Type": "application/json",
        }
    }

    const getProfile =()=>{
        return axios.get(API, config).then((res)=>res.data)
    }
    const { data, isLoading, isError, error, refetch } = useQuery(
        ["agent"],
        getProfile,
        {}
      );
      return{data, isLoading, isError, error, refetch};
}

export default useFetchAgentTask