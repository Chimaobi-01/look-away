import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Diagnosis from '../pages/diagnosis/Diagnosis'
import AboutUs from '../pages/about-us/AboutUs'
import Partners from '../pages/partners/Partners'
import Pharmacy from '../pages/pharmacy/Pharmacy'
import Pricing from '../pages/pricing/Pricing'
import Emr from '../pages/emr/Emr'
import Privacy from '../pages/privacy-terms/Privacy'
import TeleConsultation from '../pages/teleconsultation/TeleConsultation'
import NotFound from '../pages/error/NotFound'
// import DemoAboutUs from '../pages/about-us/DemoAboutUs'

const OurRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/emr" element={<Emr />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/teleconsultation" element={<TeleConsultation />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default OurRoutes