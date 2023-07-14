import React from 'react'
import { motion } from 'framer-motion'
import { NavBar } from '..'
interface Props {
  isOpen?: boolean
  changeMenu?: () => void
}
const HeaderMobile: React.FC<Props> = ({ isOpen, changeMenu }) => {
  const item = {
    hidden: {
      height: 0
    },
    onScreen: {
      height: 70,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <motion.div animate="onScreen" exit="exit" initial="hidden" variants={item} className={'w-full h-[70px] fixed lg:hidden left-0 top-0 overflow-hidden headerFix bg-white z-20'}>
        <NavBar positionClass='fixed' isOpen={isOpen} openMenu={changeMenu}/>
      <div>
      </div>
    </motion.div>
  )
}

export default HeaderMobile
