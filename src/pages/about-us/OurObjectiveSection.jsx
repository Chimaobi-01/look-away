import React from 'react'
import img1 from '../../assets/about-us/group.png'


function OurObjectiveSection() {
    return (
        <section className='flex flex-col md:gap-20 gap-6'>
            <div className="flex flex-col gap-3 text-center items-center py-6 px-[18px] md:mx-10 lg:mx-0 md:px-6 max-w-[854px] self-center">
                <span className='text-[#346ED6] text-base lg:text-lg font-medium font-PublicSans'>
                    About Us
                </span>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-3xl lg:text-5xl md:text-4xl font-Montserrat font-bold'>Our Objective, Your Health</h1>
                    <p className='text-[#505673] text-base font-normal font-PublicSans'>
                        At Mobihealth, we are on a mission to revolutionize healthcare and provide quality medical services to individuals around the globe. Our commitment to your health drives every decision we make.
                    </p>
                    <p className='text-[#505673] text-base font-normal font-PublicSans'>
                        Mobihealth Telemedicine platform provides a 24-hour access to a panel of top-notch doctors across all specialties from all around the world
                    </p>
                </div>
            </div>

            <img src={img1} alt="poster" className='mx-3 md:mx-6 rounded-3xl object-cover' />
        </section>
    )
}

export default OurObjectiveSection