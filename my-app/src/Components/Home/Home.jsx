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
  const startRegister = () => {
    history.push("/authenticate");
    console.log("Hello Rushi Clciked ....  ");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Hrushi Private Meeting Web App " icon="waveHand">
        <div className={styles.card}>
          <div>
            <p className={styles.text}>
              Welcome to Hrushi Meetings room application here you can create
              your own room or make it public to others
            </p>
          </div>
          <Button onClickClicked={startRegister} text="Let's Go "></Button>
          <div className={styles.signInWrapper}>
            <span className={styles.hasInvite}>Have an invite text ? </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
