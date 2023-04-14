import axios from "axios"
import { BASE_URL } from "../../../utils/Api"
import { useQuery } from "wagmi"

const useTaskNotification = (address) => {
    const API = `${BASE_URL}/available_tasks/${address}`
console.log(API);
    const config ={
        headers:{
            "Content-Type": "application/json",
        }
    }

    const getProfile =()=>{
        return axios.get(API, config).then((res)=>res.data)
    }
    const { data, isLoading, isError, error, refetch } = useQuery(
        ["incomingTask"],
        getProfile,
        {}
      );
      return{data, isLoading, isError, error, refetch};
}

export default useTaskNotification