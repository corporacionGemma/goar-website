import React from 'react'

interface Props {
  title: string
}

const FooterTitle: React.FC<Props> = ({ title }) => {
  return (
    <h4 className='mt-[25px] mb-[3px] text-white text-[26px] leading-[1.15em] font-[500] break-words'>{title}</h4>
  )
}

export default FooterTitle
