import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import routes from '../../utils/routes'
import MenuIcon from './MenuIcon'
import { type RoutesIF } from '../../types'

interface Props {
  positionClass?: string
  pages?: RoutesIF[]
  isOpen?: boolean
  openMenu?: () => void
}
const NavBar: React.FC<Props> = ({ positionClass = '', pages = [], isOpen = true, openMenu = () => {} }) => {
  // const [isActive, setIsActive] = useState(false)
  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return `h-full w-full flex flex-col justify-center navItem items-center ${isActive ? 'active' : ''}`
  }
  return (
    <nav className={`${positionClass} flex w-full justify-between overflow-hidden`}>
      <Link to={routes.home} className='flex justify-center items-center w-[302px] h-[70px] bg-primary'>
        <div className='text-[26px] font-[900]'>
          <h1 className='max-w-min text-center text-white'>GOAR</h1>
        </div>
      </Link>
      <div className='hidden lg:block navContainer'>
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
        <MenuIcon cb={openMenu} isOpen={isOpen}/>
    </nav>
  )
}

export default NavBar
