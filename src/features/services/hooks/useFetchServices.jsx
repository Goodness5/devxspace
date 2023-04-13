import axios from "axios";

import { useQuery } from "react-query";
import { BASE_URL } from "../../../utils/Api";

const useFetchServices = () => {
    const API = `${BASE_URL}/list_services`
    console.log("api", API);

    const config ={
        headers:{
            "Content-Type": "application/json",
        }
    }

    const getTask =()=>{
        return axios.get(API, config).then((res)=>res.data)
    }
    const { data, isLoading, isError, error, refetch } = useQuery(
        ["tasks"],
        getTask,
        {}
      );
      return{data, isLoading, isError, error, refetch};
}

export default useFetchServices