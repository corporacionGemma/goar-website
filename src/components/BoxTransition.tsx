import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  children?: React.ReactNode
}

const BoxTransition: React.FC<Props> = ({ children }) => {
  const item = {
    hidden: {
      width: 1,
      opacity: 0
    },
    onScreen: {
      width: '100%',
      opacity: 1,
      transition: {
        // type: 'spring',
        ease: 'easeInOut',
        duration: 1,
        opacity: { duration: 0.2 }
        // bounce: 0
      }
    }
  }
  const item1 = {
    hidden: {
      width: 1,
      opacity: 0
    },
    onScreen: {
      width: '100%',
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 1,
        opacity: { duration: 0.2 },
        delay: 0.5
      }
    }
  }
  return (
    <div className='w-[500px] z-[5] h-[450px] overflow-hidden relative bg-yellow-100'>
      <motion.div
        initial="hidden"
        whileInView="onScreen"
        variants={item}
        viewport={{ amount: 1 }}
        className='h-full w-full bg-primary absolute left-0 top-0 -z-[1]'></motion.div>
      <motion.div
        initial="hidden"
        whileInView="onScreen"
        variants={item1}
        viewport={{ amount: 1 }}
        className='h-full w-full bg-secondary-color absolute left-0 top-0 z-[1]'></motion.div>
    </div>
  )
}

export default BoxTransition
