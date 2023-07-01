import React from 'react'

interface Props {
  label: string
  type: string
  styleButton?: string
  cb: () => void
}

const Button: React.FC<Props> = ({ type, label, cb, styleButton = '' }) => {
  return (
    <>
      <button className={`w-full ${type} ${styleButton}`} type="button" onClick={cb}>{label}</button>
    </>
  )
}

export default Button
