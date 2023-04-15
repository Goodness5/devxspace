import React from 'react'
import LandingPage from './components/LandingPage'
import JobAdvert from './components/JobAdvert'
import HowItWorks from './components/HowItWorks'
import Started from './components/Started'

const LandingFeatures = () => {
  return (
    <div>
       <LandingPage/>
       <HowItWorks/>
       <Started />
       <JobAdvert/>
    </div>
  )
}

export default LandingFeatures