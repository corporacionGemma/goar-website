import React from 'react'
import { motion } from 'framer-motion'
import { type RoutesIF } from '../../types'
import { NavLink } from 'react-router-dom'

interface Props {
  listRoutes: RoutesIF[]
}

const NavBarMobile: React.FC<Props> = ({ listRoutes }) => {
  // console.log(listRoutes);
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 1.2
      }
    }
  }

  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return `h-full w-full flex flex-col justify-center navItem items-center ${isActive ? 'active' : ''}`
  }
  return (
		<motion.div
			className="block px-5 py-2 w-full bg-red-500 menuContainer"
			variants={item}
			initial={{ height: 0, opacity: 0 }}
			animate={{ height: '200px', opacity: 1 }}
			transition={{ duration: 0.5 }}
			exit="exit"
		>
			<ul className=" uppercase">
				{listRoutes.map((element) => (
					<motion.li
						key={element.path}
						className=""
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: element.delayIn }}
						exit={{ opacity: 0, y: 60, transition: { ease: 'easeInOut', delay: element.delayOut + 0.1 } }}
					>
						<NavLink
							to={element.path}
							className={navLinkCssClasses}
						>
							{element.label}
						</NavLink>
					</motion.li>
				))}
			</ul>
		</motion.div>
  )
}

export default NavBarMobile
