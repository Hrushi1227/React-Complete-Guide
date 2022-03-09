import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import navStyle from "./Navigation.module.css";

const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };

  return (
    <nav className={`${navStyle.navbar} conatainer`}>
      <Fragment>
        <Link style={brandStyle} to="/">
          <img src="/images/waveHand.png" alt="waveHand" />
          <span style={logoText}> Hrushi </span>
        </Link>
      </Fragment>
    </nav>
  );
};

export default Navigation;
