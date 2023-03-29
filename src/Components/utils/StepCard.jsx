import React from 'react'
import '../../css/stepCard.css'
import StepCount from './StepCount'
const StepCard = (props) => {
    const {count,stepLabel,heading,isCompleted}=props
  return (
    <div className='step-card-container'>
        <div className="step-card-left">
            <StepCount count={count} isCompleted={isCompleted}/>
        </div>
        <div className="step-card-right">
            <p className='step-label'>{stepLabel}</p>
            <p className='step-heading'>{heading}</p>
        </div>
    </div>
  )
}

export default StepCard 