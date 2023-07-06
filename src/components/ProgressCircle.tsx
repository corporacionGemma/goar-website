import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  percents: number
  size: number
  radius: number
  strokeWidth?: number
  stroke: string
  duration?: number
  delay?: number
  inView: boolean

}

const ProgressCircle: React.FC<Props> = ({
  percents,
  stroke,
  duration = 3,
  delay = 1,
  size = 100,
  strokeWidth = 6,
  radius,
  inView
}) => {
  const circumference = Math.ceil(2 * Math.PI * radius)
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percents - 100))
  )

  // Animate circle
  const transition = {
    duration,
    delay,
    ease: 'easeIn'
  }
  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition
    },
    show: {
      strokeDashoffset: fillPercents,
      transition
    }
  }

  return (
    <div className='w-full h-full relative'>
      <svg
            viewBox="0 0 100 100"
            width={size}
            height={size}
            style={{
              position: 'absolute',
              transform: 'rotate(-90deg)',
              overflow: 'visible'
              // marginLeft: -size
            }}
          >
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              strokeWidth={strokeWidth}
              stroke={stroke}
              fill="transparent"
              strokeDashoffset={fillPercents}
              strokeDasharray={circumference}
              variants={variants}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            />
          </svg>
    </div>
  )
}

export default ProgressCircle
