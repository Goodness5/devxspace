import React from "react";
import userDetails from "../utils/freelancerDetails";
import Card from "../components/Card";

const Search = () => {
  return (
    <div>
      <div className="bg-regal-blue h-52 ">
        <div className="w-2/3 flex flex-col ml-32">
          <h2 className="text-4xl font-bold mt-10 text-white">
            Search Jobs
          </h2>
          <p className="text-2xl text-light-blue italic">Browse All Services</p>
        </div>
      </div>

      <div className='lg:flex flex-wrap w-[100%] float-left' >
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
