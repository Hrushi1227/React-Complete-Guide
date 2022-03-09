import React from "react";

import styles from "./Card.module.css";

const Card = ({ title, icon, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headWrapper}>
        <img src={`/images/${icon}.png`} alt={`${icon}`} />
        <h2 className={styles.headingSection}>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Card;
