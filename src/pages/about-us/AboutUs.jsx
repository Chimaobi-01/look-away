import React from 'react'
import img1 from '../../assets/about-us/group-photo.png'
import img2 from '../../assets/about-us/patient.png'
import img3 from '../../assets/about-us/smiling-doctor.png'

const AboutUs = () => {
  console.log('AboutUs')
  return (
    <div>
      <section className="objective">
        <div>
          <h1>
            <span>About us</span>
            Our Objective, Your Health
          </h1>
          <p>
            At Mobihealth, we are on a mission to revolutionize healthcare and provide quality medical services to individuals around the globe. Our commitment to your health drives every decision we make.
          </p>
          <p>
            Mobihealth Telemedicine platform provides a 24-hour access to a panel of top-notch doctors across all specialties from all around the world
          </p>
        </div>
        <div>
          <img src={img1} alt="team group photo" />
        </div>
      </section>
      <section className="mission">
        <div>
          <h2> Our Mission</h2>
          <p>To bring affordable, quality healthcare within the reach of everyone leveraging technology.</p>
        </div>
        <div>
          <img src={img3} alt="A smiling doctor" />
          <div>
            <span>Discover our Identity</span>
            <h2>who we are</h2>
            <div>
              <p>Multi-Award winning Mobihealth is Africa's first fully integrated Telehealth Company providing one stop portal for users' healthcare needs globally. </p>
              <p>Mobihealth telemedicine app gives users 24/7 access to over 100k medical experts from the US, UK, Nigeria and other carefully selected countries of the world within minutes for video consultations, investigation, prescription, treatment and referrals at the convenience of patient's.</p>
              <p>Mobihealth aims to bridge global healthcare needs and addresses multiple pain points; Inadequate healthcare workforce, poor/lack of healthcare infrastructures, limited access to private/public health insurance, medical tourism, exposure to counterfeit medicines, unqualified personnel & high costs of treatments, especially in developing countries. </p>
              <p>Mobihealth is a proud recipient of the Sanofi's AfricaTech Healthcare Challenge 2020 Awards, the first Nigerian Start-up to win the award</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default AboutUs