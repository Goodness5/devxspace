import React from 'react'
import Featured from './Featured'
import userDetails from '../../../utils/freelancerDetails'

const FeauturedOffer = () => {
  return (
    <section className=''>
        <h3 className="text-[32px] text-[] mt-4 text-center font-bold">Featured Offer</h3>

        <div className="flex gap-10 mx-10">
{
    userDetails.slice(0,4).map((e)=>(

        <Featured
        key={e.id}
        imgSrc={e.image}
        avatar={e.avatar}
        username={e.username}
        order = {e.order}
        skill = {e.skill}
        price = {e.price}
        />
    ))
}
        </div>
    </section>
  )
}

export default FeauturedOffer