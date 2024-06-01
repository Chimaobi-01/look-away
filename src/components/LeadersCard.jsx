import React from 'react'
import arrow from '../assets/about-us/arrow.svg'

const LeadersCard = ({ name, image, position }) => (
    <article className='font-PublicSans rounded-3xl border flex flex-col h-[579px] border-[#e5efff]'>
        <img
            src={image}
            alt="name"
            className=' rounded-tr-3xl rounded-tl-3xl object-cover w-auto h-[66.7%]'
        />

        <div className='text-center flex flex-col justify-center gap-1 flex-[22.9%] px-4'>
            <p className="titled-name font-medium text-xl text-[#333]">{name}</p>
            <span className="position text-sm text-[#505673]">{position}</span>
        </div>

        <a
            href='#'
            className='px-4 flex items-center justify-center gap-2 text-[#346ed6] text-base flex-[10.3%]'
        >
            View full bio
            <img src={arrow} alt="icon" />
        </a>
    </article>
)

export default LeadersCard