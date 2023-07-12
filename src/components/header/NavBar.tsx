import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import routes from '../../utils/routes'
import MenuIcon from './MenuIcon'
import paths from '../../utils/paths'

interface Props {
  positionClass?: string
  isOpen?: boolean
  openMenu?: () => void
  navRef?: any
}
const NavBar: React.FC<Props> = ({ positionClass = 'relative', isOpen = true, openMenu = () => {}, ...props }) => {
  // const [isActive, setIsActive] = useState(false)
  console.log({ ...props })
  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return `h-full w-full flex flex-col justify-center navItem items-center ${isActive ? 'active' : ''}`
  }
  return (
    <nav className={`${positionClass} flex w-full bg-white justify-between overflow-hidden`} {...props}>
      <Link to={routes.home} className='flex justify-center items-center w-auto px-10 md:px-0 md:w-[302px] h-[70px] bg-primary'>
        <div className='text-[26px] font-[900]'>
          <h1 className='max-w-min text-center text-white'>GOAR</h1>
        </div>
      </Link>
      <div className='hidden lg:block navContainer'>
        <ul className='grid grid-cols-5 justify-items-center text-secondary-text h-full items-center'>
          {
            paths.map(item => (
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
