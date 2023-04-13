import { useMutation } from "react-query";
import { BASE_URL } from "../../../utils/Api";
import axios from "axios";


const useCreateGig = () => {
    const url = `${BASE_URL}/register_service`
    const config = {
      headers: {
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*'
      
      },
    };
  
    const registerService = (data)=>{
      const formData = new FormData();
      formData.append(" service_name", data. service_name)
      formData.append("service_desc", data.service_desc)
      formData.append("address", data.address)
      formData.append("service_image", data.service_image)
     
      return axios.post(url, data, config);
    }
  return useMutation(registerService)
}

export default useCreateGig