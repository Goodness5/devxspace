import axios from "axios"
import { BASE_URL } from "../../../utils/Api"
import { useQuery } from "react-query"


const useFetchOngoinTask = (address) => {
    // /ongoing_tasks/<address>
    const API = `${BASE_URL}/ongoing_tasks/${address}`

    const config ={
        headers:{
            "Content-Type": "application/json",
        }
    }

    const getProfile =()=>{
        return axios.get(API, config).then((res)=>res.data)
    }
    const { data, isLoading, isError, error, refetch } = useQuery(
        ["onGoing"],
        getProfile,
        {}
      );
      return{data, isLoading, isError, error, refetch};
}

export default useFetchOngoinTask