import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header, HeaderFix } from '.'
import { AnimatePresence } from 'framer-motion'

interface Props {
  children?: React.ReactNode
  position: boolean
}
const Layout: React.FC<Props> = ({ position }) => {
  return (
    <div>
      <AnimatePresence>
        {position && (
          <HeaderFix/>
        ) }
      </AnimatePresence>
      <Header/>
      {/* {children} */}
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
