import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.headWrapper}>
          <img src="/images/waveHand.png" alt="waveHand" />
          <h2 className={styles.headingSection}>
            Welcome to Hrushi Private Meeting Web App
          </h2>
        </div>
        <div>
          <p className={styles.text}>
            Welcome to Hrushi Meetings room application here you can create your
            own room or make it public to others
          </p>
        </div>
        <button>
          <span>Get your username</span>
          <img src="/images/Arrow.png" alt="arrow" />
        </button>
        <div>
          <span>Have an invite Text ? </span>
          <Link to="/login">Sign In </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
