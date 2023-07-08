import React, { useCallback, useRef, useState } from 'react'
import TitleComponent from '../components/TitleComponent'
import servicesList from '../utils/services'
import BannerInfo from '../components/footer/BannerInfo'
import BoxTransition from '../components/BoxTransition'
import Button from '../components/Button'
import features from '../utils/features'
import FeaturedInfo from '../components/FeaturedInfo'
import partners from '../utils/partners'
import PartnerItem from '../components/PartnerItem'
import people from '../utils/people'
import PeopleCard from '../components/peopleCard/PeopleCard'
import { CarouselHome, CarouselProject, Counter, StatisticValue } from '../components'
import valuesProjects from '../utils/valuesProjects'
import statisticList from '../utils/statisticValues'
import infoProject from '../utils/infoProject'
import Acordeon from '../components/acordeon/Acordeon'

interface Props {
  deviceType: string
}
const HomePage: React.FC<Props> = ({ deviceType }) => {
  const [selected, setselected] = useState<string | number>(0)

  const showAcordeon = (id: number | string): void => {
    setselected(id)
  }
  const partnerRef = useRef<HTMLDivElement>(null)
  const renderFeatureds = useCallback(
    (): React.ReactNode => {
      return features.map(featured => {
        if (featured.type === 'info') {
          return (
						<FeaturedInfo
							src={featured.src}
							title={featured.title}
							subtitle={featured.subtitle}
							description={featured.description}
							key={featured.id}/>
          )
        }
        return (
				<img
					key={featured.id}
					src={featured.src}
					alt="imagefeatured"
					width={500}
					height={500} />
        )
      }
      )
    },
    []
  )
  return (
		<main className="w-full">
			<div className='w-full'>
				<CarouselHome deviceType={deviceType}/>
			</div>
			{/* services */}
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
			{/* Projects */}
			<div className='w-full bg-secondary-color '>
				<TitleComponent
					text="Projects"
					description="Projects"
					colorText="text-white"
					classNameDescription="descriptionComponentBlue"
				/>
				<div className='pt-[43px] pb-[116px] w-full relative'>
					<CarouselProject deviceType={deviceType}/>
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
			{/* */}
			<div className='w-full pb-[126px]'>
			<TitleComponent
					text="FEATURED"
					description="FEATURED"
					colorText="text-secondary-text"
					classNameDescription="descriptionComponent"
				/>
				<div className='pt-[45px] flex justify-center'>
					<div className='grid w-[84%] items-center justify-items-center grid-cols-3 gap-8'>
						{
						renderFeatureds()
						}
					</div>
				</div>
			</div>
			{/* */}
			<div className='w-full bg-red-100 relative'>
				<div className='absolute top-[110px] w-[622px] right-[200px]'>
					<BoxTransition>
							<div className='w-[622px] pt-[76px] pb-[85px] pl-[106px] pr-[112px] bg-primary'>
								<div className='text-white'>
									<h6 className='text-[14px] tracking-[.1em] font-[500]'>EXPLORE THE FEATURES</h6>
									<h4 className='text-[60px] leading-[.96em] tracking-[-.02em] font-[700]'>Full project managemment</h4>
									<p className='mt-5 text-[18px] leading-[26px] font-[400]'>
										Lorem ipsum dolor sit amet, quam felis adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme mus.
									</p>
								</div>
								<div className='mt-8'>
								<Button type='normal-white' label={'Read More'} styleButton='projecButton1' cb={() => {}}/>
								</div>
							</div>
					</BoxTransition>
				</div>
					<img src={'/assets/image3.png'} alt="image3" width={'100%'} height={725} className='h-[700px] object-cover bg-center'/>
			</div>
			{/* values project */}
			<div className='w-full flex mt-[103px] justify-center'>
				<div className='w-[90%] grid grid-cols-4 gap-[30px]'>
					{
						valuesProjects.map(value => (
							<Counter key={value.id} end={value.value} title={value.title} subtitle={value.subtitle}/>
						))
					}
				</div>
			</div>
			{/* professionals */}
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
			{/* */}
			<div className='w-full flex mt-[103px] mb-[80px] justify-center'>
				<div className='w-[90%] grid grid-cols-3 gap-[30px]'>
					{
						statisticList.map(value => (
							<StatisticValue key={value.id} end={value.value} title={value.title} subtitle={value.subtitle} description={value.description}/>
						))
					}
				</div>
			</div>
			{/* */}
			<div className="flex justify-center">
				<div className="w-[84%] grid  grid-cols-2 items-center py-[40px] relative z-[5]">
					<div className='absolute w-[74%] backgroundImg h-full right-0 top-0 -z-[1]'></div>
					<div className='w-full h-max '>
						<BoxTransition>
							<img
								src="/assets/image5.jpg"
								width={'100%'} height={'400px'}
								alt="image1"
								loading='lazy'
								decoding='async'
								className='imageSection'/>
						</BoxTransition>
					</div>
					<div className='w-full h-full'>
						<div className='w-full h-max'>
							{
								infoProject.map(element => (
									<Acordeon key={element.id} id={element.id} title={element.title} description={element.description} selected={selected} cb={showAcordeon}/>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</main>
  )
}

export default HomePage
