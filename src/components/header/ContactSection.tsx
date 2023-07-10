import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { MdAlternateEmail, MdOutlineWatchLater } from 'react-icons/md'
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa'
import LocationItem from '../LocationItem'
import socialNetWorks from '../../utils/socialNetworks'
import routes from '../../utils/routes'

const ContactSection: React.FC = () => {
  const contact = [
    {
      id: 1,
      icon: <BiPhoneCall/>,
      information: <p>(+51) 946305307</p>,
      href: 'tel:+51946305307'
    },
    {
      id: 2,
      icon: <MdAlternateEmail/>,
      information: <p>info@goar.pe</p>,
      href: 'mailto:info@goar.pe'
    },
    {
      id: 3,
      icon: <MdOutlineWatchLater/>,
      information: <p>Lun - Vie 9:00 - 18:00, Sab 9:00 - 13:00</p>,
      href: routes.contact,
      type: 'route'
    }
  ]
  const findIcon = (id: number): JSX.Element => {
    const icons: JSX.Element[] = [<FaFacebookF key={0}/>, <FaInstagram key={1}/>, <FaYoutube key={2}/>, <FaLinkedinIn key={3}/>]
    return icons[id]
  }
  return (
    <div className='hidden w-full h-[40px] px-[30px] leading-[1] text-[14px] align-middle text-secondary-text lg:flex justify-between'>
      <div className='flex gap-7'>
        {contact.map(item => (
          <LocationItem key={item.id} icon={item.icon} information={item.information} href={item.href} gap={'gap-1'} type={item.type}/>
        ))}
      </div>
      <div className='flex gap-6 items-center text-[15px]'>
        {
          socialNetWorks.map(item => (
              <div key={item.id}>
                <a href={item.href} target='_blank' rel="noreferrer" className='hover:text-primary'>
                {findIcon(item.id)}
                </a>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default ContactSection
