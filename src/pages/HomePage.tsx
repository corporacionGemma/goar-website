import React from 'react'
import TitleComponent from '../components/TitleComponent'
import servicesList from '../utils/services'
import BannerInfo from '../components/footer/BannerInfo'
const HomePage: React.FC = () => {
  return (
    <main className='w-full'>
      <div className='w-full flex flex-col items-center'>
        <TitleComponent
          text='Services'
          description='services'
          colorText='text-secondary-text'
          classNameDescription='descriptionComponent'
        />
        <div className='w-[80.5%] grid grid-cols-4 gap-7 pt-[30px] pb-[62px]'>
          {
            servicesList.map(service => (
              <BannerInfo key={service.id} title={service.title} subtitle={service.subtitle}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default HomePage
