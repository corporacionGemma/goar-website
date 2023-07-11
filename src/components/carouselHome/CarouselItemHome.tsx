import React from 'react'
import { Button, TitleComponent } from '..'
import { motion } from 'framer-motion'

interface Props {
  subtitle: string
  title: string
  backtitle: string
  src: string
  description: string
  id: number
}
const CarouselItemHome: React.FC<Props> = ({ subtitle, title, backtitle, src, description, id }) => {
  const paragraph = {
    hidden: {
      opacity: 0,
      y: 20
    },
    onScreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.4
      }
    }
  }
  const buttonItem = {
    hidden: {
      opacity: 0,
      y: 20
    },
    onScreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.4
      }
    }
  }
  return (
    <div className='w-screen h-[605px] relative'>
      <div className=' w-full'>
        <img src={src} alt={title} width={'100%'} loading='lazy' height={750} className='h-[750px] aspect-[1920 / 750] object-cover'/>
      </div>
      <div className='absolute left-0 top-0 sm:w-full h-full pl-5 sm:pl-[15px] md:pl-[70px] z-[5]'>
        <div className='w-full lg:w-[800px]'>
          <TitleComponent
            text={title}
            subtitle={subtitle}
            description={backtitle}
            colorText="text-secondary-text"
            classNameDescription="descriptionComponent"
            animationTitle={true}
          />
        </div>
        <motion.p
          variants={paragraph}
          initial="hidden"
          whileInView="onScreen"
          viewport={{ once: true }}
          className='font-[300] md:font-[400] pl-0 sm:pl-[35px] lg:pl-[132px] text-[20px] leading-[24px] pr-[100px] sm:pr-[95px] md:pr-0 mt-[10px] lg:mt-[85px] text-white w-full md:w-[600px]'
        >
          {description}
        </motion.p>
        <motion.div
          variants={buttonItem}
          initial="hidden"
          whileInView="onScreen"
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row gap-5 justify-start mt-6 pl-0 sm:pl-[35px] lg:pl-[130px]'
        >
          <Button cb={() => {}} label='Read More' type="normal-orange" styleButton='button-carousel-info'/>
          <Button cb={() => {}} label='Contact Us' type="normal-blue" styleButton='button-carousel-info'/>
        </motion.div>
      </div>
    </div>
  )
}

export default CarouselItemHome
