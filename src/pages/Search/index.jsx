import React from "react";
import userDetails from "../../utils/freelancerDetails";
import Card from "../../components/Card";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import useFetchServices from "../../features/services/hooks/useFetchServices";
import {BiSearch} from 'react-icons/bi'


const Search = () => {
  const {data, isLoadins, isError, error} = useFetchServices()
  console.log("heee", data);
  return (
    <div className='relative' >
      <div className="bg-[#052c5b] h-[200px] ">
        <div className="w-2/3 flex flex-col ml-32">
          <h2 className="text-4xl font-bold mt-10 text-white">
            Search Services
          </h2>
          <p className="text-2xl text-light-blue italic">Browse All Services</p>
        </div>
      </div>
     
      <div className='relative bg-white'>

      <div className='my-4 w-[30%] flex justify-end absolute right-20 items-center' >
        <div className="flex w-[100%] items-center bg-[#FFFFFF] rounded-lg h-[50px]">

        <BiSearch size={20} className="ml-[10px] mt-4"/>
    <TextField 
          variant="standard"

          fullWidth
          InputProps={{
            disableUnderline: true,
          }}
          label="Search" className="w-[90%] ml-auto" />
        </div>

      </div>
      </div>

      <div className="w-[100%] bg-[#EFF2F9] pb-10 pt-5">

      <div className='flex flex-wrap w-[90%] gap-9  lgDesktop:gap-12 tabletAir:gap-14 content-center  mx-auto  mt-24' >

        {data?.map((e) => {
         
          
          return (
            <Card
              key={e.id}
              imgSrc={"https://iamsuperman.pythonanywhere.com/" + e.image_file}
              avatar={"https://iamsuperman.pythonanywhere.com/" + e?.user?.avatar}
              username={e?.user?.username}
              // order = {e.order}
              address={e?.user?.address}
              skill = {e.name}
              description = {e.description}
              // price = {e.price}
            />
          );
        })}
      </div>
      </div>

    </div>
  );
};

export default Search;
