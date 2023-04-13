import React from 'react'
import { BASE_URL } from '../../../utils/Api';
import axios from 'axios';
import { useMutation } from 'react-query';

const useHireDev = () => {

    const url = `${BASE_URL}/hire_developer`
    const config = {
      headers: {
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*'
      
      },
    };
  
    const registerService = (data)=>{
      const formData = new FormData();
      formData.append(" buyer_address", data. buyer_address)
      formData.append("title", data.title)
      formData.append("description", data.description)
      formData.append("price", data.price)
      formData.append("developer_address", data.developer_address)
     
      return axios.post(url, data, config);
    }
  return useMutation(registerService)
}

export default useHireDev