import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  src: string
  name: string
  partnerRef: React.RefObject<HTMLDivElement>
}
const PartnerItem: React.FC<Props> = ({ src, name, partnerRef }) => {
  const item2 = {
    rest: {
      y: 0
    },
    onHover: {
      y: '100%',
      transition: {
        duration: 0.2
      }
    }
  }
  return (
    <motion.div initial="rest" whileHover={'onHover'} ref={partnerRef} className='relative'>
      <motion.div variants={item2} className='absolute -top-[100%] left-0 w-full'>
        <img src={src} alt={name} width={'100%'}/>
      </motion.div>
      <motion.div variants={item2}>
        <img src={src} alt={name} width={'100%'}/>
      </motion.div>
    </motion.div>
  )
}

export default PartnerItem
