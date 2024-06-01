import React, { useRef } from 'react'
import { leadersInHealthSector } from '../../utils/Data'
import LeadersCard from '../../components/LeadersCard'

function OurLeadersSection() {

    const linkRef = useRef(null)
    const contentRef = useRef(null)
  
    const handleTapSwitch = e => {
      const tab = e.target
      const childrenNodes = Array.from(linkRef.current.children)
      const contentChildren = Array.from(contentRef.current.children)
  
      childrenNodes.forEach(element => {
        if (tab.id === element.id) {
          element.classList.add('active-tab')
  
        } else {
          element.classList.remove('active-tab')
        }
      });
      contentChildren.forEach(element => {
        if (String(element.id).includes(tab.id)) {
          if (Array.from(element.classList).join(' ').includes('hidden')) {
            element.classList.remove('hidden')
            element.classList.add('grid')
          }
        } else {
          if (Array.from(element.classList).join(' ').includes('grid')) {
            element.classList.remove('grid')
          }
          element.classList.add('hidden')
        }
      });
    }

    return (
        <section className='flex flex-col md:gap-20 gap-14 px-4 md:px-6 md:pt-14'>

            <div className='flex flex-col gap-3 text-center md:self-center md:mx-10 lg:mx-0 max-w-[854px]'>
                <span className='text-[#346ed6] md:text-lg text-base font-medium leading-[27px]'>
                    Leadership in Healthcare Innovation
                </span>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-3xl md:text-[40px] md:leading-[48.76px] font-bold font-Montserrat'>Meet Our Leaders</h2>
                    <p className='text-[#505673] text-base'>
                        Embark on a journey to discover the expertise and dedication driving our commitment to revolutionizing telehealth. Explore the visionary minds behind our mission to create a healthier tomorrow through innovative virtual connections and personalized care.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-14 md:gap-20  '>
                <header className='flex md:justify-center'>
                    <nav
                        className='flex gap-2 md:gap-4 lg:gap-6 p-4 border border-[#edeff2] rounded-[20px] md:w-[90%] max-w-[920px] overflow-x-auto'
                        onClick={handleTapSwitch}
                        ref={linkRef}
                    >
                        <button className=' rounded-xl border border-[#edeff2] py-3.5 lg:py-6 px-14 flex-1 basis-28 leading-7 font-medium text-xs font-PublicSans outline-none active:bg-[#346ed6] lg:text-sm active-tab' id='tab1' >All</button>
                        <button className=' rounded-xl border border-[#edeff2] py-3.5 lg:py-6 px-14 flex-1 basis-28 leading-7 font-medium text-xs font-PublicSans outline-none active:bg-[#346ed6] lg:text-sm' id='tab2' >Board&nbsp;of&nbsp;Directors</button>
                        <button className=' rounded-xl border border-[#edeff2] py-3.5 lg:py-6 px-14 flex-1 basis-28 leading-7 font-medium text-xs font-PublicSans outline-none active:bg-[#346ed6] lg:text-sm' id='tab3' >Board&nbsp;Advisors</button>
                        <button className=' rounded-xl border border-[#edeff2] py-3.5 lg:py-6 px-14 flex-1 basis-28 leading-7 font-medium text-xs font-PublicSans outline-none active:bg-[#346ed6] lg:text-sm' id='tab4' >Management&nbsp;Team</button>
                    </nav>
                </header>

                <div className="content-wrapper" ref={contentRef}>
                    <div id="tab1-content" className="grid grid-cols-1 gap-14 md:grid-cols-2">
                        {
                            leadersInHealthSector.map(person => (
                                <LeadersCard key={person.id} {...person} />
                            ))
                        }
                    </div>
                    <div id="tab2-content" className="hidden grid-cols-1 gap-14 md:grid-cols-2">
                        {
                            leadersInHealthSector.filter(person => person.category === "directors").map(person => (
                                <LeadersCard key={person.id} {...person} />
                            ))
                        }
                    </div>
                    <div id="tab3-content" className="hidden grid-cols-1 gap-14 md:grid-cols-2">
                        {
                            leadersInHealthSector.filter(person => person.category === "advisor").map(person => (
                                <LeadersCard key={person.id} {...person} />
                            ))
                        }
                    </div>
                    <div id="tab4-content" className="hidden grid-cols-1 gap-14 md:grid-cols-2">
                        {
                            leadersInHealthSector.filter(person => person.category === "team").map(person => (
                                <LeadersCard key={person.id} {...person} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OurLeadersSection