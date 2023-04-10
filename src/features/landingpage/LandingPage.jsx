import React from 'react';
import Image from 'next/image';
import frelancer from '../../images/frelancer.jpg';

const LandingPage = () => {
  return (
    <div>
        <div className="bg-cover bg-center landing-top-img h-screen flex flex-col">
        <div className='bg-[#000102] text-center text-white h-screen opacity-50'>
        <div className="text-center z-50 m-auto flex flex-col mt-64">
          <h1 className="text-white text-5xl font-bold">Welcome to devxspace</h1>
          <p className="text-white text-lg">This is a decentralized freelancing platform</p>
          <div className='w-1/4 m-auto flex justify-between mt-16'>
            <button className='p-3 rounded-full bg-white text-[#000000]'>
              Hire freelancers
            </button>
            <button className='p-3 rounded-full bg-white text-[#000000]'>
              Looking For Job
            </button>

          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default LandingPage;
