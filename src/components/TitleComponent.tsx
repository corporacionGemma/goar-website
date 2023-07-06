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
    <div className='h-[247px] w-full z-[5] relative pt-[142px] pl-[130px]  uppercase'>
      <motion.span initial="hidden" whileInView="onScreen" variants={title} viewport={{ once: true, amount: 0.5 }} className={`${classNameDescription} absolute -z-[1] text-[180px] leading-[170px] font-[900] ${bottom} left-[60px]`}>{description}</motion.span>
      {
        animationTitle
          ? (
          <motion.div initial="hidden" whileInView="onScreen" variants={titleItem} viewport={{ once: true, amount: 0.7 }} className='flex flex-col'>
            <h6 className={`text-[16px] pl-1 tracking-[.02em] uppercase ${colorText} font-[500]`}>{subtitle}</h6>
            <h2 className={`text-[80px] z-[2]  leading-[1em] tracking-[-0.01em] font-[900] ${colorText}`}>{text}</h2>
          </motion.div>
            )
          : (
          <h2 className={`text-[80px] z-[2] mt-[25px] leading-[1em] tracking-[-0.01em] font-[900] ${colorText}`}>{text}</h2>
            )
      }
    </div>
  )
}

export default TitleComponent
