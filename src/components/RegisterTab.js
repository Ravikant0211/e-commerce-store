import React from "react";

import styles from "./RegisterTab.module.css";

const RegisterTab = (props) => {
  return (
    <div
      className={styles["register-tab"]}
      onClick={() => {
        props.onClick();
      }}
    >
      <i className="fas fa-user-plus"></i>
      <span>Register</span>
    </div>
  );
};

export default RegisterTab;
