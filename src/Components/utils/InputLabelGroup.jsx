import React from 'react'
import Input from './Input'
import '../../css/utils/inputLabelGroup.css'
const InputLabelGroup = (props) => {
    const {label,inputType,inputPlaceholder}=props
  return (
    <div className='input-label-group'>
        <p className='label'>{label}</p>
        <Input type={inputType} placeholder={inputPlaceholder}/>
    </div>
  )
}

export default InputLabelGroup