import React from 'react'
import { FormContact, MapSection, Presentation } from '../components'
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
      <div className='w-full py-[130px] flex justify-center'>
        <div className='w-[87%] grid grid-cols-2 gap-8  justify-items-center items-center'>
          <div className='bg-secondary-color p-5 h-full rounded'>
            <MapSection/>
          </div>
          <div className='w-full h-full mb-[40px] mt-[60px]'>
            <FormContact/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
