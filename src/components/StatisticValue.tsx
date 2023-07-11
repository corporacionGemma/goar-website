import React, { useRef } from 'react'
import CountUp from 'react-countup'
import { type CountNumber } from '../types'
import ProgressCircle from './ProgressCircle'
import { useInView } from 'framer-motion'

interface Props extends CountNumber {
  title: string
  subtitle: string
  description: string
}
const StatisticValue: React.FC<Props> = ({ start = 0, end = 100, duration = 3, separator = ' ', suffix = '', title, subtitle, description }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 'all' })
  return (
    <div>
      <CountUp
        start={start}
        end={end}
        duration={duration}
        separator={separator}
        suffix={suffix}
        decimal=""
        scrollSpyOnce={true}
        enableScrollSpy={true}
        scrollSpyDelay={1500}
      >
        {({ countUpRef }) => (
          <div className=' flex flex-col sm:flex-row items-center gap-5 sm:gap-8'>
          <div className='relative w-max' ref={ref}>
            <div className='w-[176px] flex justify-center center h-[176px] border-[1px] border-[#dedfe0] rounded-full'>
              <ProgressCircle inView={isInView} percents={end} radius={49} strokeWidth={3} size={176} stroke={'#FF5E14'}/>
            </div>
            <div className='absolute top-0 left-0 w-full h-full text-secondary-text flex justify-center items-center'>
              <div className='flex'>
                <span className='text-[60px] font-[700] leading-[1] tracking-[-.02em]' ref={countUpRef}/>
                <span className='text-[36px] leading-[40px] font-[500]'>%</span>
              </div>
            </div>
          </div>
          <div className=''>
            <p className='text-[14px] font-[500] tracking-[.1em] uppercase leading-[2.3em]'>{subtitle}</p>
            <h3 className='text-[35px] sm:text-[40px] text-secondary-text leading-[.75em] font-[700]'>{title}</h3>
            <p className='text-[18px] leading-[1.4em] font-[400] mt-[13px] w-[90%]'>{description}</p>
          </div>
        </div>
        )}
      </CountUp>
    </div>
  )
}

export default StatisticValue
