import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../utils/routes'
import { AiOutlinePlus } from 'react-icons/ai'
import { motion } from 'framer-motion'

interface Props {
  src: string
  title: string
  subtitle: string
  description: string
  id: number
}
const ItemCarousel: React.FC<Props> = ({ src, title, subtitle, description, id }) => {
  const image = {
    rest: {
      opacity: 1
    },
    onHover: {
      opacity: 0.6,
      transition: {
        duration: 0.3
      }
    }
  }
  const item = {
    rest: {
      background: '#00235A'
    },
    onHover: {
      background: '#FF5E14',
      transition: {
        duration: 0.3
      }
    }
  }
  return (
    <motion.div
      initial="rest"
      whileHover="onHover"
      className='w-full'
      >
      <div className='max-w-full h-auto'>
        <motion.img variants={image} src={src} decoding='async' loading='lazy' width={1100} height={673} alt={title} />
      </div>
      <div className='text-white max-w-full mt-[17px] mb-[11px]'>
        <h6 className='text-[12px] uppercase tracking-[.1em] font-[500]'>{subtitle}</h6>
        <h4 className='text-[26px] leading-[1.15em] font-[700] mt-[5px]'>{title}</h4>
        <p className='mt-[15px] font-[400] text-[18px]'>{description}</p>
      </div>
      <div>
        <Link to={`${routes.projects}/${id}`}>
          <div className='flex gap-4 items-center justify-start text-white'>
            <span className='text-[16px] tracking-[0.02em] font-[400]'>Find Out More</span>
            <motion.div variants={item} className='w-[50px] h-[50px] text-[20px] bg-primary flex justify-center items-center rounded-[2px]'>
              <AiOutlinePlus/>
            </motion.div>
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

export default ItemCarousel
