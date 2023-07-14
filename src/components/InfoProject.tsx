import React from 'react'

interface Props {
  src: string
  height: number
  width: number
  subtitle: string
  title: string
  description: string
}

const InfoPorject: React.FC<Props> = ({ src, height, width, subtitle, title, description }) => {
  return (
    <div className='w-auto flex flex-col items-center md:items-start'>
      <img src={src} alt={title} height={height} width={width} />
      <div className='text-white mt-[16px]'>
        <h5 className='text-[12px] leading-[2.33em] tracking-[.1em] text-center sm:text-left font-[500]'>{subtitle}</h5>
        <h2 className='font-[700] text-[26px] leading-[1.15em] text-center sm:text-left'>{title}</h2>
        <p className='mt-[14px] font-[400] text-[18px] pr-0 text-center sm:text-left sm:pr-[20px] md:pr-[70px]'>{description}</p>
      </div>
    </div>
  )
}

export default InfoPorject
