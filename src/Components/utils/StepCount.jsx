import React, { useMemo, useRef } from "react";
import "../../css/utils/stepCount.css";

const StepCount = ({ count, isCompleted = false }) => {
  const completionClass = useMemo(
    () => (isCompleted ? "step-count-completed" : "step-count-incomplete"),
    [isCompleted]
  );

  return <p className={`step-count ${completionClass}`}>{count}</p>;
};

export default StepCount;
