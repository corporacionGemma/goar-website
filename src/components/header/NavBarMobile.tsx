import React from 'react'
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import paths from '../../utils/paths'

interface Props {
  closeNavBar: () => void
}

const NavBarMobile: React.FC<Props> = ({ closeNavBar }) => {
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
  const navigate = useNavigate()
  const location = useLocation()
  const handleClickPath = (path: string): void => {
    navigate(path)
    if (location.pathname !== path) closeNavBar()
  }
  return (
		<motion.div
			className="absolute block lg:hidden left-0 top-[69px] px-5 py-2 w-full bg-white menuContainer z-[5]"
			variants={item}
			initial={{ height: 0, opacity: 0 }}
			animate={{ height: '300px', opacity: 1 }}
			transition={{ duration: 0.5 }}
			exit="exit"
		>
			<ul className="uppercase flex flex-col gap-3">
				{paths.map((element) => (
					<motion.li
						key={element.path}
						className={`${location.pathname === element.path ? 'active' : ''} py-1 text-center`}
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: element.delayIn }}
						exit={{ opacity: 0, y: 60, transition: { ease: 'easeInOut', delay: element.delayOut + 0.1 } }}
						onClick={() => { handleClickPath(element.path) }}
					>
						{element.label}
					</motion.li>
				))}
			</ul>
		</motion.div>
  )
}

export default NavBarMobile
