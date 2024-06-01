import React from 'react'
import img2 from '../../assets/about-us/cool-patient.png'


const BenefitsToOrganizations = () => {
    return (
        <div className=" flex flex-col md:grid md:grid-cols-2 font-PublicSans py-10 px-4 md:px-6 md:gap-10 gap-16">

            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-3'>
                    <span className='text-[#346ed6] lg:text-lg text-base font-medium leading-[27px]'>What we bring to the table</span>
                    <h2 className='text-3xl lg:text-4xl font-bold font-Montserrat capitalize'>benefits to orgainzations</h2>
                </div>
                <ul className='text-[#505673] lg:text-lg text-sm font-normal flex flex-col gap-3'>
                    <li className='list-item relative pl-7'>Quick Access and Convenience to top-notch medical experts in Nigeria</li>
                    <li className='list-item relative pl-7'>Low cost: Basic plans for $10 pa and $35 pm for premium access to medical experts globally.</li>
                    <li className='list-item relative pl-7'>Cost savings to employer, employees and customers</li>
                    <li className='list-item relative pl-7'>Value-ad to existing and new customers</li>
                    <li className='list-item relative pl-7'>Value-ad to employees, boosts productivity and morale</li>
                    <li className='list-item relative pl-7'>Additional revenue stream from the commissions on referrals/sales</li>
                    <li className='list-item relative pl-7'>Position your organisation at the forefront of digital health revolution</li>
                    <li className='list-item relative pl-7'>Supporting SDG Goals of the United Nations</li>
                    <li className='list-item relative pl-7'>Reduced burden of diseases</li>
                </ul>
            </div>

            <img
                src={img2} alt="A calm patient recieving treatment"
                className='shrink-0 object-cover rounded-3xl image-shadow min-h-[270px] md:h-[98%]'
            />
        </div>
    )
}

export default BenefitsToOrganizations