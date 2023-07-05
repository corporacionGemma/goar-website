import React from 'react'
import { type SocialNetwork } from '../../types'
import { motion } from 'framer-motion'
import { SocialContainer } from './SocialContainer'

interface Props {
  socialNetwork: SocialNetwork[]
  name: string
  ocupation: string
  src: string
}
const PeopleCard: React.FC<Props> = ({ ocupation, src, name, socialNetwork }) => {
  const infoContainer = {
    rest: {
      opacity: 0
    },
    onHover: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }
  return (
    <motion.div
      initial="rest"
      whileHover="onHover"
      className='w-full relative h-full z-[5]'
    >
      <img src={src} alt={name} width={'100%'} />
      <motion.div
        variants={infoContainer}
        className='bg-secondary-color w-full h-full text-white absolute left-0 top-0 flex flex-col justify-end p-6'
        >
        <h4 className='font-[500] text-[12px] tracking-[.1em]'>{ocupation}</h4>
        <h6 className='font-[700] text-[26px] leading-[1.15em]'>{name}</h6>
      </motion.div>
      <SocialContainer socialNetwork={socialNetwork}/>
    </motion.div>
  )
}

export default PeopleCard
