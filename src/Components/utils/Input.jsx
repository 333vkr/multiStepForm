import React from 'react'
import '../../css/utils/input.css'
const Input = (props) => {
    const {type,placeholder}=props
  return (
    <>
        <input className='input' type={type} placeholder={placeholder}/>
    </>
  )
}

export default Input