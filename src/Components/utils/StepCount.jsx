import React from "react";
import "../../css/utils/stepCount.css";

const StepCount = ({ count }) => {
  return <p className="step-count step-count-completed">{count}</p>;
};

export default StepCount;
