import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import sliders from '../../utils/sliders'
import { CarouselItemHome } from '..'
import { type ButtonGroupProps } from 'react-multi-carousel/lib/types'
import ButtonSlider from './ButtonSlider'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

interface Props {
  deviceType: string
}

const CarouselHome: React.FC<Props> = ({ deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const ButtonGroup = ({ next, previous }: ButtonGroupProps): JSX.Element => {
    return (
      <div className='left-0 bottom-0 w-full sectionArrowCarousel h-[70px] flex justify-start absolute'>
          <ButtonSlider
            cb={next}
            label={
              <>
                <BiChevronLeft className='text-[30px]'/>
              </>
            }
            style='orangeProject-button'/>
          <ButtonSlider
            cb={previous}
            label={
              <>
                <BiChevronRight className='text-[30px]'/>
              </>
            }
            style='blueProject-button'/>
        </div>
    )
  }
  return (
    <div className='w-full flex '>
      <div className='w-[17%] flex justify-center'>
        {/* <ButtonGroup/> */}
      </div>
      <div className='w-full'>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          arrows={false}
          ssr={true}
          customButtonGroup={<ButtonGroup/>}
          autoPlay={deviceType !== 'mobile'}
          autoPlaySpeed={5000}
          partialVisbile={false}
          customTransition='all .5'
          transitionDuration={600}
          showDots={true}
          // containerClass="carousel-project-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={deviceType}
          // itemClass="carousel-item"
          dotListClass='dot-list-carousel'
          itemClass="item-class-carousel"
        >
          {
            sliders.map(slider => (
              <CarouselItemHome
                key={slider.id}
                title={slider.title}
                subtitle={slider.subtitle}
                src={slider.src}
                description={slider.description}
                id={slider.id}
                backtitle={slider.backtitle}
              />
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselHome
