import React from 'react'
import CountUp from 'react-countup'
import { type CountNumber } from '../types'

interface Props extends CountNumber {
  title: string
  subtitle: string
  description: string
}
const StatisticValue: React.FC<Props> = ({ start = 0, end = 100, duration = 3, separator = ' ', suffix = '', title, subtitle, description }) => {
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
          <div className='flex items-center'>
          <div className='relative w-max'>
            <span className='text-[180px] leading-[1em] font-[700] text-secondary-color countNumber'>{end}</span>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
              <span className='text-[60px] text-secondary-text font-[700] leading-[1em]' ref={countUpRef}/>
            </div>
          </div>
          <div className='relative mb-[21px] right-[34px]'>
            <p className='text-[14px] font-[500] tracking-[.1em] uppercase leading-[2.3em]'>{subtitle}</p>
            <h3 className='text-[40px] text-secondary-text leading-[.75em] font-[700]'>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        )}
      </CountUp>
    </div>
  )
}

export default StatisticValue
