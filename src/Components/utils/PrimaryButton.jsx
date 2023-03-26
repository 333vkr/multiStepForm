import React from "react";
import "../../css/utils/primaryButton.css";
const PrimaryButton = (props) => {
  const { label, onClick,style } = props;

  return (
    <button style={style} className="primary-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
