import React from "react";
import "../../css/utils/primaryButton.css";
const PrimaryButton = (props) => {
  const { label, onClick } = props;

  return (
    <button className="primary-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
