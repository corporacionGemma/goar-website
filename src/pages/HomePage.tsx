import React from 'react'
import TitleComponent from '../components/TitleComponent'
import servicesList from '../utils/services'
import BannerInfo from '../components/footer/BannerInfo'
import BoxTransition from '../components/BoxTransition'
import Button from '../components/Button'
const HomePage: React.FC = () => {
  return (
		<main className="w-full">
			<div className="w-full flex flex-col items-center">
				<TitleComponent
					text="Services"
					description="services"
					colorText="text-secondary-text"
					classNameDescription="descriptionComponent"
				/>
				<div className="w-[84%] grid grid-cols-4 gap-7 pt-[30px] pb-[62px]">
					{servicesList.map((service) => (
						<BannerInfo key={service.id} title={service.title} subtitle={service.subtitle} />
					))}
				</div>
			</div>
			<div className="flex justify-center">
				<div className="w-[84%] grid grid-cols-2 gap-6 items-center py-[40px] relative z-[5]">
					<div className='absolute w-[74%] backgroundImg h-full right-0 top-0 -z-[1]'></div>
					<div className='w-full h-max bg-red-200'>
						<BoxTransition>
							<img
								src="/assets/image1.jpg"
								width={'600px'} height={'400px'}
								alt="image1"
								loading='lazy'
								decoding='async'
								className='imageSection'/>
						</BoxTransition>
					</div>
					<div className='px-[26px] py-10'>
						<h6 className='text-[14px] text-secondary-text tracking-[.1em] uppercase font-[500] mb-[2px]'>EXPLORE THE FEATURES</h6>
						<h2 className='text-[60px] text-secondary-text leading-[0.96em] tracking-[-.02em] font-[700]'>Full project management</h2>
						<p className='font-[400] text-[18px] leading-[26px] mt-5 pr-[110px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur.</p>
						<div className='mt-8'>
							<Button type='normal-orange' label={'Read More'} styleButton='projecButton' cb={() => {}}/>
						</div>
					</div>
				</div>
			</div>
		</main>
  )
}

export default HomePage
