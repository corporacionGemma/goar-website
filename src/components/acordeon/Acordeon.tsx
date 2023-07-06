import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  id: number | string
  title: string
  description: string
  selected: number | string
  cb: (id: number | string) => void
}
const Acordeon: React.FC<Props> = ({ cb, title, description, id, selected }) => {
  const [isActive, setIsActive] = useState(false)
  const callBack = (id: number | string): void => {
    if (isActive && id !== selected) {
      cb(id)
    } else if (isActive && id === selected) {
      // eslint-disable-next-line n/no-callback-literal
      cb(0)
      setIsActive(!isActive)
    } else {
      cb(id)
      setIsActive(!isActive)
    }
  }
  const variants = {
    initial: {
      height: 0
    },
    show: {
      height: 'auto'
    },
    exit: {
      height: 0
    }
  }
  return (
    <>
      <div className={`${id !== selected ? 'imageAcordeon border-b-[1px] border-[#dedfe0]' : 'bg-white border-none'} containerAcordeon  py-3 pr-5 pl-12  w-full flex justify-between items-center cursor-pointer`} onClick={() => { callBack(id) }}>
        <span className='text-[26px] leading-[1.15em] font-[700] text-secondary-text'>{title}</span>
        <div className={`${id === selected ? 'activeAcordeon' : ''} w-[50px] h-[50px] rounded containerIcon-acordeon flex justify-center items-center`}>
          {id !== selected
            ? (<span className='iconsAcordeon text-[20px] font-[500] text-secondary-text text-center'>+</span>)
            : (<span className='iconsAcordeon text-[20px] font-[500] text-white text-center'>-</span>)}
        </div>
      </div>
      <AnimatePresence>
        {selected === id && isActive && (
        <motion.div
          initial="initial"
          animate="show"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'linear'
          }}
          variants={variants}
          className='w-full overflow-clip pl-12 pr-[80px] bg-white'
        >
          <p className='font-[400] text-[18px] '>{description}</p>
          <br/>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Acordeon
