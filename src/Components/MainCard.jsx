import React from "react";
import "../css/mainCard.css";
import PrimaryButton from "./utils/PrimaryButton";

const MainCard = () => {
  return (
    <div className="main-card-container">
      <div className="main-card-left">left container</div>
      <div className="main-card-right">
        <PrimaryButton label="Next Step" />
      </div>
    </div>
  );
};

export default MainCard;
