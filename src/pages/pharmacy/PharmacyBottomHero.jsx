import React from 'react'
import FooterHero from '../../components/FooterHero'
import Images from '../../utils/Images'

const PharmacyBottomHero = () => {
  return (
    <div className="w-[90%] mt-10 mb-10 mx-auto">
    <FooterHero
      headerText="Ready to Experience Hassle-Free Medication Access?"
      smallText="Connect with us now to discover the ease of accessing your prescribed medications through our pharmacy partnerships. Your convenience and well-being are our top priorities. Join Mobihealth today!"
      btnText="Get started now"
      bgImage={Images.Pharmacist}
      bgImageSmall={Images.PharmacistMobile}
    />
  </div>
  )
}

export default PharmacyBottomHero