import React, { useState } from "react";
import Card from "../../../../Common/Card/Card";
import Button from "../../../../Common/Button/Button";
import TextInput from "../../../../Common/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";

const Email = ({ onNextOnComponent }) => {
  const [email, setEmail] = useState("");
  return (
    <Card title="Enter your email id" icon="email-emoji">
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={onNextOnComponent} />
        </div>
        <p className={styles.bottomParagraph}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Email;
