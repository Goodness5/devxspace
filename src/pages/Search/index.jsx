import React from "react";
import userDetails from "../../utils/freelancerDetails";
import Card from "../../components/Card";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const Search = () => {
  return (
    <div className='relative' >
      <div className="bg-[#052C5B] h-52 ">
        <div className="w-2/3 flex flex-col ml-32">
          <h2 className="text-4xl font-bold mt-10 text-white">
            Search Services
          </h2>
          <p className="text-2xl text-light-blue italic">Browse All Services</p>
        </div>
      </div>
     
      <div className='relative bg-white'>
      <div className='my-4 w-[30%] flex justify-end absolute right-20' >
    <TextField id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search" />

      </div>
      </div>
      <div className='lg:flex flex-wrap w-[100%] float-left bg-[#EFF2F9] mt-20' >
        {userDetails.map((e) => {
          return (
            <Card
              key={e.id}
              imgSrc={e.image}
              avatar={e.avatar}
              username={e.username}
              order = {e.order}
              skill = {e.skill}
              price = {e.price}
            />
          );
        })}
      </div>

    </div>
  );
};

export default Search;
