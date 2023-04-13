import React from "react";
import userDetails from "../../utils/freelancerDetails";
import Card from "../../components/Card";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import useFetchServices from "../../features/services/hooks/useFetchServices";


const Search = () => {
  const {data, isLoadins, isError, error} = useFetchServices()
  console.log("heee", data);
  return (
    <div className='relative' >
      <div className="bg-[#052c5b] h-42 ">
        <div className="w-2/3 flex flex-col ml-32">
          <h2 className="text-4xl font-bold mt-10 text-white">
            Search Services
          </h2>
          <p className="text-2xl text-light-blue italic">Browse All Services</p>
        </div>
      </div>
     
      <div className='relative bg-white'>
      <div className='my-4 w-[30%] flex justify-end absolute right-20 top-20' >
    <TextField id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search" />

      </div>
      </div>
      <div className='lg:flex flex-wrap w-[100%] flex justify-center content-center float-left bg-[#EFF2F9] mt-20' >
        {data?.map((e) => {
          
          return (
            <Card
              key={e.id}
              imgSrc={"https://iamsuperman.pythonanywhere.com/" + e.image_file}
              avatar={"https://iamsuperman.pythonanywhere.com/" + e?.user?.avatar}
              username={e?.user?.username}
              // order = {e.order}
              skill = {e.name}
              description = {e.description}
              // price = {e.price}
            />
          );
        })}
      </div>

    </div>
  );
};

export default Search;
