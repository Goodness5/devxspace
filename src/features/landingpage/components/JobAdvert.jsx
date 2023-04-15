import React from 'react'
import AvailableJobs from './AvailableJobs'
import userDetails from '../../../utils/freelancerDetails'

const JobAdvert = () => {
  return (
    <section className=''>
        <h4 className="text-[32px] font-bold pt-4 tablet:text-[24px] text-center ">Available Job Listed</h4>
        <div className="flex flex-wrap gap-6 w-[94%] mx-auto mt-10 mb-10 lgDesktop:gap-10">

        {
userDetails.map((e)=>(

    <AvailableJobs
      key={e.id}
      skill = {e.skill}
      price = {e.price}
      />
))
        }
        </div>
    </section>
  )
}

export default JobAdvert