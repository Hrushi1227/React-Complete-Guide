import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClickClicked }) => {
  return (
    <button onClick={onClickClicked} className={styles.button}>
      <span>{text}</span>
      <img className={styles.arrow} src="/images/Arrow.png" alt="arrow" />
    </button>
  );
};

export default Button;
