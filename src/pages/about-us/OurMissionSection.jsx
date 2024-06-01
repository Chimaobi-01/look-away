import React from 'react'
import WhoWeAre from './WhoWeAre'
import BenefitsToOrganizations from './BenefitsToOrganizations'

function OurMissionSection() {
    return (
        <section className='flex flex-col md:gap-20 gap-6'>

            <div className="flex flex-col gap-3 text-center items-center px-4 md:px-6 py-10 max-w-[684px] self-center">
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl md:text-[40px] md:leading-[48.76px] font-Montserrat font-bold'>Our Mission</h1>
                    <p className='text-[#505673] text-base md:text-xl lg:text-2xl font-normal font-PublicSans'>
                        To bring affordable, quality healthcare within the reach of everyone leveraging technology.
                    </p>
                </div>
            </div>

            <WhoWeAre />
            <BenefitsToOrganizations />

        </section>
    )
}

export default OurMissionSection