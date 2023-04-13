import { useMutation } from "wagmi";
import { BASE_URL } from "../../../utils/Api"
import axios from "axios";


const useCreateProfile = () => {
  const url = `${BASE_URL}/create_profile`
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      // 'Access-Control-Allow-Origin': '*'
    
    },
  };

  const register = (data)=>{
    const formData = new FormData();
    formData.append("username", data.username)
    formData.append("avatar", data.avatar)
    formData.append("address", data.address)
    formData.append("skills", data.skills)
    formData.append("about", data.about)
    return axios.post(url, data, config);
  }
return useMutation(register)
}

export default useCreateProfile