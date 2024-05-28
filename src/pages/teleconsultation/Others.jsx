import React from 'react'
import CardText from '../../components/CardText'
import Images from '../../utils/Images'
const Others = () => {
  return (
    <div className='w-[98%] mx-auto'>
        <CardText 
            smallTitle="Adapting to the Changing Landscape"
            title="Telemedicine: Revolutionizing Primary Healthcare"
            content="Telehealth has revolutionized the delivery of primary healthcare now more than ever. Covid19 has compelled care receivers and providers to opt for telehealth services for safer and better patient care. Mobihealth is forging a path to overcome the healthcare challenges in underprivileged communities in Africa and globally. More than 80% of medical problems can be resolved through telemedicine."
            reverse={false}
            image={Images.ThreeDocs}
        />
        <CardText 
            smallTitle="Innovative Solutions for Diverse Settings"
            title="Telehealth Kiosks: Enhancing Healthcare Access Everywhere"
            content="Mobihealth offers versatile telehealth kiosks designed for various settings, providing seamless access to healthcare. These kiosks include an integrated portal for round-the-clock access to local and international medical experts, along with AI-Powered Point of Care diagnostic tools for vital signs and comprehensive physical examinations, ensuring convenient healthcare solutions."
            reverse={true}
            image={Images.Sample}
        />
         <CardText 
            smallTitle="Expanding Access Beyond Boundaries"
            title="Mobihealth Mobile Units: Bringing Healthcare to the Unreachable"
            content="Mobihealth's mobile units break through geographic barriers to serve rural and underserved areas, meeting diverse needs, from medical emergencies to corporate and sporting events. This outreach makes a tangible difference by providing healthcare access to those in need."
            reverse={false}
            image={Images.Ambulance}
        />
        <CardText 
            smallTitle="Equipped for Comprehensive Care"
            title="Advanced Features of Our Mobile Units"
            content={
                <span>
                    <p>Each mobile unit is equipped with:</p>
                    <ul  class="list-disc list-inside leading-relaxed">
                        <li>An Integrated Telehealth Portal, providing 24/7 access to local and international medical experts.</li>
                        <li>AI-Powered Point of Care remote Diagnostics, facilitating vital signs monitoring, comprehensive physical examinations, and ultrasound scans.</li>
                        <li>Complimentary 24/7 high-speed Internet connectivity.</li>
                        <li>Solar inverters for sustainable power supply.</li>
                        <li>Touchscreen smart boards/computers for efficient data handling.</li>
                        <li>Examination couch for patient comfort.</li>
                        <li>A mini laboratory and pharmacy for on-the-spot diagnostics and medication.</li>
                        <li>A printer for documentation needs.</li>
                        <li>Air conditioning for patient comfort.</li>
                        <li>An onsite health technician to ensure seamless care delivery.</li>
                    </ul>
                </span>
                    }
            reverse={true}
            image={Images.Check}
        />
    </div>
  )
}

export default Others