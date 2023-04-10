import React from 'react';
import Image from 'next/image';
import frelancer from '../../images/frelancer.jpg';

const LandingPage = () => {
  return (
    <div className='flex flex-col bg-[#666262]'>
        <div className="bg-cover bg-center landing-top-img flex flex-col bg-[#000000]">
        
        <div className="text-center z-50 m-auto flex flex-col mt-64">
          <h1 className="text-white text-5xl font-bold">Welcome to devxspace</h1>
          <p className="text-white text-lg">This is a decentralized freelancing platform</p>
          <div className='w-3/4 m-auto flex justify-between mt-16 p-5'>
            <button className='p-3 hover:bg-regal-blue  hover:text-white rounded-full bg-white text-[#000000]'>
              Hire freelancers
            </button>
            <button className='p-3 rounded-full text-[#fdfdfd] bg-regal-blue hover:text-[#000000] hover:bg-white'>
              Looking For Job
            </button>

        </div>
      </div>
      </div>
      

      <div className=' card rounded-lg bg-[#ffffff] shadow-inner w-11/12 m-auto flex flex-col mb-14 min-h-screen -mt-9 z-50'>
  <div className="flex justify-center mt-7">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">How it works</h2>
      <p className="text-gray-700 mb-2">1. Create an account and post your project</p>
      <p className="text-gray-700 mb-2">2. Review proposals from top freelancers and chat with them</p>
      <p className="text-gray-700 mb-2">3. Hire your preferred freelancer and pay securely through our platform</p>
    </div>
  </div>
  <div className=' line-through'></div>
</div>

    </div>
  );
};

export default LandingPage;
