import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { type SocialNetwork } from '../../types.t'
import { motion } from 'framer-motion'
import { BiSolidShareAlt } from 'react-icons/bi'

interface Props {
  socialNetwork: SocialNetwork[]
}
export const SocialContainer: React.FC<Props> = ({ socialNetwork }) => {
  const icons: JSX.Element[] = [<FaFacebookF key={0}/>, <FaWhatsapp key={1}/>, <FaLinkedinIn key={2}/>]
  const socialCOntainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  const item = {
    hidden: { x: 10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  }
  return (
    <>
      <motion.div initial="hidden" whileHover="visible" className='top-[30px] text-white absolute right-[30px]'>
        <motion.div
          className='w-[48px] text-[25px] flex justify-center items-center h-[48px] hover-orange bg-primary rounded-[4px] z-[5]'
          >
          <BiSolidShareAlt/>
        </motion.div>
        <motion.ul variants={socialCOntainer} className='flex flex-col gap-5 pt-5 items-center'>
          {
            socialNetwork.map(social => (
              <motion.li variants={item} className='text-[20px] font-[500]' key={social.id}>
                <a href={social.href} target='_blank' rel="noreferrer">
                  {
                    icons[social.id]
                  }
                </a>
              </motion.li>
            ))
          }
        </motion.ul>
      </motion.div>
    </>
  )
}
