import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Authenticate = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const Step = steps[currentStep];

  function incrementStep() {
    setCurrentStep(currentStep + 1);
  }

  return <Step onNextButton={incrementStep} />;
};

export default Authenticate;
