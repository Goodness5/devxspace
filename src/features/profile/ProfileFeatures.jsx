import React from 'react'
import Banner from './component/Banner'
import ProfileDashboard from './component/ProfileDashboard'
import { useAccount } from 'wagmi'

const ProfileFeatures = () => {
  const {address} = useAccount()
  return (
    <div className='bg-[#EFF2F9] relative'>
        <Banner/>
        <ProfileDashboard/>
        
    </div>
  )
}

export default ProfileFeatures