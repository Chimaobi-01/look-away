import React from 'react'
import img3 from '../../assets/about-us/doctor.png'


function WhoWeAre() {
    return (
        <div className='flex flex-col-reverse md:grid md:grid-cols-2 md:py-4 lg:py-10 px-4 md:px-6 gap-10 md:gap-8'>
            <img
                src={img3}
                alt="A smiling doctor"
                className='shrink-0 object-cover rounded-xl min-h-[280px] image-shadow md:min-h-0 md:h-[98%]'
            />

            <div className='flex-1 flex flex-col gap-4'>
                <div className='text-center md:text-left flex flex-col gap-2 mb-2'>
                    <span className='text-[#346ed6] lg:text-lg font-medium leading-[27px]'>Discover our Identity</span>
                    <h2 className='text-3xl lg:text-4xl font-bold font-Montserrat'>Who we are</h2>
                </div>
                <div className='text-[#505673] lg:text-lg flex flex-col gap-4'>
                    <p>Multi-Award winning Mobihealth is Africa's first fully integrated Telehealth Company providing one stop portal for users' healthcare needs globally. </p>
                    <p>Mobihealth telemedicine app gives users 24/7 access to over 100k medical experts from the US, UK, Nigeria and other carefully selected countries of the world within minutes for video consultations, investigation, prescription, treatment and referrals at the convenience of patient's.</p>
                    <p>Mobihealth aims to bridge global healthcare needs and addresses multiple pain points; Inadequate healthcare workforce, poor/lack of healthcare infrastructures, limited access to private/public health insurance, medical tourism, exposure to counterfeit medicines, unqualified personnel & high costs of treatments, especially in developing countries. </p>
                    <p>Mobihealth is a proud recipient of the Sanofi's AfricaTech Healthcare Challenge 2020 Awards, the first Nigerian Start-up to win the award</p>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre