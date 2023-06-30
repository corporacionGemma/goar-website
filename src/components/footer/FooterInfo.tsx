import React from 'react'
import FooterInfoContainer from './FooterInfoContainer'
import FooterTitle from './FooterTitle'
import LocationItem from '../LocationItem'
import routes from '../../utils/routes'
import { MdAlternateEmail, MdOutlineWatchLater } from 'react-icons/md'

const FooterInfo: React.FC = () => {
  return (
    <div className='w-[88%] pt-[96px] pb-[100px] grid grid-cols-4'>
      <FooterInfoContainer>
        <FooterTitle title='Construye con GOAR'/>
        <p className='mt-[17px] text-[18px] text-tertiary-footer1'>
          Somos una empresa con más de 11 años de experiencia en el rubro de
          la construcción tanto en el sector público como el privado
        </p>
        <div className='mt-[24px]'>

          <LocationItem
            href={routes.contact}
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
      </FooterInfoContainer>
      <FooterInfoContainer>
        <FooterTitle title='Ubicación'/>
      </FooterInfoContainer>
    </div>
  )
}

export default FooterInfo
