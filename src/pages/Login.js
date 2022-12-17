import React from "react";
import ReactDOM from "react-dom";
import styles from "./Login.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const Login = (props) => {
  const { signUp } = props;
  return ReactDOM.createPortal(
    <React.Fragment>
      <Backdrop />
      <form id={styles.form}>
        <h1>Sign In</h1>
        <div className={styles.fields}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          <small></small>
        </div>
        <div className={styles.fields}>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
          <small></small>
        </div>
        <button type="submit" id={styles.btn}>
          Sign In
        </button>
        <div id={styles.checkContainer}>
          <div id={styles.checkbox}>
            <input type="checkbox" />
            <small>Remember Me</small>
          </div>
          <div id={styles.forgotPassword}>
            <small>Forgot Password</small>
          </div>
        </div>
        <small id={styles.small}>
          Don't have an account?
          <button
            onClick={() => {
              signUp();
            }}
            id={styles.signUpBtn}
          >
            Sign Up
          </button>
        </small>
      </form>
    </React.Fragment>,
    document.getElementById("portal")
  );
};

export default Login;
