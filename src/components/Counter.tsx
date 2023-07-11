import React from 'react'
import CountUp from 'react-countup'
import { type CountNumber } from '../types'

interface Props extends CountNumber {
  title: string
  subtitle: string
  color?: string
}

const Counter: React.FC<Props> = ({ start = 0, end = 100, duration = 3, separator = ' ', suffix = '', title, subtitle, color = 'text-secondary-text' }) => {
  return (
    <div>
      <CountUp
        start={start}
        end={end}
        duration={duration}
        separator={separator}
        delay={1}
        suffix={suffix}
        decimal=""
        scrollSpyOnce={true}
        enableScrollSpy={true}
        scrollSpyDelay={700}
      >
        {({ countUpRef }) => (
          <div className='flex items-center'>
            <div className='relative w-max'>
              <span className={`${color !== 'text-secondary-text' ? 'countNumberBlue' : 'countNumber'} text-[180px] leading-[1em] font-[700]`}>{end}</span>
              <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                <span className={`${color} text-[60px] font-[700] leading-[1em]`} ref={countUpRef}/>
              </div>
            </div>
            <div className='relative mb-[21px] right-[34px]'>
              {
                color !== 'text-secondary-text'
                  ? (<p className={`${color} text-[14px] font-[500] tracking-[.1em] uppercase leading-[2.3em]`}>{subtitle}</p>)
                  : (<p className='text-[14px] font-[500] tracking-[.1em] uppercase leading-[2.3em]'>{subtitle}</p>)
              }
              <h3 className={`${color} text-[35px] sm:text-[40px] leading-[.75em] font-[700]`}>{title}</h3>
            </div>
          </div>
        )}
      </CountUp>
    </div>
  )
}

export default Counter
