import React from 'react'
import { Link } from 'react-router-dom'
// import { IconType } from 'react-icons'

interface Props {
  icon: JSX.Element
  information: JSX.Element
  href: string
  gap: string
}

const LocationItem: React.FC<Props> = ({ icon, information, href, gap }) => {
  return (
    <div className={`flex ${gap} items-center`}>
      <div className={'text-[19px] w-[19px] h-[19px] flex justify-center'}>
        {icon}
      </div>
      <div className='hover:text-primary'>
        {
          href.startsWith('/')
            ? (
            <Link to={href}>
            {information}
          </Link>
              )
            : (
            <a href={href}>
            {information}
            </a>
              )
        }
      </div>
    </div>
  )
}

export default LocationItem
