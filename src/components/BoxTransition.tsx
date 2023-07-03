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
        ease: [0.86, 0, 0.08, 1],
        duration: 0.8,
        opacity: { duration: 0.2 }
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
        ease: [0.86, 0, 0.07, 1],
        duration: 0.8,
        opacity: { duration: 0.2 },
        delay: 0.4
      }
    }
  }
  const item2 = {
    hidden: {
      width: 1,
      opacity: 0
    },
    onScreen: {
      width: '100%',
      opacity: 1,
      transition: {
        ease: [0.86, 0, 0.07, 1],
        duration: 0.8,
        opacity: { duration: 0.2 },
        delay: 1
      }
    }
  }
  return (
    <div className='w-full  z-[5] h-max relative'>
      <motion.div
        initial="hidden"
        whileInView="onScreen"
        variants={item}
        viewport={{ amount: 1, once: true }}
        className='h-full w-full bg-primary absolute left-0 top-0 -z-[1]'></motion.div>
      <motion.div
        initial="hidden"
        whileInView="onScreen"
        variants={item1}
        viewport={{ amount: 1, once: true }}
        className='h-full w-full bg-secondary-color absolute left-0 top-0 z-[1]'></motion.div>
      <motion.div
        initial="hidden"
        whileInView="onScreen"
        variants={item2}
        viewport={{ amount: 1, once: true }}
        className=' w-full h-full relative left-0 top-0 z-[1] bg-red-50'>
          {children}
        </motion.div>
    </div>
  )
}

export default BoxTransition
