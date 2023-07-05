import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ButtonCarousel, ItemCarousel } from '..'
import projects from '../../utils/projects'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { type ButtonGroupProps } from 'react-multi-carousel/lib/types'

interface Props {
  deviceType: string
}
const CarouselProject: React.FC<Props> = ({ deviceType }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 80
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  }
  const ButtonGroup = ({ next, previous }: ButtonGroupProps): JSX.Element => {
    return (
      <div className=' top-[150px] left-[30px] buttonGroupSection flex flex-col gap-4 absolute'>
          <ButtonCarousel
            cb={next}
            label={
              <>
                <span className='text-[16px] capitalize'>Next</span>
                <BsArrowRight className='text-[20px]'/>
              </>
            }
            style='orangeProject-button'/>
          <ButtonCarousel
            cb={previous}
            label={
              <>
                <BsArrowLeft className='text-[20px]'/>
                <span className='text-[16px] capitalize'>Prev</span>
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
      <div className='w-[83%]'>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          arrows={false}
          customButtonGroup={<ButtonGroup/>}
          autoPlay={deviceType !== 'mobile'}
          autoPlaySpeed={5000}
          partialVisible={deviceType !== 'mobile'}
          transitionDuration={600}
          containerClass="carousel-project-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={deviceType}
          itemClass="carousel-item"
        >
          {
            projects.map(project => (
              <ItemCarousel
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                src={project.src}
                description={project.description}
                id={project.id}
              />
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselProject
