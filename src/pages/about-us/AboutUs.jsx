import React from 'react'
import './about-us.css'
import OurObjectiveSection from './OurObjectiveSection'
import OurMissionSection from './OurMissionSection'
import OurLeadersSection from './OurLeadersSection'


function AboutUs() {


  return (
    <div className='container mx-auto md:my-14 min-h-screen flex flex-col md:gap-20 gap-6'>
      <OurObjectiveSection />
      <OurMissionSection />
      <OurLeadersSection />
    </div>
  )
}

export default AboutUs