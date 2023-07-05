import React from 'react'
import CountUp from 'react-countup'
import { type CountNumber } from '../types'

const StatisticValue: React.FC<CountNumber> = ({ start = 0, end = 100, duration = 3, separator = ' ', suffix = '' }) => {
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
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  )
}

export default StatisticValue
