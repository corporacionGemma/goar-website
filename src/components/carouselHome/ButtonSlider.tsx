import React from 'react'

interface Props {
  cb?: () => void
  label: JSX.Element
  style: string
}

const ButtonSlider: React.FC<Props> = ({ cb, label, style }) => {
  return (
    <button className={`w-[70px] h-[70px] flex gap-2 text-white justify-center items-center z-[6] ${style}`} onClick={cb}>{label}</button>
  )
}

export default ButtonSlider
