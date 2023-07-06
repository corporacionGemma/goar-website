import React from 'react'
import { PeopleCard, Presentation, TitleComponent } from '../components'
import people from '../utils/people'

const Team: React.FC = () => {
  return (
    <main className='w-full flex flex-col items-center'>
      <div className='w-full'>
        <Presentation
          src={'/assets/silder_5.jpg'}
          backtitle={'SCHEDULE'}
          title={'OUR TEAM'}
          subtitle={'EXPLORE THE FEATURES'}
          description={'Etiam scelerisque tortor at lectus dapibus, nec fermentum diam feugiat. Morbi rutrum magna et dui.'}
        />
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
						people.map(person => (
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
    </main>
  )
}

export default Team
