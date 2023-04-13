import { useQuery } from "react-query"
import { BASE_URL } from "../../../utils/Api"
import axios from "axios";


const useFetchProfile = (address) => {
    const API = `${BASE_URL}/users/${address}`
    console.log("api", API);

    const config ={
        headers:{
            "Content-Type": "application/json",
        }
    }

    const getProfile =()=>{
        return axios.get(API, config).then((res)=>res.data)
    }
    const { data, isLoading, isError, error, refetch } = useQuery(
        ["profile"],
        getProfile,
        {}
      );
      return{data, isLoading, isError, error, refetch};
 
}

export default useFetchProfile