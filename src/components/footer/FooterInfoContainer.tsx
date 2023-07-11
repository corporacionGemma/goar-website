import React from 'react'

interface Props {
  children: React.ReactNode
}
const FooterInfoContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className='px-8 sm:px-[15px] w-full sm:w-[450px] md:w-auto'>{children}</div>
  )
}

export default FooterInfoContainer
