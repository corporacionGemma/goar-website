import React from 'react'
import { CarouselProject, Counter, InfoProject, Presentation, TitleComponent } from '../components'
import characteristicProject from '../utils/characteristicPorject'
import valuesProjects from '../utils/valuesProjects'

interface Props {
  deviceType: string
}
const ProjectPage: React.FC<Props> = ({ deviceType }) => {
  return (
    <main className='w-full flex flex-col items-center'>
      <div className='w-full'>
        <Presentation
          src={'/public/assets/project_IMage.jpg'}
          backtitle={'SCHEDULE'}
          title={'PROJECTS'}
          subtitle={'EXPLORE THE FEATURES'}
          description={'Etiam scelerisque tortor at lectus dapibus, nec fermentum diam feugiat. Morbi rutrum magna et dui.'}
          color='text-white'
          colorDescription='text-white'
        />
      </div>
      {/* Characteristic */}
      <div className='w-full bg-secondary-color flex flex-col items-center sm:pb-[10px] pt-[110px] pb-[50px]'>
				<div className='w-full px-8 sm:px-0 sm:w-[85%] grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-3'>
          {
            characteristicProject.map(characteristic => (
              <InfoProject
                key={characteristic.id}
                src={characteristic.src}
                height={characteristic.height}
                width={characteristic.width}
                description={characteristic.description}
                title={characteristic.title}
                subtitle={characteristic.subtitle}
              />
            ))
          }
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
      {/* values project */}
			<div className='w-full bg-secondary-color flex py-[103px] justify-center'>
				<div className='w-[90%] grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-[30px]'>
					{
						valuesProjects.map(value => (
							<Counter key={value.id} end={value.value} title={value.title} subtitle={value.subtitle} color='text-white'/>
						))
					}
				</div>
			</div>
    </main>
  )
}

export default ProjectPage
