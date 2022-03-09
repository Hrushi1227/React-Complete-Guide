import React from "react";

const StepName = ({ onNextStep }) => {
  return (
    <>
      <div>StepName</div>
      <button onClick={onNextStep}> Next Window </button>
    </>
  );
};

export default StepName;
