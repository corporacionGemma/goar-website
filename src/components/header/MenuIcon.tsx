import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  cb: () => void
  isOpen: boolean
}
const MenuIcon: React.FC<Props> = ({ cb, isOpen }) => {
  const variant1 = {
    rest: {
      width: '50%'
    },
    active: {
      width: '100%',
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  }
  const variant2 = {
    rest: {
      width: '50%'
    },
    active: {
      width: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <motion.div
      initial="rest"
      whileHover="active"
      // whileTap="active"
      className='flex justify-center items-center bg-primary lg:hidden w-[70px] h-[70px]'
      onClick={cb}
      >
      <div className='w-[18px] bg-primary flex flex-col gap-1'>
        <motion.span variants={variant1} className='h-[2px] bg-white rounded'></motion.span>
        <span className='h-[3px] bg-white rounded w-full'></span>
        <div className='bg-white h-[2px]'>
          <motion.span variants={variant2} className='h-[2px] bg-primary rounded block'></motion.span>
        </div>
      </div>
    </motion.div>
  )
}

export default MenuIcon
