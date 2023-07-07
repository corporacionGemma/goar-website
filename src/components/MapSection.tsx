import React from 'react'

const MapSection: React.FC = () => {
  return (
    <div className='w-full h-full'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319.3210677925847!2d-71.54612948758535!3d-16.39805802852669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b82385a2139%3A0x10286fd115c1c93e!2sCentury%2021%20Diamante!5e0!3m2!1ses-419!2spe!4v1688742555315!5m2!1ses-419!2spe"
        width="600"
        height="450"
        style={{ border: 0, background: '#00235A' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='h-full'>
        </iframe>
    </div>
  )
}

export default MapSection
