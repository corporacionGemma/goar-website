import React from 'react'

interface Props {
  cb: () => void
  isOpen: boolean
}
const MenuIcon: React.FC<Props> = ({ cb, isOpen }) => {
  return (
    <div
      className='flex justify-center items-center bg-primary lg:hidden w-[70px] h-[70px]'
      onClick={cb}
      >
      <div className='w-[18px] bg-primary flex flex-col gap-1'>
        <span className={`rounded block h-[3px] transition-all duration-300 bg-white ${isOpen ? 'w-full' : 'w-[50%]'}`}></span>
        <span className='h-[2px] bg-white rounded w-full'></span>
        <div className='bg-white h-[3px] rounded'>
          <span className={`transition-all duration-300 ${isOpen ? 'w-0' : 'w-[50%]'} h-[3px] bg-primary rounded block`}></span>
        </div>
      </div>
    </div>
  )
}

export default MenuIcon
