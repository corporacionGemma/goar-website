import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  src: string
  title: string
  description: string
  subtitle: string
}
const FeaturedInfo: React.FC<Props> = ({ src, title, description, subtitle }) => {
  const item = {
    rest: { y: 0 },
    onHover: {
      y: -10,
      transition: {
        ease: 'linear',
        duration: 0.3
      }
    }
  }
  return (
    <motion.div
      initial='rest'
      whileHover='onHover'
      className='w-full h-full relative border-tertiary-border border-[1px] border-b-0'
      >
      <div className=' w-full h-full flex flex-col justify-center px-5 pt-[38px] text-center pb-[33px]'>
        <motion.div
          variants={item}
          className='flex justify-center'>
          <img src={src} alt={title} width={100} />
        </motion.div>
        <div className='flex flex-col mt-[17px]'>
          <h5 className='text-[#565969] text-[12px] leading-[2.33em] tracking-[.1em] uppercase font-[500]'>{subtitle}</h5>
          <h4 className='text-secondary-text text-[26px] leading-[1em] font-[700]'>{title}</h4>
          <p className='pt-[14px] text-[18px] font-[400]'>{description}</p>
        </div>
        <span className=' absolute h-[4px] w-full bg-primary bottom-0 left-0'></span>
      </div>
    </motion.div>
  )
}

export default FeaturedInfo
