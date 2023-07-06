import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import routes from '../../utils/routes'

const NavBar: React.FC = () => {
  const pages = [
    {
      label: 'Inicio',
      path: routes.home
    },
    {
      label: 'Nosotros',
      path: routes.about
    },
    {
      label: 'Equipo',
      path: routes.team
    },
    {
      label: 'Proyectos',
      path: routes.projects
    },
    {
      label: 'Contácto',
      path: routes.contact
    }
  ]
  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return `h-full w-full flex flex-col justify-center navItem items-center ${isActive ? 'active' : ''}`
  }
  return (
    <nav className='flex w-full justify-between'>
      <Link to={routes.home} className='flex justify-center items-center w-[302px] h-[70px] bg-primary'>
        <div className='text-[26px] font-[900]'>
          <h1 className='max-w-min text-center text-white'>GOAR</h1>
        </div>
      </Link>
      <div className='navContainer'>
        <ul className='grid grid-cols-5 justify-items-center text-secondary-text h-full items-center'>
          {
            pages.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkCssClasses}
              >
                <li className="text-[18px] w-full text-center font-[700]">{item.label}</li>
              </NavLink>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
