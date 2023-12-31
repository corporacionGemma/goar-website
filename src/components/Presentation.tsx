import React from 'react'
import { TitleComponent } from '.'
import { motion } from 'framer-motion'

interface Props {
  subtitle: string
  title: string
  backtitle: string
  src: string
  description: string
  color?: string
  colorDescription?: string
}

const Presentation: React.FC<Props> = ({ subtitle, title, backtitle, src, description, color = 'text-secondary-text', colorDescription = '' }) => {
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
  return (
    <div className='w-full h-[535px] relative overflow-hidden'>
      <div className='min-w-screen w-full'>
        <img src={src} alt={title} width={'100%'} loading='lazy' height={750} className='h-[750px] aspect-[1920 / 750] object-cover'/>
      </div>
      <div className='absolute left-0 top-0  w-full h-full pl-5 sm:pl-[15px] md:pl-[70px] z-[5]'>
        <div className='w-full lg:w-[800px]'>
          <TitleComponent
            text={title}
            subtitle={subtitle}
            description={backtitle}
            colorText={color}
            classNameDescription="descriptionComponent"
            animationTitle={true}
            bottom='bottom-[25px]'
          />
        </div>
        <motion.p
          variants={paragraph}
          initial="hidden"
          whileInView="onScreen"
          viewport={{ once: true }}
          className={`${colorDescription} font-[300] md:font-[400] pl-0 pr-5 sm:pr-0 sm:pl-[35px] lg:pl-[132px] text-[20px] leading-[24px] mt-[15px] w-full md:w-[650px]`}
        >
          {description}
        </motion.p>
      </div>
    </div>
  )
}

export default Presentation
