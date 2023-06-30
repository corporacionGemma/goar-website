import React from 'react'

interface Props {
  children: React.ReactNode
}
const FooterInfoContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className='px-[15px]'>{children}</div>
  )
}

export default FooterInfoContainer
