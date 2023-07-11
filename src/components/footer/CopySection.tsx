import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../utils/routes'
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa'
import socialNetWorks from '../../utils/socialNetworks'

const CopySection: React.FC = () => {
  const findIcon = (id: number): JSX.Element => {
    const icons: JSX.Element[] = [<FaFacebookF key={0}/>, <FaInstagram key={1}/>, <FaYoutube key={2}/>, <FaLinkedinIn key={3}/>]
    return icons[id]
  }
  return (
    <div className='copySectionContain w-full flex justify-center'>
      <div className='copySection px-8 sm:px-0 h-auto lg:h-[77px] w-full md:w-[86%]'>
        <Link to={routes.home} className='flex justify-center items-center w-full sm:w-[302px] h-[76px] bg-primary'>
          <div className='text-[26px] font-[900]'>
            <h1 className='max-w-min text-center text-white'>GOAR</h1>
          </div>
        </Link>
        <div className='w-full'>
        <p className="text-center font-normal py-6 lg:py-0 text-primaryPurple-200 px-0 sm:px-4 text-[14px] leading-[20px] text-tertiary-footer1">
            &copy; 2023 GOAR SAC. Todos los derechos reservados
          </p>
        </div>
        <div className='w-full sm:w-[304px] lg:w-[280px] h-[77px] border-t-[1px] lg:border-t-0 flex border-r-[1px] border-tertiary-borderFooter'>
        {
            socialNetWorks.map(item => (
                <div key={item.id} className='w-[25%] sm:w-[76px] lg:w-[70px] h-full transition-all duration-300 hover:bg-primary border-tertiary-borderFooter border-l-[1px]'>
                  <a href={item.href} target='_blank' rel="noreferrer" className='flex justify-center items-center h-full w-full'>
                  {findIcon(item.id)}
                  </a>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CopySection
