import React from 'react'
import FooterInfoContainer from './FooterInfoContainer'
import FooterTitle from './FooterTitle'
import LocationItem from '../LocationItem'
import routes from '../../utils/routes'
import { MdAlternateEmail, MdOutlineWatchLater } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'
import { BiPhoneCall } from 'react-icons/bi'

const FooterInfo: React.FC = () => {
  const contactWays = [
    {
      id: 0,
      href: 'https://goo.gl/maps/GGqPNYjv4xQe3SGNA',
      gap: 'gap-3',
      information: <p>Urb. Magisterial Etapa II, Yanahuara, Arequipa</p>,
      icon: <SlLocationPin/>
    },
    {
      id: 1,
      href: 'tel:+51946305307',
      gap: 'gap-3',
      information:
        <>
          <p>(+51) 946305307</p>
          <p>(+51) 982133108</p>
        </>,
      icon: <BiPhoneCall/>
    },
    {
      id: 2,
      href: 'mailto:info@goar.pe',
      gap: 'gap-3',
      information: <p>info@goar.pe</p>,
      icon: <MdAlternateEmail/>
    }
  ]
  return (
    <div className='w-full sm:w-[88%] pt-[96px] pb-[100px] grid md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
      <FooterInfoContainer>
        <FooterTitle title='Construye con GOAR'/>
        <p className='mt-[17px] text-[18px] text-tertiary-footer1'>
          Somos una empresa con más de 11 años de experiencia en el rubro de
          la construcción tanto en el sector público como el privado
        </p>
        <div className='mt-[24px]'>

          <LocationItem
            href={routes.contact}
            type={'route'}
            information={
              <div className='text-tertiary-footer1 text-[18px] transition-all duration-300 hover:text-primary'>
                <p>Lun - Vie 9:00 - 18:00</p>
                <p>Sab 9:00 - 13:00</p>
              </div>
            }
            icon={<MdOutlineWatchLater/>}
            gap={'gap-4'}
          />
        </div>
      </FooterInfoContainer>
      <FooterInfoContainer>
        <FooterTitle title='Servicios'/>
        <ul className="mt-[17px] text-[18px] text-tertiary-footer1 flex flex-col gap-2">
          <li>Consultoría & Construcción</li>
          <li>Capacitación / Aula Virtual</li>
          <li>Proyectos Inmobiliarios</li>
          <li>Bienes y Servicios Generales</li>
        </ul>
      </FooterInfoContainer>
      <FooterInfoContainer>
        <FooterTitle title='Contáctanos'/>
        <div className="mt-[17px] text-[18px] text-tertiary-footer1 flex flex-col gap-3">
          {
            contactWays.map(item => (
              <LocationItem
                key={item.id}
                href={item.href}
                icon={item.icon}
                information={item.information}
                gap={item.gap}
              />
            ))
          }
        </div>
      </FooterInfoContainer>
      <FooterInfoContainer>
        <FooterTitle title='Ubicación'/>
        <div className='mt-[17px]'>
          <img src="/assets/map_example.png" alt="location-item" width={'300px'} height={'171px'} />
        </div>
      </FooterInfoContainer>
    </div>
  )
}

export default FooterInfo
