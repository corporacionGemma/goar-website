import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  src: string
  name: string
  partnerRef: React.RefObject<HTMLDivElement>
}
const PartnerItem: React.FC<Props> = ({ src, name, partnerRef }) => {
  const item = {
    rest: {
      y: '-50%'
    },
    onHover: {
      y: 0,
      transition: {
        duration: 0.3,
        type: 'spring'
      }
    }
  }
  return (
    <motion.div initial="rest" whileHover={'onHover'} variants={item} ref={partnerRef}>
      <div>
        <img src={src} alt={name} width={'100%'}/>
      </div>
      <div>
        <img src={src} alt={name} width={'100%'}/>
      </div>
    </motion.div>
  )
}

export default PartnerItem
