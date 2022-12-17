import React from "react";
import styles from "./LoginTab.module.css";

const LoginTab = (props) => {
  return (
    <div
      className={styles["login-tab"]}
      onClick={() => {
        props.onClick();
      }}
    >
      <i className="fas fa-right-to-bracket"></i>
      <span>Login</span>
    </div>
  );
};

export default LoginTab;
