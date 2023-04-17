

import { BASE_URL } from '../../../utils/Api'
import axios from 'axios'
import { useQuery } from 'react-query'

const useFetchAllTask = (address) => {
    // /ongoing_tasks/<address>
    const API = `${BASE_URL}/agent/dashboard/${address}`

    const config ={
        headers:{
            "Content-Type": "application/json",
        }
    }

    const getProfile =()=>{
        return axios.get(API, config).then((res)=>res.data)
    }
    const { data, isLoading, isError, error, refetch } = useQuery(
        ["fetchAllTask "],
        getProfile,
        {}
      );
      return{data, isLoading, isError, error, refetch};
}

export default useFetchAllTask