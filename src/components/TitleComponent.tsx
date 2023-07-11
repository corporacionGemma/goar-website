import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  text: string
  description: string
  colorText: string
  classNameDescription: string
  animationTitle?: boolean
  subtitle?: string
  bottom?: string
}

const TitleComponent: React.FC<Props> = ({ text, description, colorText, classNameDescription, animationTitle = false, subtitle = '', bottom = 'bottom-0' }) => {
  const title = {
    hidden: {
      opacity: 0,
      x: -20
    },
    onScreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.5
      }
    }
  }
  const titleItem = {
    hidden: {
      opacity: 0,
      y: 20
    },
    onScreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  }
  return (
    <div className='h-auto lg:h-[247px] w-full z-[5] relative  lg:pt-[142px]  uppercase'>
      <motion.span initial="hidden" whileInView="onScreen" variants={title} viewport={{ once: true, amount: 0.5 }} className={`${classNameDescription} hidden bg-red-300 lg:absolute -z-[1] text-[180px] leading-[170px] font-[900] ${bottom} left-[60px]`}>{description}</motion.span>
      {
        animationTitle
          ? (
          <motion.div initial="hidden" whileInView="onScreen" variants={titleItem} viewport={{ once: true, amount: 0.7 }} className='pl-0 sm:pl-[35px] lg:pl-[130px] flex flex-col pt-[50px] sm:pt-[100px]'>
            <h6 className={`text-[16px] pl-1 tracking-[.02em] uppercase ${colorText} font-[500]`}>{subtitle}</h6>
            <h2 className={`text-[45px] sm:text-[60px] md:text-[80px] z-[2]  leading-[1em] tracking-[-0.01em] font-[900] ${colorText}`}>{text}</h2>
          </motion.div>
            )
          : (
          <h2 className={`pl-[35px] lg:pl-[130px] pt-[100px] text-[45px] md:text-[80px] z-[2] mt-[25px] leading-[1em] tracking-[-0.01em] font-[900] ${colorText}`}>{text}</h2>
            )
      }
    </div>
  )
}

export default TitleComponent
