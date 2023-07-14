import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '.'
import { AnimatePresence } from 'framer-motion'

interface Props {
  children?: React.ReactNode
  position: boolean
  positionMobile: boolean
}
const Layout: React.FC<Props> = ({ position, positionMobile }) => {
  // console.log('postion:', position)
  return (
    <div className=''>
      <AnimatePresence>
        {/* {position && (
          <HeaderFix/>
        ) } */}
      </AnimatePresence>
      <Header positionMobile={positionMobile} position={position}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
