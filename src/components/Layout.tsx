import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '.'

// interface Props {
//   children?: React.ReactNode
// }
const Layout: React.FC = () => {
  return (
    <>
      <Header/>
      {/* {children} */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
