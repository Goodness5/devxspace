import { useQuery } from "react-query"
import { BASE_URL } from "../../../utils/Api"
import axios from "axios"


const useFetchPendingTaskNot = (address) => {

    const API = `${BASE_URL}/payable/${address}`

    const config ={
        headers:{
            "Content-Type": "application/json",
        }
    }

    const getProfile =()=>{
        return axios.get(API, config).then((res)=>res.data)
    }
    const { data, isLoading, isError, error, refetch } = useQuery(
        ["PendinTaskNot"],
        getProfile,
        {}
      );
      return{data, isLoading, isError, error, refetch};
 
}

export default useFetchPendingTaskNot