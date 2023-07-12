import React, { useState } from 'react'
import ContactSection from './ContactSection'
import NavBar from './NavBar'
import { motion, AnimatePresence } from 'framer-motion'
import { HeaderFix } from '..'

interface Props {
  positionMobile: boolean
  position: boolean
}
const Header: React.FC<Props> = ({ positionMobile, position }) => {
  const navBarDesktop = {
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
  const Component = React.forwardRef<HTMLElement>(({ ...props }, ref) => (
    <NavBar navRef={ref} positionClass='fixed top-0 left-0' {...props} />
  ))
  Component.displayName = 'NabBarDesktop'

  const MotionComponent = motion(Component)
  const [menu, setMenu] = useState(false)
  const openMenu = (): void => {
    setMenu(!menu)
  }
  return (
    <header className='relative z-50 '>
      <ContactSection/>
      {/* <div className='hidden lg:block w-full'>
        <NavBar isOpen={menu} openMenu={openMenu}/>
      </div> */}
      <AnimatePresence>
        {position && (
            <MotionComponent/>
        )}
      </AnimatePresence>
        <NavBar isOpen={menu} openMenu={openMenu}/>
    </header>
  )
}

export default Header
