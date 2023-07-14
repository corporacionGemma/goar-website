import React, { useState } from 'react'
import ContactSection from './ContactSection'
import NavBar from './NavBar'
import { AnimatePresence } from 'framer-motion'
import { HeaderFix, HeaderMobile } from '..'

interface Props {
  positionMobile: boolean
  position: boolean
}
const Header: React.FC<Props> = ({ positionMobile, position }) => {
  const [menu, setMenu] = useState(false)
  const openMenu = (): void => {
    setMenu(!menu)
  }
  return (
    <header className='relative z-50 '>
      <ContactSection/>
      <AnimatePresence>
        {
          menu
            ? (
            <HeaderMobile isOpen={menu} changeMenu={openMenu}/>
              )
            : (
            <>
            {positionMobile && (
            <HeaderMobile isOpen={menu} changeMenu={openMenu}/>
            )}
            </>
              )
        }
      </AnimatePresence>
      <AnimatePresence>
        {position && (
            <HeaderFix/>
        )}
      </AnimatePresence>
        <NavBar isOpen={menu} openMenu={openMenu}/>
    </header>
  )
}

export default Header
