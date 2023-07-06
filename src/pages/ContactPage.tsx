import React from 'react'
import { Presentation } from '../components'
const ContactPage: React.FC = () => {
  return (
    <main className='w-full flex flex-col items-center'>
      <div className='w-full'>
        <Presentation
          src={'/assets/slider_6.jpg'}
          backtitle={'SCHEDULE'}
          title={'CONTACT US'}
          subtitle={'EXPLORE THE FEATURES'}
          description={'Etiam scelerisque tortor at lectus dapibus, nec fermentum diam feugiat. Morbi rutrum magna et dui.'}
        />
      </div>
    </main>
  )
}

export default ContactPage
