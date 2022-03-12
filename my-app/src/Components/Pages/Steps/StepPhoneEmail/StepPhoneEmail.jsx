import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from "./StepPhoneEmail.module.css";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ incrementStep }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  // const incrementStep = () => {
  //   // setType(type + 1);
  // };
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button
              onClick={() => {
                setType("phone");
              }}
            >
              Phone
            </button>
            <button
              onClick={() => {
                setType("email");
              }}
            >
              Email
            </button>
          </div>
        </div>
        <Component onNextStep={incrementStep} />
      </div>
    </>
  );
};

export default StepPhoneEmail;
