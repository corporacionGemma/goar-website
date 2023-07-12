import React from 'react'
import { motion } from 'framer-motion'
import { NavBar } from '..'

const HeaderFix: React.FC = () => {
  const item = {
    hidden: {
      height: 0
    },
    onScreen: {
      height: 70,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'linear'
      }
    }
  }
  return (
    <motion.div animate="onScreen" exit="exit" initial="hidden" variants={item} className={'w-full h-[70px] hidden lg:block fixed left-0 top-0 overflow-hidden headerFix bg-white z-20'}>
      <NavBar positionClass=''/>
    </motion.div>
  )
}

export default HeaderFix
