import React from "react";
import "../css/mainCard.css";
import PrimaryButton from "./utils/PrimaryButton";
import HeadingInfo from "./utils/HeadingInfo";
import Input from "./utils/Input";
import InputLabelGroup from "./utils/InputLabelGroup";
import StepCount from "./utils/StepCount";
const MainCard = () => {
  const stepOneDesc = "Please provide your name, address and phone number.";
  return (
    <div className="main-card-container">
      <div className="main-card-left">
        <StepCount count={1}/>
      </div>
      <div className="main-card-right">
        <HeadingInfo heading="Personal Info" description={stepOneDesc} />
        <div className="form-container">
        <InputLabelGroup label='Name' inputType='text' inputPlaceholder='e.g. Stephen King'/>
        <InputLabelGroup label='Email Address' inputType='text' inputPlaceholder='e.g. Stephen King@lorem.com'/>
        <InputLabelGroup label='Name' inputType='text' inputPlaceholder='e.g. +1 234 567 890'/>
        </div>
        <PrimaryButton label="Next Step" style={{position:'absolute',right:'15%',bottom:'5%'}}/>
      </div>
    </div>
  );
};

export default MainCard;
