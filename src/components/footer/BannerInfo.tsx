import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import routes from '../../utils/routes'

interface Props {
  subtitle: string
  title: string
  href?: string
}

const BannerInfo: React.FC<Props> = ({ subtitle, title, href }) => {
  return (
    <Link className='w-full boxBannerInfo h-[230px] relative border-tertiary-border border-[1px] border-b-0' to={routes.home}>
      <div className='boxChild w-full h-full flex flex-col justify-between pl-[28px] pt-[35px] pr-[22px] pb-[31px]'>
        <div className='text-secondary-text flex flex-col gap-1'>
          <h5 className='text-[12px] leading-[2.33em tracking-[.1em] uppercase font-[500]'>{subtitle}</h5>
          <h4 className='text-[26px] leading-[1.5em] font-[700]'>{title}</h4>
        </div>
        <div className='iconBanner rounded-[2px] w-[50px] h-[50px] text-secondary-text flex justify-center items-center'>
            <AiOutlinePlus className='text-[20px]'/>
        </div>
        <span className='lineBanner absolute h-[4px] w-full bg-primary bottom-0 left-0'></span>
      </div>
    </Link>
  )
}

export default BannerInfo
