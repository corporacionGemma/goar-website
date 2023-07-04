import React from 'react'

interface Props {
  cb?: () => void
  label: JSX.Element
  style: string
}

const ButtonCarousel: React.FC<Props> = ({ cb, label, style }) => {
  return (
    <button className={`w-[140px] h-[48px] flex gap-2 text-white justify-center items-center ${style}`} onClick={cb}>{label}</button>
  )
}

export default ButtonCarousel
