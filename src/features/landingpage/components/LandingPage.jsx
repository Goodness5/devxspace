import React from 'react';
import Image from 'next/image';
import FeauturedOffer from './FeauturedOffer';
// import frelancer from '../../../images/frelancer.jpg';

const LandingPage = () => {
  return (
    <div className='flex flex-col bg-[#EFF2F9]'>
        <div className="bg-cover bg-center landing-top-img flex flex-col bg-[#000000]">
        
        <div className="text-center z-[1] m-auto flex flex-col mt-64">
          <h1 className="text-white text-[58px] font-bold">Welcome to devxspace</h1>
          <p className="text-white text-[24px]">This is a decentralized freelancing platform</p>

          <div className=' flex mx-auto gap-[20px] mt-[20px]'>
            <button className='pt-5 px-6 pb-5 text-[16px] hover:bg-[#052C5B]  hover:text-white rounded-full bg-white'>
              Hire Freelancers
            </button>
            <button className='pt-5 px-6 pb-5 text-[16px]  rounded-full text-[#FFFFFF] bg-[#052C5B] hover:text-[#000000] hover:bg-white'>
              Looking For Job
            </button>

        </div>
      </div>
      </div>
      

      <div className=' card rounded-lg bg-[#ffffff] shadow-inner w-11/12 m-auto flex flex-col mb-14 min-h-[440px] -mt-9 relative'>
 
<FeauturedOffer/>
 
</div>

    </div>
  );
};

export default LandingPage;
