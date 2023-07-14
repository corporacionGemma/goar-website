import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../utils/routes'
import { motion } from 'framer-motion'
const Error404: React.FC = () => {
  return (
    <main className='w-full mainError flex justify-center'>
      <div className='w-full px-8 sm:px-0 sm:w-[84%] flex items-center'>
        <div className='relative z-[5]'>
          <motion.div
            initial={{
              x: -20,
              opacity: 0
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.3
              }
            }}
            viewport={{ once: true, amount: 1 }}
            className='backErrorWord left-[-10] sm:left-[-30px] md:left-[-60px] top-[-55px] md:top-[-83px] lg:left-[-10.5%] lg:top-[-94px] text-[70px] sm:text-[100px] md:text-[154px] lg:text-[180px] -z-[1]'
            >
              ERROR 404</motion.div>
          <h1 className='m-0 uppercase break-words font-[900] text-secondary-text tracking-[-.01em] text-[45px] md:text-[60px] lg:text-[80px] leading-[1em]'>PÁGINA NO ENCONTRADA</h1>
          <p className='my-[14px] text-[18px] font-[400] text-[#565659]'>
            Ups! La página no existe.
          </p>
          <Link to={routes.home} className='block w-max text-[16px] buttonError font-[400] tracking-[.02em] leading-[2em] py-[7px] px-[38px] bg-primary text-white mt-[22px]'>
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Error404
