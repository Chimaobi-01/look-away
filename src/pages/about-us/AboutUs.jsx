import React from 'react'
import './about-us.css'
import OurObjectiveSection from './OurObjectiveSection'
import OurMissionSection from './OurMissionSection'
import OurLeadersSection from './OurLeadersSection'


function AboutUs() {


  return (
    <div className='container mx-auto my-14 min-h-screen flex flex-col gap-20'>
      <OurObjectiveSection />
      <OurMissionSection />
      <OurLeadersSection />
    </div>
  )
}

export default AboutUs