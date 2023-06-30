import React from 'react'
import CopySection from './CopySection'
import FooterInfo from './FooterInfo'
const Footer: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-tertiary-footerColor text-white">
      <FooterInfo/>
      <CopySection/>
    </div>
  )
}

export default Footer
