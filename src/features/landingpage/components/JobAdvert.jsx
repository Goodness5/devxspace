import React from 'react'
import AvailableJobs from './AvailableJobs'
import userDetails from '../../../utils/freelancerDetails'

const JobAdvert = () => {
  return (
    <section className=''>
        <h4 className="text-[32px] font-bold pt-4 text-center">Available Job Listed</h4>
        <div className="flex gap-10 w-[94%] mx-auto">

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