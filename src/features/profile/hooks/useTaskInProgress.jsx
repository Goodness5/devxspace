import React from 'react'
import { BASE_URL } from '../../../utils/Api'
import axios from 'axios'
import { useQuery } from 'react-query'

const useTaskInProgress = (address) => {
    // tasks_accepted/<address>
    const API = `${BASE_URL}/tasks_accepted/${address}`

    const config ={
        headers:{
            "Content-Type": "application/json",
        }
    }

    const getProfile =()=>{
        return axios.get(API, config).then((res)=>res.data)
    }
    const { data, isLoading, isError, error, refetch } = useQuery(
        ["acceptedTask"],
        getProfile,
        {}
      );
      return{data, isLoading, isError, error, refetch};
}

export default useTaskInProgress