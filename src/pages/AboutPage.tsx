import React, { useRef } from 'react'
import { BannerInfo, BoxTransition, Button, PartnerItem, PeopleCard, Presentation, TitleComponent } from '../components'
import servicesList from '../utils/services'
import people from '../utils/people'
import partners from '../utils/partners'
const AboutPage: React.FC = () => {
  const partnerRef = useRef<HTMLDivElement>(null)
  return (
    <main className='w-full flex flex-col items-center'>
      <div className='w-full'>
        <Presentation
          src={'/assets/carousel/slider_1.jpg'}
          backtitle={'SCHEDULE'}
          title={'ABOUT US'}
          subtitle={'EXPLORE THE FEATURES'}
          description={'Etiam scelerisque tortor at lectus dapibus, nec fermentum diam feugiat. Morbi rutrum magna et dui.'}
        />
      </div>
      {/* Services */}
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
      {/* about company */}
			<div className="flex justify-center">
				<div className="w-[84%] grid grid-cols-2 gap-6 items-center py-[40px] relative z-[5]">
					<div className='absolute w-[74%] backgroundImg h-full right-0 top-0 -z-[1]'></div>
					<div className='w-full h-max '>
						<BoxTransition>
							<img
								src="/assets/image1.jpg"
								width={'100%'} height={'400px'}
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
      {/* Professionals */}
      <div className='w-full'>
				<TitleComponent
					text='PROFESSIONALS'
					description='PEOPLE'
					colorText="text-secondary-text"
					classNameDescription="descriptionComponent"
				/>
				<div className='w-full grid grid-cols-4 px-7 pt-[40px] pb-[100px] gap-7'>
					{
						people.slice(0, 4).map(person => (
							<PeopleCard
								key={person.id}
								socialNetwork={person.socialNetwork}
								name={person.name}
								src={person.src}
								ocupation={person.ocupation}/>
						))
					}
				</div>
			</div>
      {/* Partners */}
			<div className='w-full partnerContainer flex justify-center py-[120px]'>
				<ul className='w-[90%] grid grid-cols-4 gap-5 h-[110px]'>
						{
							partners.map(item => (
								<li key={item.id} className='overflow-hidden'>
									<PartnerItem src={item.src} name={item.name} partnerRef={partnerRef} />
								</li>
							))
						}
				</ul>
			</div>
    </main>
  )
}

export default AboutPage
