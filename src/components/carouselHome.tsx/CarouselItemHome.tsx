import React from 'react'
import { Button, TitleComponent } from '..'

interface Props {
  subtitle: string
  title: string
  backtitle: string
  src: string
  description: string
}
const CarouselItemHome: React.FC<Props> = ({ subtitle, title, backtitle, src, description }) => {
  return (
    <div className='w-full h-[600px] relative'>
      <img src={src} alt={title} width={1920} className='h-[750px] object-cover'/>
      <div className='absolute w-full h-full pt-[120px] pl-[200px]'>
        <TitleComponent
          text={title}
          subtitle={subtitle}
          description={backtitle}
          colorText="text-secondary-text"
					classNameDescription="descriptionComponent"
          animationTitle={true}
        />
        <p className='font-[400] text-[18px] leading-[24px] mt-[15px]'>
          {description}
        </p>
        <div className='flex gap-5 justify-start'>
          <Button cb={() => {}} label='Read More' type="normal-orange" styleButton='button-carousel-info'/>
          <Button cb={() => {}} label='Read More' type="normal-blue" styleButton='button-carousel-info'/>
        </div>
      </div>
    </div>
  )
}

export default CarouselItemHome
