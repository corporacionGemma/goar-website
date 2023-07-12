import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children?: React.ReactNode
}

const BoxTransition: React.FC<Props> = ({ children }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 1, once: true })

  return (
  <motion.div className='w-full h-max relative overflow-hidden containerBoxTransition' ref={ref}>
    <div
      className={`${inView ? 'inview-box1' : ''} initial-box h-full w-full bg-primary absolute left-0 top-0 z-[1]`}></div>
    <div
      className={`${inView ? 'inview-box2' : ''} initial-box h-full w-full bg-secondary-color absolute left-0 top-0 z-[2]`}></div>
    {/* <motion.div
      className='h-full w-full bg-secondary-color absolute left-0 top-0 z-[1] opacity-0'></motion.div> */}
    <div
      style={{
        transition: '0s .8s',
        opacity: inView ? 1 : 0
      }}
      className=' w-full h-full relative left-0 top-0 bg-red-50'>
        {children}
      </div>
  </motion.div>
  )
}

export default BoxTransition

// const item = {
//   hidden: {
//     width: 1,
//     opacity: 0
//   },
//   onScreen: {
//     width: '100%',
//     opacity: 1,
//     transition: {
//       ease: [0.86, 0, 0.08, 1],
//       duration: 0.8,
//       opacity: { duration: 0.2 }
//     }
//   }
// }
// const item1 = {
//   hidden: {
//     width: 1,
//     opacity: 0
//   },
//   onScreen: {
//     width: '100%',
//     opacity: 1,
//     transition: {
//       ease: [0.86, 0, 0.07, 1],
//       duration: 0.8,
//       opacity: { duration: 0.2 },
//       delay: 0.4
//     }
//   }
// }
// const item2 = {
//   hidden: {
//     width: 1,
//     opacity: 0
//   },
//   onScreen: {
//     width: '100%',
//     opacity: 1,
//     transition: {
//       ease: [0.86, 0, 0.07, 1],
//       duration: 0.8,
//       opacity: { duration: 0.2 },
//       delay: 1
//     }
//   }
// }
// const imageVariant = {
//   hidden: {
//     opacity: 0
//   },
//   onScreen: {
//     opacity: 1,
//     transition: {
//       type: 'spring',
//       duration: 0.1,
//       delay: 1
//     }
//   }
// }
// return (
//   <div className='w-full  z-[5] h-max relative'>
//     <motion.div
//       initial="hidden"
//       whileInView="onScreen"
//       variants={item}
//       viewport={{ amount: 1, once: true }}
//       className='h-full w-full bg-primary absolute left-0 top-0 -z-[1]'></motion.div>
//     <motion.div
//       initial="hidden"
//       whileInView="onScreen"
//       variants={item1}
//       viewport={{ amount: 1, once: true }}
//       className='h-full w-full bg-secondary-color absolute left-0 top-0 z-[1]'></motion.div>
//     <motion.div
//       initial="hidden"
//       whileInView="onScreen"
//       variants={item2}
//       viewport={{ amount: 1, once: true }}
//       className='h-full w-full bg-black/60 absolute left-0 top-0 z-[3]'></motion.div>
//     <motion.div
//       initial="hidden"
//       whileInView="onScreen"
//       variants={imageVariant}
//       viewport={{ amount: 1, once: true }}
//       className=' w-full h-full relative left-0 top-0 z-[2] bg-red-50'>
//         {children}
//       </motion.div>
//   </div>
// )
