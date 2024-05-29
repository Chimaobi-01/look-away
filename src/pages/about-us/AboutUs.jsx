import React, { useRef } from 'react'
import './about-us.css'
import img1 from '../../assets/about-us/group.png'
import img2 from '../../assets/about-us/cool-patient.png'
import img3 from '../../assets/about-us/doctor.png'
import arrow from '../../assets/about-us/arrow.svg'
import leader1 from '../../assets/about-us/leader1.png'
import leader2 from '../../assets/about-us/leader2.png'
import leader3 from '../../assets/about-us/leader3.png'
import leader4 from '../../assets/about-us/leader4.png'
import leader5 from '../../assets/about-us/leader5.png'
import leader6 from '../../assets/about-us/leader6.png'
import leader7 from '../../assets/about-us/leader7.png'



const AboutUs = () => {
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
        if(Array.from(element.classList).join(' ').includes('hidden')){
          element.classList.remove('hidden')
          element.classList.add('grid')
        }
      } else {
        if(Array.from(element.classList).join(' ').includes('grid')){
          element.classList.remove('grid')
        }
        element.classList.add('hidden')
      }
    });
  }

  console.log('AboutUs')
  return (
    <div className='p-4 md:p-6'>
      <section className="objective flex flex-col min-h-screen text-center font-PublicSans py-10 gap-10 md:gap-20">

        <div className='flex-1 flex flex-col gap-4 md:self-center md:w-5/6'>
          <span className='text-[#346ed6] font-medium leading-[27px]'>About us</span>
          <h1 className='text-3xl font-bold font-Montserrat'>Our Objective, Your Health</h1>
          <div className='text-[#505673] flex flex-col gap-4'>
            <p>
              At Mobihealth, we are on a mission to revolutionize healthcare and provide quality medical services to individuals around the globe. Our commitment to your health drives every decision we make.
            </p>
            <p>
              Mobihealth Telemedicine platform provides a 24-hour access to a panel of top-notch doctors across all specialties from all around the world
            </p>
          </div>
        </div>

        <img className='shrink-0 object-cover rounded-xl min-h-[280px]' src={img1} alt="team group photo" />

      </section>



      <section className="mission flex flex-col min-h-screen font-PublicSans py-10 gap-10 md:gap-20">

        <div className='text-center flex flex-col gap-4 md:self-center md:w-4/6'>
          <h2 className='text-3xl font-bold font-Montserrat'> Our Mission</h2>
          <p className='text-[#505673]'>To bring affordable, quality healthcare within the reach of everyone leveraging technology.</p>
        </div>

        <div className='flex flex-col-reverse md:grid md:grid-cols-2 py-4 gap-10'>

          <img src={img3} alt="A smiling doctor" className='shrink-0 object-cover rounded-xl min-h-[280px] image-shadow md:min-h-0 md:h-[97%]' />

          <div className='flex-1 flex flex-col gap-4'>
            <div className='text-center flex flex-col gap-2 mb-2'>
              <span className='text-[#346ed6] font-medium leading-[27px]'>Discover our Identity</span>
              <h2 className='text-3xl font-bold font-Montserrat'>Who we are</h2>
            </div>
            <div className='text-[#505673] flex flex-col gap-4'>
              <p>Multi-Award winning Mobihealth is Africa's first fully integrated Telehealth Company providing one stop portal for users' healthcare needs globally. </p>
              <p>Mobihealth telemedicine app gives users 24/7 access to over 100k medical experts from the US, UK, Nigeria and other carefully selected countries of the world within minutes for video consultations, investigation, prescription, treatment and referrals at the convenience of patient's.</p>
              <p>Mobihealth aims to bridge global healthcare needs and addresses multiple pain points; Inadequate healthcare workforce, poor/lack of healthcare infrastructures, limited access to private/public health insurance, medical tourism, exposure to counterfeit medicines, unqualified personnel & high costs of treatments, especially in developing countries. </p>
              <p>Mobihealth is a proud recipient of the Sanofi's AfricaTech Healthcare Challenge 2020 Awards, the first Nigerian Start-up to win the award</p>
            </div>
          </div>

        </div>

      </section>


      <section className="benefits flex flex-col md:grid md:grid-cols-2 md:justify-between min-h-screen font-PublicSans py-10 gap-10">

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4'>
            <span className='text-[#346ed6] font-medium leading-[27px]'>What we bring to the table</span>
            <h2 className='text-3xl font-bold font-Montserrat capitalize'>benefits to orgainzations</h2>
          </div>
          <ul className='text-[#505673] text-lg flex flex-col gap-4'>
            <ListItem text={'Quick Access and Convenience to top-notch medical experts in Nigeria'} />
            <ListItem text={'Low cost: Basic plans for $10 pa and $35 pm for premium access to medical experts globally.'} />
            <ListItem text={'Cost savings to employer, employees and customers'} />
            <ListItem text={'Value-ad to existing and new customers'} />
            <ListItem text={'Value-ad to employees, boosts productivity and morale'} />
            <ListItem text={'Additional revenue stream from the commissions on referrals/sales'} />
            <ListItem text={'Position your organisation at the forefront of digital health revolution'} />
            <ListItem text={'Supporting SDG Goals of the United Nations'} />
            <ListItem text={'Reduced burden of diseases'} />
          </ul>
        </div>

        <img 
          src={img2} alt="A calm patient recieving treatment" 
          className='shrink-0 object-cover rounded-xl image-shadow min-h-[270px] md:h-[97%]'
         />
      </section>

      <section className="leaders flex flex-col gap-[60px] md:gap-20 py-10">

        <div className='flex flex-col gap-4 text-center md:self-center md:w-5/6'>
          <span className='text-[#346ed6] font-medium leading-[27px]'>Leadership in Healthcare Innovation</span>
          <h2 className='text-3xl font-bold font-Montserrat'>Meet Our Leaders</h2>
          <p className='text-[#505673]'>
            Embark on a journey to discover the expertise and dedication driving our commitment to revolutionizing telehealth. Explore the visionary minds behind our mission to create a healthier tomorrow through innovative virtual connections and personalized care.
          </p>
        </div>

        <div className='flex flex-col gap-14 '>
          <header className='overflow-auto flex md:justify-center'>
            <nav
              className='flex gap-3 p-4 flex-1 border rounded-xl md:flex-none'
              onClick={handleTapSwitch}
              ref={linkRef}
            >
              <a className='text-[.63rem] leading-7 flex items-center justify-center border rounded-xl h-14 w-[100px] active-tab'
                href="#tab2" id='tab1' >All</a>
              <a className='text-[.63rem] leading-7 flex items-center justify-center border rounded-xl h-14 w-[100px]'
                href="#tab2" id='tab2' >Board&nbsp;of&nbsp;Directors</a>
              <a className='text-[.63rem] leading-7 flex items-center justify-center border rounded-xl h-14 w-[100px]'
                href="#tab3" id='tab3' >Board&nbsp;Advisors</a>
              <a className='text-[.63rem] leading-7 flex items-center justify-center border rounded-xl h-14 w-[100px]'
                href="#tab4" id='tab4' >Management&nbsp;Team</a>
            </nav>
          </header>
          <div className="content-wrapper" ref={contentRef}>
            <div id="tab1-content" className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {
                leadersInHealthScetor.map(person => (
                  <LeadersCard key={person.id} {...person} />
                ))
              }
            </div>
            <div id="tab2-content" className="hidden grid-cols-1 gap-10 md:grid-cols-2">
              {
                leadersInHealthScetor.filter(person => person.category === "directors").map(person => (
                  <LeadersCard key={person.id} {...person} />
                ))
              }
            </div>
            <div id="tab3-content" className="hidden grid-cols-1 gap-10 md:grid-cols-2">
              {
                leadersInHealthScetor.filter(person => person.category === "advisor").map(person => (
                  <LeadersCard key={person.id} {...person} />
                ))
              }
            </div>
            <div id="tab4-content" className="hidden grid-cols-1 gap-10 md:grid-cols-2">
              {
                leadersInHealthScetor.filter(person => person.category === "team").map(person => (
                  <LeadersCard key={person.id} {...person} />
                ))
              }
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutUs

const ListItem = ({ text }) => (
  <li className='list-item relative pl-6'>{text}</li>
)

const LeadersCard = ({ name, image, position }) => (
  <figure className='flex flex-col rounded-3xl border border-[#e5efff] h-[570px]'>
    <div className='flex-1'>
      <img src={image} alt="name" className='flex-shrink-0 rounded-tr-3xl rounded-tl-3xl object-cover w-full h-full' />
    </div>
    <figcaption className='font-PublicSans '>
      <div className='pt-6 pb-4 px-2 text-center flex flex-col gap-2'>
        <p className="titled-name font-medium text-xl text-[#333]">{name}</p>
        <span className="position text-sm text-[#505673]">{position}</span>
      </div>
      <a href='#' className='pt-4 pb-6 px-3 flex items-center justify-center gap-2 text-[#346ed6] text-base'>
        View full bio
        <img src={arrow} alt="icon" />
      </a>
    </figcaption>
  </figure>
)

const leadersInHealthScetor = [
  {
    name: "High Highness. Alhaji Nasir Ado Bayero, Emir of Bichi Emirate, Kano ",
    position: "Chairman",
    image: leader1,
    category:"directors",
    id: 1
  },
  {
    name: "Dr.  Funmi Adewara, M.D, MPhil (Cambridge)",
    position: "Founder, Executive Director",
    image: leader5,
    category:"directors",
    id: 2
  },
  {
    name: "Prof. Jay H. Sanders ",
    position: "M.D., F.A.C.P., F.A.C.A.A.I., FATA",
    image: leader4,
    category:"advisor",
    id: 3
  },
  {
    name: "Dr Jide Agunbiade",
    position: "Phd, MBA, FNSE",
    image: leader3,
    category:"advisor",
    id: 4
  },
  {
    name: "Dr. Charles Ononiwu, FWACS, FICS, MBA",
    position: "Medical Advisor-Director",
    image: leader2,
    category:"team",
    id: 5
  },
  {
    name: " Mr. Ade Adefeko ",
    position: "",
    image: leader7,
    category:"team",
    id: 6
  },
  {
    name: "Dr. Charles Ononiwu, FWACS, FICS, MBA",
    position: "",
    image: leader6,
    category:"team",
    id: 7
  },
]