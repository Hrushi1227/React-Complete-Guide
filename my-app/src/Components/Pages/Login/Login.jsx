import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Login = () => {
  const [stepIs, setStep] = useState(1);
  const SelectedStepIs = steps[stepIs];

  const incrementStep = () => {
    setStep(stepIs + 1);
  };
  return (
    <div>
      <SelectedStepIs onNextStep={incrementStep} />
    </div>
  );
};

export default Login;
