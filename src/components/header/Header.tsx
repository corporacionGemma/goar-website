import React, { useState } from 'react'
import ContactSection from './ContactSection'
import NavBar from './NavBar'
import { AnimatePresence } from 'framer-motion'
import { NavBarMobile } from '..'
import routes from '../../utils/routes'

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false)
  const openMenu = (): void => {
    setMenu(!menu)
  }
  const pages = [
    {
      label: 'Inicio',
      path: routes.home,
      delayOut: 0.8,
      delayIn: 0.5
    },
    {
      label: 'Nosotros',
      path: routes.about,
      delayOut: 0.7,
      delayIn: 0.6
    },
    {
      label: 'Equipo',
      path: routes.team,
      delayOut: 0.6,
      delayIn: 0.7
    },
    {
      label: 'Proyectos',
      path: routes.projects,
      delayOut: 0.5,
      delayIn: 0.8
    },
    {
      label: 'Contácto',
      path: routes.contact,
      delayOut: 0.4,
      delayIn: 0.9
    }
  ]
  return (
    <header className='relative z-50'>
      <ContactSection/>
      <NavBar isOpen={menu} openMenu={openMenu} pages={pages}/>
      <AnimatePresence>{menu && <NavBarMobile listRoutes={pages} />}</AnimatePresence>
    </header>
  )
}

export default Header
