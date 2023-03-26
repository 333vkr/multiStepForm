import React from "react";
import "../css/mainCard.css";
import PrimaryButton from "./utils/PrimaryButton";
import HeadingInfo from "./utils/HeadingInfo";
import Input from "./utils/Input";
import InputLabelGroup from "./utils/InputLabelGroup";
const MainCard = () => {
  const stepOneDesc = "Please provide your name, address and phone number.";
  return (
    <div className="main-card-container">
      <div className="main-card-left">left container</div>
      <div className="main-card-right">
        <HeadingInfo heading="Personal Info" description={stepOneDesc} />
        <InputLabelGroup label='Name' inputType='text' inputPlaceholder='e.g. Stephen King'/>
        <InputLabelGroup label='Email Address' inputType='text' inputPlaceholder='e.g. Stephen King@lorem.com'/>
        <InputLabelGroup label='Name' inputType='text' inputPlaceholder='e.g. +1 234 567 890'/>
        <PrimaryButton label="Next Step"/>
      </div>
    </div>
  );
};

export default MainCard;
