import React from 'react'
import '../../css/utils/headingInfo.css'
const HeadingInfo = ({heading,description}) => {
  return (
    <div className='heading-info'>
        <h2 className='heading'>{heading}</h2>
        <p className='description'>{description}</p>
    </div>
  )
}

export default HeadingInfo