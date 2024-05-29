import React from 'react'
import './partners.css'
import Images, { awards, ourClients, partnered } from '../../utils/Images'

const Partners = () => {
  return (
    <div className='flex flex-col gap-20 p-3 md:pt-24 md:px-6 md:container md:mx-auto'>

      <header className="flex flex-col gap-3 text-center items-center">
        <span className='text-[#346ED6] text-base md:text-lg font-medium font-PublicSans'>Building Bridges to Better Healthcare</span>
        <div className='flex flex-col gap-4 max-w-[800px]'>
          <h1 className='text-3xl md:text-5xl font-Montserrat font-bold'>Our Trusted Partners</h1>
          <p className='text-[#505673] text-base font-normal font-PublicSans'>Collaborating for Better Health: Explore the Organizations and Companies Empowering Mobihealth International to Deliver Cutting-Edge Telehealth Solutions Worldwide.</p>
        </div>
      </header>

      <section className="partners flex flex-col gap-10">

        <section className='flex flex-col gap-10'>
          <div className='flex flex-col gap-3 text-center'>
            <span className='text-[#346ED6] md:text-lg text-base font-medium font-PublicSans'>Our Clients</span>
            <h2 className='text-3xl md:text-4xl font-Montserrat font-bold'>Funding & Technical Partners</h2>
          </div>
          <div className='container mx-auto flex gap-4 flex-wrap centralize p-2 xl:p-8'>
            {
              ourClients.map((img,i) => (
                <img key={i} src={img} className='grid-item' />
              ))
            }
          </div>
        </section>

        <section className='flex flex-col gap-10'>
          <div className='flex flex-col gap-3 text-center'>
            <span className='text-[#346ED6] text-base md:text-lg font-medium font-PublicSans'>Partnered healthcares</span>
            <h2 className='text-3xl md:text-4xl font-Montserrat font-bold'>Partner Medical Service Provider</h2>
          </div>
          <div className='container mx-auto flex gap-4 flex-wrap centralize p-2 xl:p-8'>
            {
              partnered.map((img,i) => (
                <img key={i} src={img} className='grid-item' />
              ))
            }
          </div>
        </section>

        <section className='flex flex-col gap-10'>
          <div className='flex flex-col gap-3 text-center'>
            <span className='text-[#346ED6] text-base md:text-lg font-medium font-PublicSans'>Celebrating Excellence and Achievement</span>
            <h2 className='text-3xl md:text-4xl font-Montserrat font-bold'>Awards and Recognition</h2>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='container mx-auto flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-5 xl:gap-10 justify-center items-center'>
              <img src={Images.award1} alt="award" />
              <img src={Images.award2} alt="award" />
              <img src={Images.award3} alt="award" />
            </div>
            <div className='container mx-auto flex gap-4 flex-wrap centralize p-2 xl:p-8'>
              {
                awards.map((img,i)=> (
                  <img key={i} src={img} className='grid-item'/>
                ))
              }
            </div>
          </div>
        </section>

      </section>
    </div>
  )
}

export default Partners