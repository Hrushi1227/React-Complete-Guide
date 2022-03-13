import React from "react";
import Card from "../Common/Card/Card";
import Button from "../Common/Button/Button";
import { useHistory } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  // const signInLinkStyle = {
  //   color: "#0077ff",
  //   fontWeight: "bold",
  //   textDecoration: "none",
  //   marginLeft: "10px",
  // };
  const history = useHistory();
  function startRegister() {
    history.push("/authenticate");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Hrushi Web Meetings App!" icon="logo">
        <p className={styles.text}>
          Welcome to Hrushi Meetings room application here you can create your
          own room or make it public to others!
        </p>
        <div>
          <Button onClick={startRegister} text="Let's Go" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
