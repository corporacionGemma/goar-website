import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header, HeaderFix } from '.'
import { AnimatePresence } from 'framer-motion'

interface Props {
  children?: React.ReactNode
  position: boolean
  positionMobile: boolean
}
const Layout: React.FC<Props> = ({ position, positionMobile }) => {
  return (
    <div>
      <AnimatePresence>
        {position && (
          <HeaderFix/>
        ) }
      </AnimatePresence>
      <Header positionMobile={positionMobile}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
